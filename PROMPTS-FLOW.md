# Prompts de mídia — Flow / Veo 3

A abertura dos concorrentes premium é vídeo gerado por IA, não CSS. Os nomes
dos arquivos deles entregam: `kling_20260807_video_faca_uma_a_5964_0.mp4`.
Este arquivo é para você produzir o equivalente.

---

## Como o Flow funciona, e por que isso muda o prompt

**Não gere direto de texto.** Veo 3 a partir de texto puro inventa o objeto a
cada rodada: o envelope muda de cor, o lacre troca de lugar, a proporção
dança. Você perde o controle justamente no que precisa ser consistente entre
os 12 templates.

**O caminho é em dois passos:**

1. **Gere o quadro inicial** como imagem (Gemini, ChatGPT ou Imagen). Aqui
   você trava cor, textura, enquadramento e o lacre.
2. **Leve a imagem para o Flow** e descreva **só o movimento**. O Veo anima o
   que já existe no quadro em vez de inventar.

Isso também barateia: errou o movimento, você regenera o vídeo sem refazer a
arte.

**Limites que valem sempre**

| Item | Valor |
|---|---|
| Duração | 8s é o teto do Veo 3. Use 5s — a abertura do convite revela em 2,7s |
| Proporção | 9:16 vertical |
| Áudio | **Desligue.** A página já tem trilha própria; dois áudios brigam |
| Texto na imagem | Nunca. Modelo escreve errado e estraga a peça |

---

## O molde

Troque só o que está entre colchetes.

### Passo 1 — quadro inicial (Gemini / ChatGPT / Imagen)

> Fotografia cenital de um envelope de convite de casamento fechado, em
> [PAPEL], visto de cima, preenchendo o quadro vertical.
> [ORNAMENTO] em relevo seco nas laterais superior e inferior.
> Lacre de cera [COR DO LACRE] ao centro, com [GRAVAÇÃO DO LACRE], textura
> fosca e borda irregular.
> Apoiado sobre [SUPERFÍCIE], com [ADEREÇOS] ao redor.
> [LUZ]. Sombras suaves e longas. Profundidade de campo rasa.
> Estética de papelaria fina, fotografia de produto editorial.
> Proporção 9:16.
> Sem texto, sem letras, sem números, sem marca d'água.

### Passo 2 — movimento (Flow, a partir da imagem)

> A aba superior do envelope abre lentamente para trás, girando sobre a
> dobra. Uma luz quente escapa de dentro. Um cartão de papel desliza para
> cima, saindo do envelope.
> Câmera totalmente fixa. Movimento lento e contínuo. Nada mais se move.

### Negativo (nos dois passos)

> texto, letras, números, marca d'água, logotipo, mãos, pessoas, rosto,
> movimento de câmera, zoom, corte, transição, distorção, baixa resolução

---

## Os 12 templates

Pegue o molde acima e substitua pela linha do seu template.

| # | Template | PAPEL | ORNAMENTO | LACRE | GRAVAÇÃO | SUPERFÍCIE | ADEREÇOS | LUZ |
|---|---|---|---|---|---|---|---|---|
| 1 | **Cloud Dancer** | papel algodão off-white, textura de linho | renda delicada formando arco | cera branco perolado | uma flor pequena | linho branco amassado | pérolas soltas, renda antiga | difusa de manhã, janela ampla |
| 2 | **Marfim** | papel algodão marfim, borda deckle | peônia aberta com folhagem | cera dourada | monograma liso | mármore claro | gipsofila seca, fita champanhe | natural lateral, fim de tarde |
| 3 | **Mocha** | papel cor mocha, textura areia | laço de fita de seda nude | cera marrom café | ramo fino | madeira clara | folhas secas caramelo, fita nude | quente lateral, fim de tarde |
| 4 | **Oliva** | linho cor oliva | ramo de oliveira | cera verde oliva | folha de oliveira | pedra rústica | azeitonas verdes, ramos frescos | mediterrânea, sol baixo |
| 5 | **Sálvia** | papel verde sálvia claro | ramo de eucalipto | cera sálvia | eucalipto | mármore branco | eucalipto fresco, fita champanhe | clara de manhã, sombra curta |
| 6 | **Esmeralda** | papel verde esmeralda profundo | moldura art déco em prata | cera prata | losango geométrico | mármore preto | vidro facetado, prata escovada | dramática lateral, fundo escuro |
| 7 | **Borgonha** | papel borgonha texturizado | peônia em dourado | cera dourada | monograma liso | veludo vinho | rosas borgonha, velas acesas | quente de velas, inverno |
| 8 | **Ameixa** | papel cor ameixa | laço de fita rosé empoeirado | cera rosé | flor pequena | seda vinho claro | pétalas ameixa, fita de veludo | suave difusa, fim de tarde |
| 9 | **Blush** | papel rosé claro | renda delicada em arco | cera rosé | flor pequena | tecido claro | pétalas de rosa, fitas de cetim, pérolas | suave e romântica, contraluz leve |
| 10 | **Serenity** | papel azul sereno claro | ramos finos em relevo branco | cera branco perolado | ramo fino | mármore claro | hortênsias azul claro, fita de seda | natural de janela, leve |
| 11 | **Toscana** | papel artesanal terracota, borda deckle | aquarela de villa com ciprestes | cera terracota | ramo de oliveira | mesa de pedra | ramos de oliveira, selo de latão | dourada de fim de tarde |
| 12 | **Linho** | papel preto fosco texturizado | arco dourado em hot stamping | cera dourada | monograma liso | pedra escura | latão escovado, linho preto | lateral dramática, noturna |

---

## Variantes de movimento

O molde usa a abertura de aba. Dois templates pedem outra coisa.

**Toscana e Oliva** usam abertura por canto (`peel` no estúdio):

> O canto inferior direito do envelope se levanta devagar e a capa desliza
> para fora do quadro, revelando o cartão que estava embaixo.
> Câmera totalmente fixa. Movimento lento. Nada mais se move.

**Variante Invitely** (igual à sua referência turca), para Cloud Dancer e Blush:

> Dois painéis laterais com relevo floral tridimensional deslizam para os
> lados, afastando-se do centro, revelando o cartão entre eles.
> Câmera totalmente fixa. Movimento lento e simétrico.

---

## Fundo da capa

Entra atrás do nome do casal, com véu por cima. Não é o envelope: é o clima.

> Fotografia cenital de [ADEREÇOS do template] sobre [SUPERFÍCIE do template],
> [LUZ do template], composição com área central vazia, profundidade de campo
> rasa, paleta [FAMÍLIA do template], estética de papelaria fina.
> Proporção 9:16. Sem texto, sem letras, sem marca d'água.

**A área central vazia é o detalhe que importa.** É onde o nome do casal vai
ficar. Imagem cheia no meio briga com a tipografia e o véu não resolve.

---

## Ornamento em PNG

Substitui o floral vetorial do envelope. Um por template.

> Ilustração botânica em aquarela de [ORNAMENTO do template], tons [FAMÍLIA do
> template], pincelada solta e delicada, composição horizontal simétrica,
> fundo transparente, estilo papelaria fina.
> Sem texto, sem moldura, sem sombra, sem fundo.

PNG com transparência, 1200px de largura, proporção larga e baixa.

---

## Ordem de produção

Não gere os 12 de uma vez. Faça assim:

1. **Marfim primeiro**, só o quadro inicial. Olhe. Ajuste o prompt até a
   imagem ficar boa.
2. Leve para o Flow, gere o movimento. Confira se a câmera ficou mesmo parada.
3. Cole no estúdio, campo **Vídeo de abertura (cortina)**, e veja no telefone.
4. Só então rode os outros 11, reaproveitando o prompt que já deu certo.

Errar no primeiro custa uma geração. Errar nos doze custa doze.

---

## Depois de gerar

Suba os arquivos no Netlify Drop (uma pasta com todos), pegue a URL de cada
um e cole nos campos do estúdio:

| Arquivo | Campo |
|---|---|
| Vídeo 5s | Vídeo de abertura (cortina) |
| Primeiro quadro em JPG | Poster do vídeo |
| Fundo da capa | Imagem ou vídeo de fundo da capa |
| Ornamento PNG | Ornamento próprio |

O poster importa: é o que aparece enquanto o vídeo carrega. Sem ele o
convidado vê preto por um segundo.

Cada conjunto serve para todos os convites daquele template. Custo único.
