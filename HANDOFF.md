# Convites de casamento animados — repasse completo

Documento de transferência. Reúne tudo que foi decidido, testado e construído
até 9 de outubro de 2026. Serve para outra conversa continuar sem perder
contexto.

---

## 1. O negócio

Matheus e Bia vendem **convites de casamento digitais animados** no Brasil. O
convite é um site de uma página só, com link próprio, que a noiva manda no
WhatsApp. Abre com uma animação de envelope, mostra os dados do casamento e
recebe a confirmação de presença.

**O modelo:** um motor reutilizável. Cada convite novo é só um formulário
preenchido — **não gasta token de IA nenhum**. O custo de IA é por *template*,
pago uma vez: gerar a imagem do envelope e o vídeo de abertura.

### O que a pesquisa de concorrente mostrou

Concorrentes analisados: `nutticonvites.com` (e subdomínios), `convideivoce.com`,
`convites.brindealstudio.com`, `comvitly.com`.

| Achado | Consequência |
|---|---|
| Preço: **€150** modelo pronto, **€9.500** personalizado, **€5 por revisão** | Há margem enorme no Brasil |
| Cada convite carrega de **4 a 24 arquivos de mídia** | O que separa caro de barato é mídia de verdade, não CSS |
| Nomes de arquivo deles começam com **`kling_`** | **A abertura deles é vídeo gerado por IA, não código** |
| Interior deles é ilustrado: molduras ornamentadas sobre aquarela | Tipografia sobre cor chapada parece barato |
| Têm seção **"Programação do dia"** | Entrou no nosso produto |
| Dor da noiva brasileira: erro de grafia, atraso, fornecedor sumido | **Revisão ilimitada grátis** é o posicionamento natural |
| Convite impresso desperdiçado custa ~R$533 | É o número que justifica o digital |

---

## 2. A regra central do produto

> **A abertura é o VÍDEO. Ponto.**

Isso foi decidido depois de três tentativas rejeitadas de fazer a abertura em
CSS. O recorte animado em CSS — aba girando, lacre quebrando, seis tempos —
foi chamado de *"recorte animado feio de css"*, *"amador"*, e está **desligado
por padrão** no motor. Continua existindo atrás de um campo (`aberturaCss`),
desligado.

**Sem vídeo**, o convite abre com a **capa parada**: a foto aparece, o
convidado toca, ela clareia e sai em um beat. Nada de fingir envelope.

Frase de referência do Matheus: *"vender algo abaixo é melhor nem fazer"*.

---

## 3. O pipeline validado

Três passos. Foi validado primeiro no template **Marfim** e depois repetido.

```
1. IMAGEM     Gemini / ChatGPT / Imagen → imagem 9:16
2. VÍDEO      Kling · image to video · 5s · SEM ÁUDIO → mp4
3. MONTAGEM   tira áudio, escala 720×1280, extrai poster, gera webm,
              entra no campo "Vídeo de abertura (cortina)" do estúdio
```

**Não gere vídeo a partir de texto puro.** O modelo reinventa o objeto a cada
rodada e você perde consistência entre templates. Sempre image-to-video.

### Molde do prompt de IMAGEM

```
[OBJETO: o que está na peça de referência], preenchendo todo o quadro vertical
de borda a borda, sem mesa, sem superfície e sem adereços ao redor. Uma peça só
no quadro. [DETALHE DO ORNAMENTO]. [LACRE]. [O centro é liso e vazio, reservado
para texto] (só nos que são cartão). [LUZ]. Proporção 9:16. Sem texto, sem
letras, sem números, sem marca d'água.
```

**As duas frases que não podem cair:**

1. `preenchendo todo o quadro vertical de borda a borda, sem mesa, sem
   superfície e sem adereços ao redor` — foi ela que tirou a foto de "flat lay
   bonitinha" e pôs a peça na tela inteira, que é o que o concorrente faz.
2. `liso e vazio, reservado para texto` — nos que são cartão. O nome dos noivos
   entra por cima, no navegador. Se o modelo escrever, a peça se perde.

### Molde do prompt de ANIMAÇÃO

Três frases. A terceira é a que mais importa.

```
[O QUE SE MOVE NA PEÇA]. A luz branca e quente cresce e cobre todo o quadro.
Câmera totalmente fixa. Movimento lento e contínuo. Nada mais se move.
```

**No passo 2 não descreva de novo cor, papel, flor ou lacre.** Já está na
imagem. Repetir é o que faz o Kling redesenhar e borrar.

### Negativo (nos dois passos)

```
mãos, dedos, pessoas, rosto, texto, letras, escrita, caligrafia, dois objetos,
vários cartões, conjunto de peças, composição, flat lay, colagem, movimento de
câmera, zoom, corte, transição, brilho em faixa, reflexo diagonal, lens flare,
luz laranja, objeto trocando de forma, mesa, superfície, fundo visível,
distorção, baixa resolução
```

---

## 4. Defeitos conhecidos do Kling (aprendidos pagando crédito)

De 7 vídeos gerados, 4 vieram usáveis e 3 foram descartados. Os defeitos se
repetem:

| Defeito | Por que acontece | Blindagem |
|---|---|---|
| **Inventa texto no cartão** | O treino diz que convite tem texto escrito | `A luz branca cobre o quadro antes do cartão de dentro ficar visível. Nenhuma escrita, nenhuma letra e nenhum texto aparecem em momento algum.` |
| **Entra uma mão no quadro** | Fotos de convite no treino são seguradas na mão | `Nenhuma mão, nenhum dedo e nenhuma pessoa entram no quadro.` |
| **O fim vira laranja saturado** | Tendência do modelo a "golden hour" | `A luz final é branca, nunca laranja.` |
| **Risco de luz diagonal** (tipo efeito pronto) | Causado pela frase "a luz corre pela superfície" | Não use essa frase. Use `Nenhum brilho em faixa, nenhum risco de luz e nenhum reflexo atravessam o papel.` |
| **A peça troca de forma no meio** | Deriva do modelo | `O [objeto] continua exatamente onde está, sem trocar de forma, de cor ou de posição.` |
| **Pula de enquadramento** | Deriva | Cortar o vídeo antes do pulo |

### A regra prática que mais salvou crédito

> **A parte boa está sempre no começo. O fim apodrece.**

Em vez de regerar, **corte**. O movimento bom acontece nos primeiros 3-5
segundos. Corte antes do defeito e embuta um fade para branco nos últimos
0,9s — ele fecha o movimento sozinho e encaixa na lavagem branca que o motor
já faz na entrega.

Comando usado:
```sh
ffmpeg -i entrada.mp4 -t 4.3 \
  -vf "scale=720:1280,fade=t=out:st=3.4:d=0.9:color=white" \
  -an -c:v libx264 -crf 23 -pix_fmt yuv420p saida.mp4
```

### O movimento muda conforme o objeto

| O que está na peça | O que se move |
|---|---|
| Envelope com aba e lacre | a aba gira sobre a dobra, o cartão sobe de dentro |
| Envelope de aba ondulada/festonada | a mesma coisa, e o forro interno aparece |
| Papel vegetal amarrado com fita | a fita desata e o papel abre |
| Capa de papel vegetal sobre o cartão | a capa escorrega para baixo |
| Conjunto de cartões com fita | a fita afrouxa e os cartões abrem em leque |
| Cartão só, sem envelope | entra girando como página de livro e assenta |

---

## 5. O produto técnico

Repositório: **github.com/matsucamargo-byte/Convitescasamento** (branch `master`)

```
estudio.html        ← o painel que se usa (gerado, não editar)
estudio.src.html    ← fonte do painel, 92 campos
engine/
  templates.js      ← 21 paletas + 15 ornamentos vetoriais
  invite.css        ← estilo do convite
  invite.js         ← renderizador e animações
build.sh            ← junta tudo em estudio.html
build-artifact.py   ← monta a vitrine publicável
arte/               ← fotos de envelope (cheio/ e mini/)
video/              ← vídeos de abertura (leve/ = versão da vitrine)
```

### Como o convite abre

| Campo preenchido | O que acontece |
|---|---|
| Vídeo de abertura (cortina) | O vídeo **é** a abertura; revela quando termina |
| Nenhum | Capa parada: a foto aparece, toca, clareia e sai |

Com foto, **nada se escreve por cima** — texto sobre o lacre fica ilegível, o
teste mostrou. Sem foto, entra o ornamento em relevo do template com o
monograma e os nomes.

### Como o convidado navega: modo livro

Padrão. Cada bloco do convite vira uma **página inteira**. O convidado arrasta
o dedo e a folha gira sobre a dobra, com sombra, como num livro. Tem bolinhas
embaixo e a dica "arraste →" que some na primeira virada.

A rolagem horizontal é **nativa** (`scroll-snap`), não arrasto feito em JS — é
ela que entrega o atrito e a inércia certos no telefone. O JS só desenha a
virada por cima. Com `prefers-reduced-motion` o giro some e o encaixe fica.

Alternativa no estúdio: **Rolar** (página corrida).

### Rostos na ilustração

Para os templates em que o casal é desenhado. Sobe-se **só a foto do rosto** de
cada um e o estúdio recorta, **no navegador, sem IA e sem servidor** — o
estúdio precisa abrir com dois cliques e funcionar offline.

- **Automático**: apaga o fundo a partir da borda da foto. Pega retrato em
  parede lisa, que é a foto que a noiva manda.
- **Oval**: corta em elipse com borda esfumada. Funciona com qualquer fundo.
- O automático se mede sozinho: se limpou menos de 6% ou mais de 88%, errou, e
  o oval entra no lugar.

Depois é posição: horizontal, vertical e tamanho em %, por rosto.

### O que entra no convite

Envelope/vídeo de abertura · capa com monograma e coroa de louros · contagem
regressiva · nossa história · **pais dos noivos** (quase obrigatório no convite
brasileiro) · cerimônia e recepção com link do Maps · **programação do dia** ·
dress code · galeria · **RSVP em formulário na própria página com tela de
sucesso** · PIX com botão de copiar · música (só começa depois do toque, que é
o gesto que libera o áudio) · card de prévia do WhatsApp.

Cada bloco só aparece se for preenchido.

### Acabamento tipográfico já implementado

Algarismos antigos nas datas e tabulares na contagem · ligaduras e kerning
ativados · quebra equilibrada nos títulos · letterpress no monograma · borda
deckle na carta · contorno de sombra nas pétalas (sem ele o relevo cego funde
as camadas numa massa só) · filete com losango ao centro.

---

## 6. A cartela: 21 templates

Cada paleta sai de um tema com demanda medida ou de um convite de referência
real, não de gosto. Cada template troca também o par tipográfico — mesma
serifada em tudo faz 21 convites virarem um.

**Os 12 primeiros (de pesquisa de tendência):**

| Template | Vem de |
|---|---|
| Cloud Dancer | cor do ano 2026 |
| Marfim | convenção da papelaria clássica |
| Mocha | paleta terrosa de 2026 |
| Oliva | casamento ao ar livre, o pedido padrão |
| Sálvia | paleta anunciada dominante para 2027 |
| Esmeralda | salão à noite |
| Borgonha | inverno e catedral |
| Ameixa | saturação alta, tendência 2027 |
| Blush | coquette; busca por renda subiu 280% |
| Serenity | a paleta que mais viralizou no nicho |
| Toscana | destination wedding |
| Linho | urbano, à noite, sem bege |

**Os 9 seguintes (dos convites de referência do Canva/Pinterest):**

| Template | Veio da peça | Abertura |
|---|---|---|
| Vinha | cartão ondulado, traço oliva, velas e uvas | canto |
| Bruma | papel vegetal, chiffon, lavanda, lacre de coroa | aba |
| Traço | casal desenhado em linha, rosto de foto encaixado | aba |
| Château | aquarela de fachada, caligrafia formal | aba |
| Rute | eucalipto nos cantos, versículo, nomes dos pais, pergolado | canto |
| Campo | envelope marfim deckle, pérolas na aba, lacre dourado | canto |
| Lírio | envelope azul de aba festonada, forro toile | aba |
| Hortênsia | vegetal com hortênsia em traço, fita de cetim azul | aba |
| Trigo | vegetal com chiffon desfiado, lacre de alecrim | canto |

**15 ornamentos vetoriais autorais** em dois acabamentos (relevo seco e hot
stamping): peonia, eucalipto, oliveira, arco, renda, laco, cipreste, videira,
louro, lirio, hortensia, trigo, campo, alianca, brasao.

---

## 7. Estado atual (9/10/2026)

### Vitrine no ar
**https://claude.ai/artifact/HsABBMvKAYRMumzdAn1R8L** — 13 modelos, privada.

### Folha de prompts
**https://claude.ai/artifact/9E4CuMvstpDAEZfX2JGyVu** — cada convite de
referência com a foto e os dois prompts, com botão de copiar.

### O que está pronto

| | Estado |
|---|---|
| **21 templates** | paleta, tipografia e ornamento prontos no estúdio |
| **13 com arte de envelope** | aparecem na vitrine |
| **6 com vídeo de abertura** | Marfim, Lírio, Rute, Campo, Trigo, Hortênsia |
| **7 com capa parada** | Cloud Dancer, Sálvia, Oliva, Mocha, Bruma, Vinha, Château |

Os 13 foram testados um a um, abrindo cada um no viewport de celular: os 6 com
vídeo tocam até o fim (`ended: true`) e revelam; os 7 sem vídeo abrem com a
capa parada. Modo livro funcionando em todos, 10 páginas, zero erro de console.

### O que falta

1. **Vídeo de Bruma e Vinha** — as tentativas saíram com defeito e foram
   descartadas. Os prompts corrigidos já existem.
2. **Imagem do Traço** — o único dos 9 que ainda não foi gerado. É o do casal
   desenhado em linha com rosto de foto encaixado. Gerar com os dois **de pé,
   lado a lado** — é desse quadro que a animação parte para ele levantar ela no
   colo.
3. **8 templates sem arte**: Esmeralda, Borgonha, Ameixa, Blush, Serenity,
   Toscana, Linho, Traço.

### Como um template entra na vitrine sozinho

Basta a arte cair na pasta. O `build-artifact.py` varre `arte/cheio/<id>.jpg` —
chegou a foto, o modelo aparece. Não se mexe em código.

```
arte/<id>.jpg          foto do envelope (860×1528)
arte/cheio/<id>.jpg    recortada em 15–85% na largura e 23–77% na altura
arte/mini/<id>.jpg     miniatura da cartela
video/<id>.mp4         vídeo 720×1280 sem áudio
video/leve/<id>.mp4    540×960 crf 28, para a vitrine
video/leve/<id>.webm   VP9, segunda fonte
```

Ids: `cloud marfim mocha oliva salvia esmeralda borgonha ameixa blush serenity
toscana linho vinha bruma traco chateau rute campo lirio hortensia trigo`

---

## 8. Armadilhas técnicas já pagas

Coisas que quebraram e custaram tempo. Não repetir.

| Problema | Causa | Solução |
|---|---|---|
| Vídeo não tocava na vitrine, mas o convite aparecia | Só o H.264 embutido; navegador sem codec proprietário não achava fonte, dava erro silencioso e o motor caía no fallback revelando na hora | **Sempre embutir MP4 + WebM.** O MP4 é o que o iPhone toca; o VP9 torna a página verificável |
| Vitrine não funcionava no celular, não clicava em nada | iOS abre HTML baixado num visualizador que **não executa JavaScript** | Publicar como Artifact (URL de verdade), nunca mandar arquivo |
| Links de template não levavam a lugar nenhum | Índice com links para arquivos irmãos que não foram baixados junto | Um arquivo único, autocontido |
| Artifact recusado | Teto de **16 MB** por página | Reduzir vídeo para 540×960 crf 28 |
| `radial-gradient(circle <percentage>)` sumia | CSS inválido: `circle` exige comprimento absoluto | Emitir em `vw` |
| Pétalas viravam uma massa só | Relevo cego contorna só a silhueta externa | Fio de sombra no contorno das formas preenchidas |
| Folhas e pétalas giravam errado | Rotação em torno da origem em vez do ponto onde nascem | `rotate(ângulo cx cy)` no ponto de nascimento; giro = `atan2(dy,dx) + 90` |
| Ponta de pétala virava espinho | Os dois controles do ápice juntos | Afastar horizontalmente |
| Avaliar animação por prints | 6 stills não mostram uma sequência de 6 tempos | **Gravar vídeo da página e extrair quadros densos** — dois bugs reais apareceram em minutos |

**Rede:** o ambiente de desenvolvimento **não tem acesso de saída** aos
domínios dos concorrentes. Toda a análise saiu de prints, HTML baixado e
gravações de tela que o Matheus mandou.

---

## 9. Como o Matheus trabalha

Vale respeitar, economiza atrito:

- **Seja objetivo.** Nada de explicação longa. *"não quero gastar mais tokens
  com informações que você está gerando de forma ridícula"*
- **Nada pela metade.** *"não é metade bom e metade ruim"*
- **Não invente.** Siga a referência que ele mandou, não o que você acha que
  fica bom.
- **Não construa antes da hora.** Ele avisa quando a entrega dele chegou.
- **Mobile é onde roda.** Tudo é testado em viewport de celular.
- Quando pede prompt, quer **o prompt no chat**, não um arquivo.

---

## 10. Observação comercial

As imagens de referência vieram do Canva e do Pinterest — são desenhos de
outras pessoas. Usar como **base** (paleta, tipo de peça, disposição, clima) é
o que virou os templates e não tem risco. Animar e vender o desenho exato de
terceiro é onde mora o risco de notificação. Para o que vai ao site de venda,
o seguro é arte própria, mesmo que gerada a partir do que a referência mostra.

Isso foi levantado uma vez e a decisão é do Matheus.
