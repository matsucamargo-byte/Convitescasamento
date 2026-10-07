# Prompts da capa ilustrada

A gravação do Nutti mostrou onde está o gap: a abertura já está no
nível, mas o **interior** deles é ilustrado e o seu é tipografia sobre
cor chapada. A capa é a tela mais vista do convite, então é onde o
investimento rende mais.

---

## Por que uma imagem só, e não moldura separada

A tentação é gerar a moldura em PNG transparente e sobrepor. Não faça.
Modelo de imagem não entrega transparência confiável, e você ia perder
geração atrás de geração recortando fundo.

**Gere a capa inteira como uma imagem só**: moldura, paisagem e flores
já compostas, com o **miolo vazio**. Os nomes entram por cima, no
navegador, com a tipografia do template. É exatamente o que o Nutti faz.

No estúdio vai no campo **Imagem ou vídeo de fundo da capa**, e o véu
fica em **0** — a imagem já tem o espaço reservado.

---

## O molde

> Ilustração vertical de capa de convite de casamento.
> Moldura [MOLDURA] ocupando as bordas, desenhada em traço fino [METAL].
> Ao fundo, dentro da moldura, [PAISAGEM] em aquarela suave e desbotada.
> [FLORES] transbordando sobre a borda superior da moldura.
> **O centro da composição é vazio e claro, sem nenhum elemento**, reservado
> para texto que será adicionado depois.
> Paleta [PALETA]. Estilo aquarela botânica delicada, papelaria fina.
> Proporção 9:16.
> Sem texto, sem letras, sem números, sem marca d'água, sem pessoas.

**Negativo**
```
texto, letras, números, marca d'água, pessoas, rosto, elementos no centro,
composição cheia, cores saturadas, fundo escuro
```

**A frase que mais importa** é a do centro vazio. Sem ela o modelo enche
o meio e a capa não serve. Se vier preenchido, repita: *"o terço central
da imagem é completamente vazio e liso"*.

---

## Os cinco

| Template | MOLDURA | METAL | PAISAGEM | FLORES | PALETA |
|---|---|---|---|---|---|
| **Marfim** | arco alto de topo arredondado | dourado | campo de trigo ao entardecer, horizonte baixo | peônias brancas e gipsofila | marfim, creme e dourado |
| **Cloud Dancer** | arco duplo com filete interno | prata clara | névoa sobre colinas suaves | magnólias brancas e renda | off-white, pérola e prata |
| **Sálvia** | arco com cantos arredondados | dourado claro | lago calmo com juncos e garças | eucalipto e magnólia | verde sálvia, off-white e champanhe |
| **Oliva** | arco toscano de pedra | dourado envelhecido | colinas da Toscana com ciprestes e villa | ramos de oliveira e azeitonas | verde oliva, bege e terracota |
| **Mocha** | arco art déco de linhas retas | bronze | dunas de areia ao pôr do sol | folhas secas e algodão | mocha, nude e caramelo |

---

## Exemplo pronto, para começar

Rode este primeiro. Se a composição vier certa, troque as variáveis
para os outros quatro.

```
Ilustração vertical de capa de convite de casamento.
Moldura em arco alto de topo arredondado ocupando as bordas, desenhada em
traço fino dourado.
Ao fundo, dentro da moldura, um campo de trigo ao entardecer com horizonte
baixo, em aquarela suave e desbotada.
Peônias brancas e gipsofila transbordando sobre a borda superior da moldura.
O centro da composição é vazio e claro, sem nenhum elemento, reservado para
texto que será adicionado depois.
Paleta marfim, creme e dourado. Estilo aquarela botânica delicada, papelaria
fina. Proporção 9:16.
Sem texto, sem letras, sem números, sem marca d'água, sem pessoas.
```

---

## Como encaixar

1. Estúdio → **Mídia** → *Imagem ou vídeo de fundo da capa*
2. **Força do véu** em `0`
3. A prévia atualiza na hora; toque no envelope para ver a capa entrando

Se o nome ficar difícil de ler sobre a ilustração, suba o véu para 20 ou 30
em vez de regerar a imagem.

---

## Ordem de gasto

1. **As cinco capas.** É a tela mais vista e o maior salto.
2. **As sete fotos de envelope que faltam** (Serenity, Blush, Ameixa,
   Borgonha, Esmeralda, Toscana, Linho), para a cartela ficar completa.
3. **O vídeo de abertura**, só se depois de ver a capa ilustrada você ainda
   achar que a abertura em CSS fica atrás. Na minha leitura, não fica.
