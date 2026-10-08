# Animar as fotos que você já tem

**Um passo, não dois.** A foto do convite é o primeiro quadro. Você joga ela
no Kling em *image to video*, descreve só o movimento, e sai o vídeo de
abertura. Não tem prompt de imagem, não tem geração de arte nova.

Foi assim que o Marfim funcionou, e é assim que o concorrente faz — os nomes
dos arquivos deles entregam: `kling_20260807_video_...mp4`.

---

## O que validamos no Marfim, passo a passo

1. Imagem 9:16 pronta
2. **Kling → image to video → 5s → sem áudio.** Só o movimento no prompt
3. Baixou o mp4 e me mandou
4. Aqui: tirei o áudio, escalei pra 720×1280, puxei o quadro 0 como poster,
   e gerei um webm como segunda fonte
5. Entrou no campo **Vídeo de abertura (cortina)** do estúdio
6. O convite revela sozinho quando o vídeo acaba

Com as suas fotos do Canva, o passo 1 já está feito. Você começa do 2.

---

## O molde do movimento

Três frases, nessa ordem. A terceira é a que mais importa: sem ela o Kling
passeia com a câmera e o vídeo não serve de abertura.

> [O QUE SE MOVE NA FOTO].
> Uma luz quente e dourada cresce de dentro até preencher o quadro.
> Câmera totalmente fixa. Movimento lento e contínuo. Nada mais se move.

**Negativo:**

```
movimento de câmera, zoom, corte, transição, mãos, pessoas, rosto, texto novo, letras novas, distorção, deformação do papel, baixa resolução
```

**O que o Kling não pode fazer:** mexer no texto que já está na foto. Se o
prompt pedir movimento demais, ele redesenha as letras e sai borrado. Por
isso o movimento é sempre de **uma peça só** — a aba, a fita, a capa — e o
resto fica parado.

---

## O movimento muda conforme o objeto da foto

É isso que eu queria dizer quando falei que não dá pra usar o mesmo prompt
nos dez. Olhe a foto e veja o que nela **abre**:

| O que está na foto | O que se move | Frase para a primeira linha |
|---|---|---|
| Envelope com aba e lacre | a aba gira sobre a dobra | `A aba superior do envelope abre lentamente para trás, girando sobre a dobra, e o cartão sobe de dentro` |
| Envelope de aba ondulada | a mesma coisa, mas a onda pega luz | `A aba ondulada abre lentamente para trás, girando sobre a dobra, e cada onda da borda pega a luz uma depois da outra` |
| Papel vegetal amarrado com fita | a fita desata | `As pontas da fita deslizam para os lados, o nó se desfaz e o papel vegetal se abre devagar para fora do quadro, revelando o cartão embaixo` |
| Capa de papel vegetal por cima do cartão | a capa desce | `A capa de papel vegetal escorrega devagar para baixo, saindo do quadro, e deixa o cartão à mostra` |
| Conjunto de cartões com fita | o maço abre em leque | `A fita se afrouxa e desliza para os lados, e os cartões se abrem em leque até o de cima ficar sozinho no centro` |
| Cartão só, impresso, sem envelope | a luz corre e a câmera entra devagar | `A luz corre devagar pela superfície do papel, realçando o relevo do traço, e o cartão se aproxima lentamente` |

A última linha é a saída para as fotos que são **cartão e nada mais** — não
tem o que abrir, então a abertura é luz e aproximação. Fica bom, mas é o mais
fraco dos seis. Se uma foto sua for assim e você quiser abertura de verdade,
o caminho é fotografar/gerar o envelope dela depois, não forçar no prompt.

---

## Montar o prompt

Pegue a linha da tabela, cole as outras duas do molde, e mande junto com a
foto. Exemplo completo, para uma foto de envelope com lacre:

```
A aba superior do envelope abre lentamente para trás, girando sobre a dobra, e o cartão sobe de dentro. Uma luz quente e dourada cresce de dentro até preencher o quadro. Câmera totalmente fixa. Movimento lento e contínuo. Nada mais se move.
```

Mais nada. Não descreva a cor, o papel, a flor, o lacre — **já está na foto**.
Descrever de novo é o que faz o Kling redesenhar e estragar.

---

## Depois que o vídeo sair

Me manda o mp4. Eu faço o resto (áudio, escala, poster, webm) e ele entra no
estúdio. Foi o que fizemos com o Marfim e levou poucos minutos.

Se quiser fazer você mesmo:

```sh
ffmpeg -i entrada.mp4 -an -vf scale=720:1280 -crf 24 video/<id>.mp4
ffmpeg -i video/<id>.mp4 -frames:v 1 video/<id>-poster.jpg
```

---

## Sobre usar a arte do Canva direto

Uma coisa que vale dizer uma vez: se a foto é um modelo pronto do Canva ou
do Pinterest, ela foi desenhada por outra pessoa. Animar e vender aquele
desenho exato é onde mora o risco de notificação.

O que não tem risco é usar as fotos como **base**: a paleta, o tipo de
objeto, a disposição, o clima. Isso é o que virou os templates aqui dentro,
e é o que eu recomendo. Para os vídeos de abertura que vão para o site de
venda, o ideal é arte sua — mesmo que gerada a partir do que a foto mostra.

Você decide. Eu sigo do jeito que você quiser; só não queria que isso
aparecesse depois.

---

## Os templates que saíram das fotos

Nove, já dentro do estúdio. Cada um pega a paleta, o par tipográfico e o
ornamento de uma das fotos. Isso não gasta geração nenhuma — é dado em
formulário.

| Template | Veio da foto de | Paleta | Abertura |
|---|---|---|---|
| **Vinha** | cartão ondulado, traço oliva, velas e uvas | creme · oliva · lacre vinho | canto |
| **Bruma** | papel vegetal com fita e flor seca azul | azul empoeirado · lacre dourado | aba |
| **Traço** | casal desenhado em linha | creme · verde profundo | aba |
| **Château** | aquarela de fachada, caligrafia formal | marfim · ardósia · ouro | aba |
| **Rute** | eucalipto nos cantos, versículo, pais | off-white · verde seco | canto |
| **Campo** | envelope rosé de borda rasgada | rosé queimado · ouro | canto |
| **Lírio** | conjunto azul com forro estampado | azul toile · ouro | aba |
| **Hortênsia** | capa vegetal com hortênsia e cetim | lilás azulado · ouro | aba |
| **Trigo** | três cartões em fita de chiffon | creme palha · ouro fosco | canto |

**Confira essa tabela contra as fotos.** Eu li elas quando apareceram na tela,
mas elas não chegaram no disco aqui, então não consigo reabrir para conferir.
O que estiver errado, me diga e eu troco — é uma linha de código por template.

Para o modelo entrar na vitrine ele precisa da arte em `arte/cheio/<id>.jpg`.
Ids: `vinha` `bruma` `traco` `chateau` `rute` `campo` `lirio` `hortensia`
`trigo`.
