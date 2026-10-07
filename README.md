# Estúdio de Convites

Gerador de convites de casamento animados. Você preenche um formulário, vê o
convite ao vivo e baixa um site pronto para publicar.

**Criar um convite novo não gasta nenhum token de IA.** O motor de animação já
está escrito; cada convite é só dado preenchido num formulário.

---

## Como usar

1. Abra `estudio.html` com dois cliques (qualquer navegador, funciona offline).
2. Escolha um dos 6 templates.
3. Preencha os campos. A prévia atualiza sozinha no celular da direita.
4. Clique no envelope da prévia para testar a abertura.
5. **Gerar site do convite** → baixa um `index.html`.

### Publicar

Arraste o `index.html` em [app.netlify.com/drop](https://app.netlify.com/drop).
O link sai no ar na hora. Depois é só apontar um subdomínio
(`rebeca-newley.seudominio.com`) para ele.

O arquivo é **um só** — fotos, animação e estilos vão todos embutidos.
Nada de servidor, banco de dados ou build.

### Salvar e retomar

**Salvar projeto** baixa um `.json` com tudo (inclusive as fotos).
**Abrir projeto** carrega de volta. Use isso quando a noiva pedir alteração:
abre, muda, gera de novo.

---

## O que entra no convite

Envelope com lacre e relevo · capa com monograma · contagem regressiva ·
nossa história · cerimônia e recepção com link do Maps · dress code ·
galeria · RSVP por WhatsApp · PIX com botão de copiar · música ·
card de prévia do WhatsApp (Open Graph).

Cada bloco só aparece se você preencher. Deixou vazio, some.

---

## Templates

Seis **famílias** de paleta, não seis variações da mesma. Bege com dourado é
o reflexo padrão para esse tipo de briefing e faz toda marca ficar igual —
só Marfim fica nessa família, e por um motivo defensável: é a convenção da
papelaria de casamento. As outras cinco saem de lugares diferentes de
propósito. Cada uma também troca o par tipográfico.

| Template | Família | Tipografia | Abertura |
|---|---|---|---|
| Marfim | marfim e ouro | Cormorant + Pinyon | envelope |
| Bosque | verde profundo, osso, âmbar | Cinzel + Italianno | envelope |
| Terracota | terracota e ardósia | Playfair + Great Vibes | puxar a ponta |
| Linho | preto real e tan | Spectral + Petit Formal | envelope |
| Cobalto | cobalto e creme | EB Garamond + Tangerine | envelope |
| Bruma | prata, cromo, fumaça | Marcellus + Parisienne | envelope |

## Trocar o ornamento — o que mais sobe o nível

Os florais do envelope são vetores autorais. Funcionam, mas não competem com
aquarela botânica de verdade, e é aí que mora a diferença entre "bonito" e
"a noiva mandou pro noivo na hora".

O campo **Ornamento próprio** no estúdio aceita a URL de um PNG ou SVG. Com
ele preenchido, sua arte entra no lugar do vetor. Uma aquarela botânica boa
sai por volta de R$ 30 no Creative Market ou Freepik e serve para todos os
convites — é o melhor dinheiro que dá pra gastar nisso.

Use PNG com fundo transparente, 1200px de largura, na proporção do motivo
(largo e baixo, tipo 200×110). Para manter o convite em um arquivo só,
converta para data URI antes de colar.

---

## Estrutura dos arquivos

```
estudio.html       ← o que você usa (gerado, não edite)
estudio.src.html   ← fonte do painel
engine/
  templates.js     ← paletas, fontes, motivos (adicionar template é aqui)
  invite.css       ← estilo do convite
  invite.js        ← renderizador e animações
build.sh           ← junta tudo em estudio.html
exemplos/          ← convites já gerados
```

Mexeu em `engine/` ou `estudio.src.html`? Rode `./build.sh`.

### Adicionar um template

Copie um objeto em `engine/templates.js`, troque as cores e rode `./build.sh`.
São 12 linhas e nenhum código novo.

---

## Detalhes que importam

**Música.** Só começa depois do toque no envelope — é o gesto do usuário que
libera o áudio. Nenhum navegador bloqueia desse jeito.

**Fotos.** São reduzidas automaticamente antes de entrar no arquivo. Um convite
com 6 fotos fica em torno de 1,5 MB. Sem fotos, 42 KB.

**Card do WhatsApp.** A imagem do card precisa de URL absoluta (não entra
embutida). Hospede o JPG 1200×630 junto do convite e cole o endereço completo.

**RSVP.** Um botão só, levando ao WhatsApp. É proposital: a reclamação mais
comum de convidado é não saber por onde confirmar.
