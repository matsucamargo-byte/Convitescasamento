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

| Template | Paleta | Abertura |
|---|---|---|
| Pérola | marfim e ouro | envelope |
| Serenity | azul sereno, lacre branco | envelope |
| Toscana | aquarela oliva | puxar a ponta |
| Esmeralda | verde profundo e ouro | envelope |
| Blush | rosé com tassel | envelope |
| Noir | preto e ouro | envelope |

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
