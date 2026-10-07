#!/usr/bin/env python3
"""
Monta vitrine.html: um arquivo só, com os doze convites dentro.

Por que arquivo único: baixado no celular, um índice que aponta para
'marfim.html' não acha nada — os outros arquivos não foram junto. Aqui a
troca de convite acontece dentro da página, sem navegação.
"""
import base64, json, pathlib, re, sys

RAIZ = pathlib.Path(__file__).parent
ARTE = RAIZ / 'arte'

TEMPLATES = [
    ('cloud',     'Cloud Dancer', 'Off-white suave'),
    ('marfim',    'Marfim',       'Marfim e ouro'),
    ('mocha',     'Mocha',        'Mocha mousse e nude'),
    ('oliva',     'Oliva',        'Verde oliva e linho'),
    ('salvia',    'Sálvia',       'Sálvia e champanhe'),
    ('esmeralda', 'Esmeralda',    'Esmeralda e prata'),
    ('borgonha',  'Borgonha',     'Borgonha e dourado'),
    ('ameixa',    'Ameixa',       'Ameixa e rosé'),
    ('blush',     'Blush',        'Rosé e laço'),
    ('serenity',  'Serenity',     'Azul sereno'),
    ('toscana',   'Toscana',      'Terracota e cipreste'),
    ('linho',     'Linho',        'Preto real e tan'),
]

# conteúdo de exemplo, igual em todos
BASE = {
    'noiva': 'Rebeca', 'noivo': 'Newley',
    'dataISO': '2026-12-05', 'cidade': 'São José dos Campos · SP',
    'versiculo': 'Grandes coisas fez o Senhor por nós · Salmos 126:3',
    'sobretitulo': 'Com a bênção de Deus',
    'paisNoiva': 'Mônica Vitor Muniz\nReginaldo Cássio Muniz',
    'paisNoivo': 'Sandra dos Santos\nVitor Muniz (em memória)',
    'rotuloPaisNoiva': 'Pais da noiva', 'rotuloPaisNoivo': 'Pais do noivo',
    'textoAbrir': 'Toque para abrir o convite',
    'tituloConvite': 'Convidamos você para celebrar',
    'textoConvite': 'Diante de Deus e de quem a gente ama, queremos dizer sim. '
                    'Sua presença é o que falta para o dia ficar inteiro.',
    'tituloHistoria': 'Como tudo começou',
    'historia': 'O que começou como uma conversa que não queria acabar virou casa, '
                'viagem, rotina e planos. Oito anos depois, a gente escolheu continuar, '
                'agora com vocês por perto.',
    'localCerimonia': 'Igreja Batista Central',
    'enderecoCerimonia': 'R. Rubião Júnior, 240 · Centro',
    'horaCerimonia': '19:00', 'mapaCerimonia': 'https://maps.google.com',
    'localFesta': 'Espaço Jardim das Acácias',
    'enderecoFesta': 'Rod. dos Tamoios, km 12',
    'horaFesta': '21:00', 'mapaFesta': 'https://maps.google.com',
    'tituloProgramacao': 'Programação do dia',
    'programacao': '19:00 | Cerimônia\n20:00 | Coquetel de recepção\n21:00 | Jantar\n'
                   '22:30 | Valsa dos noivos\n23:00 | Pista aberta\n02:00 | Café da manhã',
    'dressCode': 'Passeio completo',
    'dressCodeObs': 'Pedimos gentilmente que evitem branco e off-white.',
    'whatsapp': '5512983187315', 'tituloRsvp': 'Você vem?', 'prazoRsvp': '10 de novembro',
    'textoRsvp': 'Confirme até 10 de novembro para garantirmos seu lugar à mesa.',
    'tituloPresentes': 'Se quiser nos presentear',
    'textoPresentes': 'Sua presença já é o maior presente. Mas se quiser fazer parte do '
                      'começo da nossa história de outro jeito, deixamos as opções abaixo.',
    'pixChave': 'rebeca.newley@email.com', 'pixNome': 'Rebeca M. Souza',
    'marca': 'Nutti Convites', 'marcaUrl': 'https://nutticonvites.com',
}


def ler(p):
    return (RAIZ / p).read_text(encoding='utf-8')


def data_uri(caminho):
    b = caminho.read_bytes()
    return 'data:image/jpeg;base64,' + base64.b64encode(b).decode()


def fontes(defs):
    """Uma folha só com as famílias dos doze; o arquivo é um só."""
    fams = []
    for t in defs:
        for n in (t['fonts']['display'], t['fonts']['body'], t['fonts']['script']):
            q = n.replace(' ', '+')
            if re.search(r'Cormorant Garamond|Spectral|EB Garamond|Jost|Karla|Outfit|'
                         r'Commissioner|Playfair Display|Lora|Libre Baskerville|'
                         r'Bodoni Moda|Cinzel', n):
                q += ':wght@300;400;500'
            if q not in fams:
                fams.append(q)
    return 'https://fonts.googleapis.com/css2?family=' + '&family='.join(fams) + '&display=swap'


def main():
    tpl_js = ler('engine/templates.js')
    css = ler('engine/invite.css')
    js = ler('engine/invite.js')

    import subprocess

    # as definições vêm do próprio arquivo, lidas pelo node
    defs = json.loads(subprocess.check_output(
        ['node', '-e',
         "global.window={};require('%s');console.log(JSON.stringify(window.TEMPLATES))"
         % (RAIZ / 'engine/templates.js')], text=True))
    por_id = {t['id']: t for t in defs}

    cfgs = {}
    for id_, nome, familia in TEMPLATES:
        c = dict(BASE)
        c['slug'] = id_
        arte = ARTE / (id_ + '.jpg')
        if arte.exists():
            c['envelopeImagem'] = data_uri(arte)
        cfgs[id_] = c

    cartoes = []
    for id_, nome, familia in TEMPLATES:
        v = por_id[id_]['vars']
        tem_arte = (ARTE / (id_ + '.jpg')).exists()
        if tem_arte:
            fundo = ('<img src="' + data_uri(ARTE / 'mini' / (id_ + '.jpg')) +
                     '" alt="" loading="lazy">')
        else:
            fundo = ('<span class="v-env" style="background:linear-gradient(158deg,%s,%s)">'
                     '<span class="v-lac" style="background:%s"></span></span>'
                     % (v['--paper'], v['--paper-2'], v['--seal']))
        cartoes.append(
            '<button class="v-c" data-id="%s" type="button">'
            '<span class="v-img" style="background:%s">%s</span>'
            '<span class="v-t"><b>%s</b><i>%s</i></span></button>'
            % (id_, v['--paper-2'], fundo, nome, familia))

    html = """<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Convites · vitrine</title>
<meta name="theme-color" content="#17161a">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="__FONTES__" rel="stylesheet">
<style>
__CSS_CONVITE__

/* =============================================================
   VITRINE
   ============================================================= */
html,body{margin:0;background:#17161a}
body.vendo{background:var(--paper-2,#17161a)}
#palco{min-height:100svh}
#palco:empty{display:none}

.v-wrap{
  max-width:1100px;margin:0 auto;
  padding:3rem 1.2rem max(4rem,calc(env(safe-area-inset-bottom) + 2rem));
  font:400 15px/1.7 'Jost',system-ui,sans-serif;color:#ece9e4
}
.v-topo{text-align:center;margin-bottom:2.2rem}
.v-topo h1{
  font-family:'Cormorant Garamond',serif;font-weight:300;
  font-size:clamp(1.9rem,8vw,2.5rem);margin:0;color:#ece9e4
}
.v-topo p{color:#9b968e;margin:.6rem auto 0;max-width:46ch;font-size:.95rem}
.v-g{display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}
.v-c{
  display:block;width:100%;padding:0;cursor:pointer;text-align:left;
  background:#1f1e24;border:1px solid #38363f;border-radius:14px;overflow:hidden;
  font:inherit;color:inherit;-webkit-tap-highlight-color:transparent;
  transition:border-color .2s,transform .14s
}
.v-c:active{transform:scale(.985)}
.v-c:focus-visible{outline:2px solid #c9a24a;outline-offset:3px}
.v-img{
  display:grid;place-items:center;aspect-ratio:3/4;overflow:hidden;position:relative
}
.v-img img{width:100%;height:100%;object-fit:cover;display:block}
.v-env{
  display:grid;place-items:center;width:52%;aspect-ratio:1/1.4;border-radius:3px;
  box-shadow:0 8px 20px rgba(0,0,0,.4)
}
.v-lac{width:20px;height:20px;border-radius:50%;box-shadow:0 2px 5px rgba(0,0,0,.4)}
.v-t{display:block;padding:.85rem .95rem 1rem}
.v-t b{display:block;font-weight:400;font-size:1rem}
.v-t i{display:block;font-style:normal;font-size:.8rem;color:#9b968e;margin-top:.1rem}

/* voltar: fica por cima do convite, inclusive da cena do envelope */
.v-volta{
  position:fixed;z-index:200;
  top:max(12px,env(safe-area-inset-top));
  left:max(12px,env(safe-area-inset-left));
  display:none;align-items:center;gap:.45rem;
  min-height:44px;                     /* mínimo de alvo de toque */
  padding:.5rem 1.15rem .5rem .9rem;border-radius:999px;cursor:pointer;
  font:400 .8rem/1 'Jost',system-ui,sans-serif;letter-spacing:.08em;
  color:#fff;background:rgba(18,17,20,.62);border:1px solid rgba(255,255,255,.26);
  -webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);
  -webkit-tap-highlight-color:transparent
}
body.vendo .v-volta{display:flex}
.v-volta svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;
  stroke-linecap:round;stroke-linejoin:round}
</style>
</head>
<body>

<button class="v-volta" id="voltar" type="button">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>
  Modelos
</button>

<div id="palco"></div>

<div class="v-wrap" id="galeria">
  <div class="v-topo">
    <h1>Doze modelos</h1>
    <p>Toque em um para abrir o convite inteiro. Toque no envelope e role até o fim.</p>
  </div>
  <div class="v-g">
__CARTOES__
  </div>
</div>

<script>__TEMPLATES__</script>
<script>__MOTOR__</script>
<script>
(function () {
  var CFG = __CONFIGS__;
  var TPL = {};
  window.TEMPLATES.forEach(function (t) { TPL[t.id] = t; });

  var palco = document.getElementById('palco');
  var galeria = document.getElementById('galeria');
  var voltar = document.getElementById('voltar');

  var metaCor = document.querySelector('meta[name=theme-color]');

  function abrir(id, push) {
    var c = JSON.parse(JSON.stringify(CFG[id]));
    c._tpl = TPL[id];
    galeria.hidden = true;
    document.body.classList.add('vendo');
    window.renderConvite(c, palco);
    // o elástico da rolagem no celular mostra o fundo do documento:
    // sem isso aparece uma faixa escura nas pontas do convite claro
    var fundo = (TPL[id].vars || {})['--paper-2'] || '#17161a';
    document.documentElement.style.background = fundo;
    document.body.style.background = fundo;
    if (metaCor) metaCor.setAttribute('content', fundo);
    window.scrollTo(0, 0);
    if (push !== false) history.pushState({ id: id }, '', '#' + id);
  }

  function fechar(push) {
    // o desmonte do motor para cronômetros, observador e pétalas
    if (palco._limpar) { palco._limpar.forEach(function (f) { try { f(); } catch (e) {} }); palco._limpar = []; }
    palco.innerHTML = '';
    palco.removeAttribute('style');
    palco.className = '';
    document.body.classList.remove('vendo');
    document.documentElement.style.background = '';
    document.body.style.background = '';
    if (metaCor) metaCor.setAttribute('content', '#17161a');
    galeria.hidden = false;
    window.scrollTo(0, 0);
    if (push !== false) history.pushState({}, '', location.pathname + location.search);
  }

  document.querySelectorAll('.v-c').forEach(function (b) {
    b.addEventListener('click', function () { abrir(b.dataset.id); });
  });
  voltar.addEventListener('click', function () { fechar(); });

  // o botão voltar do celular fecha o convite em vez de sair da página
  addEventListener('popstate', function (e) {
    if (e.state && e.state.id) abrir(e.state.id, false);
    else fechar(false);
  });

  // link direto para um modelo: vitrine.html#oliva
  var inicial = location.hash.replace('#', '');
  if (inicial && CFG[inicial]) abrir(inicial, false);
})();
</script>
</body>
</html>"""

    html = (html
            .replace('__FONTES__', fontes(defs))
            .replace('__CSS_CONVITE__', css)
            .replace('__CARTOES__', '\n'.join('    ' + c for c in cartoes))
            .replace('__TEMPLATES__', tpl_js)
            .replace('__MOTOR__', js)
            .replace('__CONFIGS__', json.dumps(cfgs, ensure_ascii=False)))

    saida = RAIZ / 'vitrine.html'
    saida.write_text(html, encoding='utf-8')
    print('vitrine.html: %.1f MB, %d modelos, %d com arte'
          % (len(html.encode()) / 1048576, len(TEMPLATES),
             sum(1 for i, _, _ in TEMPLATES if (ARTE / (i + '.jpg')).exists())))


if __name__ == '__main__':
    main()
