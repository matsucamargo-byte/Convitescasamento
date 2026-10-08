#!/usr/bin/env python3
"""
Monta vitrine-artifact.html para publicar como página na web.

Por que publicar em vez de mandar arquivo: o iOS abre HTML baixado num
visualizador que não executa JavaScript. O usuário vê a galeria, que é
HTML estático, e nada clica. Numa URL de verdade o navegador roda tudo.

Só entram os modelos com arte fotográfica. Cinco bons misturados com
sete desenhados em CSS lê como sete ruins.
"""
import base64, json, pathlib, re, subprocess

RAIZ = pathlib.Path(__file__).parent
ARTE = RAIZ / 'arte'

# Ordem de cartela. Entram só os que já têm fotografia de envelope em
# arte/cheio/<id>.jpg — cinco bons misturados com dezesseis desenhados em
# CSS lê como dezesseis ruins. Chegou a foto, o modelo aparece sozinho.
ORDEM = [
    ('marfim',    'Marfim',       'Marfim e ouro',          'Clássico de papelaria fina'),
    ('cloud',     'Cloud Dancer', 'Off-white e renda',      'Cor do ano 2026'),
    ('salvia',    'Sálvia',       'Sálvia e champanhe',     'Paleta dominante para 2027'),
    ('oliva',     'Oliva',        'Verde oliva e linho',    'Casamento ao ar livre'),
    ('mocha',     'Mocha',        'Mocha e nude',           'Terroso, sem bege chapado'),
    ('lirio',     'Lírio',        'Azul toile e ouro',      'Conjunto de cartões'),
    ('hortensia', 'Hortênsia',    'Lilás sobre vegetal',    'Traço de hortênsia e fita'),
    ('bruma',     'Bruma',        'Azul empoeirado',        'Flor seca e lacre dourado'),
    ('trigo',     'Trigo',        'Creme palha e ouro',     'Chiffon e mosquitinho'),
    ('campo',     'Campo',        'Rosé e flor do campo',   'Borda rasgada à mão'),
    ('chateau',   'Château',      'Marfim e azul ardósia',  'Aquarela de fachada'),
    ('rute',      'Rute',         'Off-white e verde seco', 'Versículo e nomes dos pais'),
    ('vinha',     'Vinha',        'Oliva e lacre vinho',    'Cerimônia religiosa'),
    ('traco',     'Traço',        'Creme e verde profundo', 'Ilustração do casal'),
    ('serenity',  'Serenity',     'Azul sereno',            'A paleta dos reels'),
    ('blush',     'Blush',        'Rosé e laço',            'Coquette'),
    ('ameixa',    'Ameixa',       'Ameixa e rosé',          'Saturação de 2027'),
    ('borgonha',  'Borgonha',     'Borgonha e dourado',     'Inverno e catedral'),
    ('esmeralda', 'Esmeralda',    'Esmeralda e prata',      'Salão à noite'),
    ('toscana',   'Toscana',      'Terracota e cipreste',   'Destination'),
    ('linho',     'Linho',        'Preto real e tan',       'Urbano, à noite'),
]
MODELOS = [m for m in ORDEM if (ARTE / 'cheio' / (m[0] + '.jpg')).exists()
           and (ARTE / 'mini' / (m[0] + '.jpg')).exists()]

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
    'whatsapp': '5512983187315', 'tituloRsvp': 'Você vem?',
    'prazoRsvp': '10 de novembro',
    'textoRsvp': 'Confirme até 10 de novembro para garantirmos seu lugar à mesa.',
    'tituloPresentes': 'Se quiser nos presentear',
    'textoPresentes': 'Sua presença já é o maior presente. Mas se quiser fazer parte do '
                      'começo da nossa história de outro jeito, deixamos as opções abaixo.',
    'pixChave': 'rebeca.newley@email.com', 'pixNome': 'Rebeca M. Souza',
    'marca': '', 'marcaUrl': '',
}


def uri(p):
    return 'data:image/jpeg;base64,' + base64.b64encode(p.read_bytes()).decode()


def main():
    tpl_js = (RAIZ / 'engine/templates.js').read_text()
    css = (RAIZ / 'engine/invite.css').read_text()
    js = (RAIZ / 'engine/invite.js').read_text()

    defs = json.loads(subprocess.check_output(
        ['node', '-e', "global.window={};require('%s');console.log(JSON.stringify(window.TEMPLATES))"
         % (RAIZ / 'engine/templates.js')], text=True))
    por_id = {t['id']: t for t in defs}

    usados = [por_id[i] for i, *_ in MODELOS]
    fams = []
    for t in usados:
        for n in (t['fonts']['display'], t['fonts']['body'], t['fonts']['script']):
            q = n.replace(' ', '+')
            if re.search(r'Cormorant Garamond|Jost|Karla|Outfit|Lora|Libre Baskerville|Marcellus'
                        r'|Spectral|EB Garamond|Commissioner|Playfair Display|Mulish'
                        r'|Work Sans|Crimson Pro', n):
                q += ':wght@300;400;500'
            if q not in fams:
                fams.append(q)
    fontes = 'https://fonts.googleapis.com/css2?family=' + '&family='.join(fams) + '&display=swap'

    # Envelope preenchendo a tela, como na referência. Recortado de
    # 15–85% x e 23–77% y da foto, então a geometria muda: a aba passa a
    # começar na borda (0%) e o ápice vai de 52% para (52-23)/54 = 53,7%.
    # O lacre ocupa fração maior da largura nova: 8,5/70 = 12,1%.
    GEO_CHEIO = dict(abaTopo=2.5, abaEsq=2.5, abaDir=97.5,
                     abaApice=54.5, lacreY=53.5, lacreR=11.8)
    VIDEO = RAIZ / 'video'

    def uri_mp4(p):
        import base64 as b64
        return 'data:video/mp4;base64,' + b64.b64encode(p.read_bytes()).decode()

    cfgs = {}
    for id_, *_ in MODELOS:
        c = dict(BASE)
        c['envelopeImagem'] = uri(ARTE / 'cheio' / (id_ + '.jpg'))
        c['geo'] = GEO_CHEIO
        # vídeo de abertura quando existe: substitui a abertura em CSS
        # Dois formatos, ambos reduzidos para 540x960. O H.264 é o que o
        # iPhone toca; o VP9 é o que torna a página verificável num
        # Chromium sem codec proprietário. Só com o MP4 o vídeo falhava
        # em silêncio no teste e a abertura caía no fallback de erro.
        mp4 = VIDEO / 'leve' / (id_ + '.mp4')
        if not mp4.exists():
            mp4 = VIDEO / (id_ + '.mp4')
        if mp4.exists():
            c['cortinaVideo'] = uri_mp4(mp4)
            webm = VIDEO / 'leve' / (id_ + '.webm')
            if not webm.exists():
                webm = VIDEO / (id_ + '.webm')
            if webm.exists():
                import base64 as b64
                c['cortinaVideoWebm'] = ('data:video/webm;base64,'
                                         + b64.b64encode(webm.read_bytes()).decode())
            pst = VIDEO / (id_ + '-poster.jpg')
            if pst.exists():
                c['cortinaPoster'] = uri(pst)
        cfgs[id_] = c

    cartoes = []
    for id_, nome, familia, nota in MODELOS:
        cartoes.append(
            '<button class="v-c" data-id="%s" type="button">'
            '<span class="v-img"><img src="%s" alt="Envelope do modelo %s" loading="lazy"></span>'
            '<span class="v-t"><b>%s</b><i>%s</i><em>%s</em></span>'
            '</button>' % (id_, uri(ARTE / 'mini' / (id_ + '.jpg')), nome, nome, familia, nota))

    pagina = """<title>Vitrine de Convites</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="__FONTES__" rel="stylesheet">
<style>
/* Mundo visual único e assumido: vitrine escura para a papelaria clara
   aparecer, como uma loja de convites com a luz sobre a mesa. Por isso
   não há variante de tema: o convite traz a própria paleta. */
:root{
  --v-fundo:#141317;
  --v-carta:#1d1c21;
  --v-linha:#34323b;
  --v-tinta:#eeeae4;
  --v-suave:#9a948c;
  --v-ouro:#c3a05a;
  color-scheme:dark;
  /* no :root também, não só no body: o visitante pinta o próprio fundo
     atrás da página e um body transparente mostraria o tema do hospedeiro */
  background:var(--v-fundo);
  color:var(--v-tinta);
}

__CSS_CONVITE__

/* =============================================================
   VITRINE
   ============================================================= */
html,body{margin:0;background:var(--v-fundo);color:var(--v-tinta)}
#palco:empty{display:none}

.v-wrap{
  max-width:1060px;margin:0 auto;
  padding-inline:20px;
  padding-block:clamp(2rem,7vw,3.4rem) 4rem;
  font:400 15px/1.7 'Jost',system-ui,-apple-system,sans-serif;
  color:var(--v-tinta)
}
.v-topo{text-align:center;margin-bottom:clamp(1.8rem,6vw,2.6rem)}
.v-marca{
  font-size:.72rem;letter-spacing:.34em;text-transform:uppercase;
  color:var(--v-ouro);margin:0 0 .9rem
}
.v-topo h1{
  font-family:'Cormorant Garamond',Georgia,serif;font-weight:300;
  font-size:clamp(2rem,9vw,2.9rem);line-height:1.1;margin:0;
  color:var(--v-tinta);text-wrap:balance;letter-spacing:-.01em
}
.v-topo p{
  color:var(--v-suave);margin:.8rem auto 0;max-width:44ch;font-size:.95rem;
  text-wrap:pretty
}

.v-g{display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(158px,1fr))}
.v-c{
  display:block;width:100%;min-width:0;padding:0;margin:0;cursor:pointer;text-align:left;
  background:var(--v-carta);border:1px solid var(--v-linha);border-radius:14px;
  overflow:hidden;font:inherit;color:inherit;
  -webkit-tap-highlight-color:transparent;
  transition:border-color .2s ease,transform .14s ease
}
.v-c:active{transform:scale(.985)}
.v-c:focus-visible{outline:2px solid var(--v-ouro);outline-offset:3px}
@media (hover:hover) and (pointer:fine){.v-c:hover{border-color:var(--v-ouro)}}
.v-img{display:block;aspect-ratio:3/4;overflow:hidden}
.v-img img{width:100%;height:100%;max-width:100%;object-fit:cover;display:block}
.v-t{display:block;padding:.9rem 1rem 1.05rem}
.v-t b{display:block;font-weight:400;font-size:1.02rem;color:var(--v-tinta)}
.v-t i{display:block;font-style:normal;font-size:.82rem;color:var(--v-suave);margin-top:.12rem}
.v-t em{
  display:block;font-style:normal;font-size:.74rem;color:var(--v-ouro);
  margin-top:.45rem;letter-spacing:.02em
}

/* voltar: acima da cena do envelope, que é fixa */
.v-volta{
  position:fixed;z-index:200;
  top:max(12px,env(safe-area-inset-top,0px));
  left:max(12px,env(safe-area-inset-left,0px));
  display:none;align-items:center;gap:.45rem;min-height:44px;
  padding:.5rem 1.15rem .5rem .9rem;border-radius:999px;cursor:pointer;
  font:400 .82rem/1 'Jost',system-ui,sans-serif;letter-spacing:.08em;
  color:#fff;background:rgba(16,15,18,.6);border:1px solid rgba(255,255,255,.26);
  -webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);
  -webkit-tap-highlight-color:transparent
}
body.vendo .v-volta{display:flex}
.v-volta svg{
  width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;
  stroke-linecap:round;stroke-linejoin:round
}

/* link de envio do RSVP: window.open não funciona para todo visitante */
.okForm .btn{display:inline-block;margin-top:1.4rem}
</style>

<button class="v-volta" id="voltar" type="button">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>
  Modelos
</button>

<div id="palco"></div>

<div class="v-wrap" id="galeria">
  <div class="v-topo">
    <p class="v-marca">Convites de casamento</p>
    <h1>Modelos para abrir no celular</h1>
    <p>Toque em um para ver o convite inteiro, do envelope lacrado até a confirmação de presença.</p>
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

  function abrir(id) {
    var c = JSON.parse(JSON.stringify(CFG[id]));
    c._tpl = TPL[id];
    galeria.hidden = true;
    document.body.classList.add('vendo');
    window.renderConvite(c, palco);
    // o elástico da rolagem mostra o fundo do documento: sem isto
    // aparece uma faixa escura nas pontas de um convite claro
    var fundo = (TPL[id].vars || {})['--paper-2'] || '#141317';
    document.documentElement.style.background = fundo;
    document.body.style.background = fundo;
    scrollTo(0, 0);
  }

  function fechar() {
    if (palco._limpar) {
      palco._limpar.forEach(function (f) { try { f(); } catch (e) {} });
      palco._limpar = [];
    }
    palco.innerHTML = '';
    palco.removeAttribute('style');
    palco.className = '';
    document.body.classList.remove('vendo');
    document.documentElement.style.background = '';
    document.body.style.background = '';
    galeria.hidden = false;
    scrollTo(0, 0);
  }

  document.querySelectorAll('.v-c').forEach(function (b) {
    b.addEventListener('click', function () { abrir(b.dataset.id); });
  });
  voltar.addEventListener('click', fechar);

  var inicial = (location.hash || '').replace('#', '');
  if (inicial && CFG[inicial]) abrir(inicial);
})();
</script>"""

    pagina = (pagina
              .replace('__FONTES__', fontes)
              .replace('__CSS_CONVITE__', css)
              .replace('__CARTOES__', '\n'.join('    ' + c for c in cartoes))
              .replace('__TEMPLATES__', tpl_js)
              .replace('__MOTOR__', js)
              .replace('__CONFIGS__', json.dumps(cfgs, ensure_ascii=False)))

    saida = RAIZ / 'vitrine-artifact.html'
    saida.write_text(pagina, encoding='utf-8')
    print('vitrine-artifact.html: %.2f MB, %d modelos'
          % (len(pagina.encode()) / 1048576, len(MODELOS)))


if __name__ == '__main__':
    main()
