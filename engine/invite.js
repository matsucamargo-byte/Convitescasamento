/* =============================================================
   Renderizador.

   É uma função, não um script que roda uma vez: a vitrine precisa
   trocar de convite sem recarregar a página, e para isso o motor
   tem de poder ser chamado de novo e desmontar o anterior.
   ============================================================= */
window.renderConvite = function (C, raiz) {
  'use strict';

  C = C || {};
  raiz = raiz || document.body;
  var T = C._tpl || {};

  // desmonta o convite anterior: sem isso sobram cronômetros, o
  // observador de rolagem e o laço das pétalas rodando em segundo plano
  if (raiz._limpar) { raiz._limpar.forEach(function (f) { try { f(); } catch (e) {} }); }
  var limpar = raiz._limpar = [];

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var par = function (s) {
    return String(s || '').split(/\n+/).filter(function (l) { return l.trim(); })
      .map(function (p) { return '<p class="sec-texto">' + esc(p.trim()) + '</p>'; }).join('');
  };
  var tem = function (v) { return v != null && String(v).trim() !== ''; };
  // quebra em linhas, escapando cada uma (não escapar antes de dividir)
  var linhas = function (v) {
    return String(v || '').split(/\n+/).filter(function (l) { return l.trim(); })
      .map(function (l) { return esc(l.trim()); }).join('<br>');
  };

  /* ---------- template ---------- */
  var root = raiz;
  Object.keys(T.vars || {}).forEach(function (k) { root.style.setProperty(k, T.vars[k]); });
  var f = T.fonts || {};
  root.style.setProperty('--f-display', '"' + (f.display || 'Cormorant Garamond') + '"');
  root.style.setProperty('--f-body', '"' + (f.body || 'Jost') + '"');
  root.style.setProperty('--f-script', '"' + (f.script || 'Pinyon Script') + '"');

  /* ---------- datas ---------- */
  var dt = C.dataISO ? new Date(C.dataISO + 'T' + (C.horaCerimonia || '16:00') + ':00') : null;
  var MES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  var DIA = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
  var dataExtenso = dt ? dt.getDate() + ' de ' + MES[dt.getMonth()] + ' de ' + dt.getFullYear() : '';
  var dataCurta = dt ? String(dt.getDate()).padStart(2, '0') + ' · ' + MES[dt.getMonth()].slice(0, 3).toUpperCase() + ' · ' + dt.getFullYear() : '';
  var diaSemana = dt ? DIA[dt.getDay()] : '';
  var mono = ((C.noiva || ' ')[0] + '&' + (C.noivo || ' ')[0]).toUpperCase();

  /* Ícones autorais, traço e peso únicos (ver .ico no CSS).
     Emoji muda de desenho a cada sistema e destoa da paleta. */
  var ICO = {
    igreja: '<path d="M12 2v5M9.5 4.5h5M12 7 5 12v10h14V12z"/><path d="M10 22v-5h4v5"/>',
    taca:   '<path d="M7 3h10l-1.2 6a3.8 3.8 0 0 1-7.6 0z"/><path d="M12 15v6M8.5 21h7"/>',
    som:    '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
    mudo:   '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="m16 9 5 6M21 9l-5 6"/>'
  };
  function ico(k, cls) {
    return '<svg class="ico ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + ICO[k] + '</svg>';
  }

  /* Camada de mídia: imagem ou vídeo em tela cheia, com véu por cima.
     É o que falta num convite que parece "tipografia sobre cor chapada". */
  function camadaMidia(url, veu) {
    if (!tem(url)) return '';
    var ehVideo = /\.(mp4|webm|mov)(\?|$)/i.test(url);
    var media = ehVideo
      ? '<video src="' + esc(url) + '" autoplay muted loop playsinline preload="metadata"></video>'
      : '<img src="' + esc(url) + '" alt="" loading="lazy">';
    return '<div class="midia">' + media + '</div>' +
           '<div class="veu" style="--veu:' + (veu == null ? 55 : veu) + '"></div>';
  }

  /* Os rostos recortados entram por cima da ilustração da capa.
     O recorte é feito no estúdio, não aqui: aqui chega PNG com
     fundo já transparente e só a posição é aplicada. */
  function rosto(url, x, y, t, quem) {
    if (!tem(url)) return '';
    return '<img class="rosto" src="' + esc(url) + '" alt="" aria-hidden="true" style="' +
      '--r-x:' + (x == null || x === '' ? 50 : x) + '%;' +
      '--r-y:' + (y == null || y === '' ? 30 : y) + '%;' +
      '--r-t:' + (t == null || t === '' ? 16 : t) + '%" data-quem="' + quem + '">';
  }
  function rostos(C) {
    var a = rosto(C.rostoNoiva, C.rostoNoivaX, C.rostoNoivaY, C.rostoNoivaT, 'noiva');
    var b = rosto(C.rostoNoivo, C.rostoNoivoX, C.rostoNoivoY, C.rostoNoivoT, 'noivo');
    return (a || b) ? '<div class="rostos">' + a + b + '</div>' : '';
  }

  var COROA = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M46.7 84.8 A32.0 32.0 0 0 1 38.0 23.3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M46.7 84.8 Q42.4 79.2, 46.7 72.3 Q51.0 79.2, 46.7 84.8 Z" transform="rotate(200.0 46.7 84.8)"/><path d="M36.5 82.0 Q32.4 76.7, 36.5 70.1 Q40.6 76.7, 36.5 82.0 Z" transform="rotate(219.0 36.5 82.0)"/><path d="M27.8 76.0 Q23.9 71.0, 27.8 64.8 Q31.7 71.0, 27.8 76.0 Z" transform="rotate(238.0 27.8 76.0)"/><path d="M21.5 67.5 Q17.8 62.7, 21.5 56.9 Q25.2 62.7, 21.5 67.5 Z" transform="rotate(257.0 21.5 67.5)"/><path d="M18.3 57.5 Q14.8 53.0, 18.3 47.5 Q21.8 53.0, 18.3 57.5 Z" transform="rotate(276.0 18.3 57.5)"/><path d="M18.6 46.9 Q15.3 42.7, 18.6 37.5 Q21.9 42.7, 18.6 46.9 Z" transform="rotate(295.0 18.6 46.9)"/><path d="M22.3 37.0 Q19.2 33.1, 22.3 28.2 Q25.4 33.1, 22.3 37.0 Z" transform="rotate(314.0 22.3 37.0)"/><path d="M29.0 28.8 Q26.1 25.2, 29.0 20.7 Q31.9 25.2, 29.0 28.8 Z" transform="rotate(333.0 29.0 28.8)"/><path d="M38.0 23.3 Q35.3 20.0, 38.0 15.8 Q40.7 20.0, 38.0 23.3 Z" transform="rotate(352.0 38.0 23.3)"/><path d="M53.3 84.8 A32.0 32.0 0 0 0 62.0 23.3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M53.3 84.8 Q49.0 79.2, 53.3 72.3 Q57.6 79.2, 53.3 84.8 Z" transform="rotate(160.0 53.3 84.8)"/><path d="M63.5 82.0 Q59.4 76.7, 63.5 70.1 Q67.6 76.7, 63.5 82.0 Z" transform="rotate(141.0 63.5 82.0)"/><path d="M72.2 76.0 Q68.3 71.0, 72.2 64.8 Q76.1 71.0, 72.2 76.0 Z" transform="rotate(122.0 72.2 76.0)"/><path d="M78.5 67.5 Q74.8 62.7, 78.5 56.9 Q82.2 62.7, 78.5 67.5 Z" transform="rotate(103.0 78.5 67.5)"/><path d="M81.7 57.5 Q78.2 53.0, 81.7 47.5 Q85.2 53.0, 81.7 57.5 Z" transform="rotate(84.0 81.7 57.5)"/><path d="M81.4 46.9 Q78.1 42.7, 81.4 37.5 Q84.7 42.7, 81.4 46.9 Z" transform="rotate(65.0 81.4 46.9)"/><path d="M77.7 37.0 Q74.6 33.1, 77.7 28.2 Q80.8 33.1, 77.7 37.0 Z" transform="rotate(46.0 77.7 37.0)"/><path d="M71.0 28.8 Q68.1 25.2, 71.0 20.7 Q73.9 25.2, 71.0 28.8 Z" transform="rotate(27.0 71.0 28.8)"/><path d="M62.0 23.3 Q59.3 20.0, 62.0 15.8 Q64.7 20.0, 62.0 23.3 Z" transform="rotate(8.0 62.0 23.3)"/><circle cx="50.0" cy="85" r="2"/></svg>';

  /* ---------- envelope ---------- */
  var motivo = (window.MOTIVOS || {})[T.motivo] || { tipo: 'relevo', svg: '' };
  var ornamento = tem(C.ornamentoUrl)
    ? '<img src="' + esc(C.ornamentoUrl) + '" alt="">'
    : '<svg viewBox="0 0 200 110" aria-hidden="true">' + motivo.svg + '</svg>';
  var classeOrn = 'relevo' + (motivo.tipo === 'foil' && !tem(C.ornamentoUrl) ? ' foil' : '');

  var carta =
    '<div class="carta">' +
      '<div>' +
        '<p class="sub">Convidamos você para</p>' +
        '<div class="script">' + esc(C.noiva) + '<br>&amp;<br>' + esc(C.noivo) + '</div>' +
      '</div>' +
    '</div>';

  var ehPeel = T.envelope === 'peel';
  var dentro = ehPeel
    ? carta +
      '<div class="capa">' +
        '<div class="' + classeOrn + ' topo">' + ornamento + '</div>' +
        '<div class="' + classeOrn + ' base">' + ornamento + '</div>' +
      '</div>' +
      '<div class="dobra"></div><div class="puxe">Puxe aqui</div>'
    : '<div class="' + classeOrn + ' topo">' + ornamento + '</div>' +
      '<div class="' + classeOrn + ' base">' + ornamento + '</div>' +
      '<div class="luz"></div>' + carta +
      '<div class="aba aba-e"></div><div class="aba aba-d"></div>' +
      '<div class="aba aba-b"></div><div class="aba aba-t"></div>';

  // Toda foto de envelope abre em fenda. O que a fenda revela é a cena
  // ilustrada, quando existe, ou a própria capa do convite.
  var temFoto = tem(C.envelopeImagem) && !tem(C.cortinaVideo);
  var temIlustra = tem(C.cenaIlustracao) && !tem(C.cortinaVideo);
  var temCortina = tem(C.cortinaVideo);
  var abreEmFenda = temFoto || temIlustra;

  var revelado = temIlustra
    ? '<img src="' + esc(C.cenaIlustracao) + '" alt="">'
    : tem(C.heroMidia) && !/\.(mp4|webm|mov)(\?|$)/i.test(C.heroMidia)
    ? '<img src="' + esc(C.heroMidia) + '" alt="">'
    : '<div class="ilu-papel"></div>';

  // Geometria do envelope dentro da fotografia. As cinco foram geradas
  // com a mesma composição, então uma medida serve para todas; cada
  // template pode sobrescrever se a foto sair diferente.
  var g = C.geo || {};
  var estiloGeo =
    '--aba-topo:' + (g.abaTopo || 23) + '%;' +
    '--aba-esq:' + (g.abaEsq || 15) + '%;' +
    '--aba-dir:' + (g.abaDir || 85) + '%;' +
    '--aba-apice:' + (g.abaApice || 52) + '%;' +
    '--lacre-y:' + (g.lacreY || 51.5) + '%;' +
    '--lacre-r:' + (g.lacreR || 8.5) + '%;' +
    // circle() em clip-path aceita porcentagem; radial-gradient(circle ...)
    // não — exige comprimento. Daí a mesma medida também em vw.
    '--lacre-rv:' + (g.lacreR || 8.5) + 'vw';

  var foto = esc(C.envelopeImagem);
  var cena = abreEmFenda
    ? '<div id="cena" class="env3d" style="' + estiloGeo + '">' +
        '<div class="e3-palco">' +
          '<div class="e3-foto"><img src="' + foto + '" alt="Envelope do convite"></div>' +
          '<div class="e3-dentro"></div>' +
          '<div class="e3-luz"></div>' +
          '<div class="e3-carta">' +
            '<p class="mono">' + mono + '</p>' +
            '<p class="par">' + esc(C.noiva) + '<span>&amp;</span>' + esc(C.noivo) + '</p>' +
          '</div>' +
          '<div class="e3-frente"><img src="' + foto + '" alt=""></div>' +
          '<div class="e3-aba">' +
            '<div class="face frente"><img src="' + foto + '" alt=""></div>' +
            '<div class="face verso"></div>' +
          '</div>' +
          '<div class="e3-lacre">' +
            '<div class="face"><img src="' + foto + '" alt=""></div>' +
            '<div class="e3-brilho"><i></i></div>' +
          '</div>' +
          '<div class="e3-halo"></div>' +
          '<div class="e3-raios"></div>' +
          '<canvas id="faiscas"></canvas>' +
          '<div class="e3-estouro"></div>' +
        '</div>' +
        '<div class="e3-toque" id="env" role="button" tabindex="0" aria-label="Abrir convite">' +
          '<p>' + esc(C.textoAbrir || 'Toque para abrir') + '</p>' +
        '</div>' +
      '</div>'
    : temCortina
    ? '<div id="cena" class="cortina">' +
        '<div class="cortina-midia">' +
          '<video id="cortina" playsinline preload="auto" ' +
            (tem(C.cortinaPoster) ? 'poster="' + esc(C.cortinaPoster) + '"' : '') + '>' +
            (tem(C.cortinaVideoWebm)
              ? '<source src="' + esc(C.cortinaVideoWebm) + '" type="video/webm">' : '') +
            '<source src="' + esc(C.cortinaVideo) + '" type="video/mp4">' +
          '</video>' +
        '</div>' +
        '<div class="cortina-fim"></div>' +
        '<div class="cortina-toque" id="env" role="button" tabindex="0" aria-label="Abrir convite">' +
          '<p>' + esc(C.textoAbrir || 'Toque para abrir') + '</p>' +
        '</div>' +
      '</div>'
    : '<div id="cena">' +
      '<div class="env' + (ehPeel ? ' peel' : '') + '" id="env" role="button" tabindex="0" aria-label="Abrir convite">' +
        '<div class="env-corpo"></div>' + dentro +
        '<div class="lacre"><div class="lacre-disco"><span class="lacre-mono">' + mono + '</span></div></div>' +
      '</div>' +
      '<p class="toque">' + esc(C.textoAbrir || 'Toque para abrir') + '</p>' +
    '</div>';

  /* =============================================================
     Seções. Cada família de layout aparece uma vez —
     oito blocos de texto centralizado é um template, não um convite.
     ============================================================= */
  var S = [];

  // capa — centralizada se justifica: a mensagem é o design
  S.push(
    '<header class="capa-hero' + (tem(C.heroMidia) ? ' com-midia' : '') +
      (tem(C.heroMoldura) ? ' com-moldura' : '') +
      ((tem(C.rostoNoiva) || tem(C.rostoNoivo)) ? ' com-rostos' : '') + '">' +
      camadaMidia(C.heroMidia, C.heroVeu) +
      (tem(C.heroMoldura)
        ? '<img class="moldura-arte" src="' + esc(C.heroMoldura) + '" alt="">'
        : '<div class="moldura"></div>') +
      '<div class="coroa">' + COROA + '<span class="mono">' + mono + '</span></div>' +
      rostos(C) +
      (tem(C.versiculo) ? '<p class="versiculo">' + esc(C.versiculo) + '</p>' : '') +
      '<h1 class="nomes script">' + esc(C.noiva) + '<span class="e-comercial">&amp;</span>' + esc(C.noivo) + '</h1>' +
      '<div class="rule"><i class="fim"></i></div>' +
      '<p class="data-capa">' + esc(dataCurta) + '</p>' +
      '<div class="seta"></div>' +
    '</header>'
  );

  // convite
  var temPais = tem(C.paisNoiva) || tem(C.paisNoivo);
  S.push(
    '<section class="centro faixa-clara">' +
      (tem(C.sobretitulo) ? '<p class="sobretitulo">' + esc(C.sobretitulo) + '</p>' : '') +
      (temPais
        ? '<div class="pais">' +
            (tem(C.paisNoiva) ? '<div><p class="pais-rot">' + esc(C.rotuloPaisNoiva || 'Pais da noiva') + '</p>' +
              '<p class="pais-nome">' + linhas(C.paisNoiva) + '</p></div>' : '') +
            (tem(C.paisNoivo) ? '<div><p class="pais-rot">' + esc(C.rotuloPaisNoivo || 'Pais do noivo') + '</p>' +
              '<p class="pais-nome">' + linhas(C.paisNoivo) + '</p></div>' : '') +
          '</div>' : '') +
      '<h2 class="sec-titulo' + (temPais ? ' apos-pais' : '') + '">' + esc(C.tituloConvite || 'Com alegria, convidamos você') + '</h2>' +
      '<div class="rule"><i class="fim"></i></div>' +
      par(C.textoConvite) +
    '</section>'
  );

  // contagem — régua horizontal, números tabulares
  if (dt) {
    S.push(
      '<section class="centro faixa-escura">' +
        '<h2 class="sec-titulo data">' + esc(diaSemana) + '<br>' + esc(dataExtenso) + '</h2>' +
        '<div class="contagem" id="contagem">' +
          '<div class="cx"><b data-c="d">--</b><span>Dias</span></div>' +
          '<div class="cx"><b data-c="h">--</b><span>Horas</span></div>' +
          '<div class="cx"><b data-c="m">--</b><span>Min</span></div>' +
          '<div class="cx"><b data-c="s">--</b><span>Seg</span></div>' +
        '</div>' +
      '</section>'
    );
  }

  // história — assimétrica, foto sangrando na borda
  if (tem(C.historia)) {
    S.push(
      '<section class="faixa-clara">' +
        '<div class="historia">' +
          (tem(C.fotoHistoria)
            ? '<img class="foto" src="' + esc(C.fotoHistoria) + '" alt="' + esc(C.noiva) + ' e ' + esc(C.noivo) + '">' : '') +
          '<div class="texto">' +
            '<h2 class="sec-titulo">' + esc(C.tituloHistoria || 'Como tudo começou') + '</h2>' +
            par(C.historia) +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  // eventos — linha do tempo numa régua, não cards
  var itens = '';
  if (tem(C.localCerimonia)) {
    itens +=
      '<li>' + ico('igreja') +
        '<p class="hora">' + esc(C.horaCerimonia || '') + '</p>' +
        '<h3>Cerimônia</h3>' +
        '<p><strong>' + esc(C.localCerimonia) + '</strong></p>' +
        (tem(C.enderecoCerimonia) ? '<p>' + esc(C.enderecoCerimonia) + '</p>' : '') +
        (tem(C.mapaCerimonia) ? '<a class="btn" target="_blank" rel="noopener" href="' + esc(C.mapaCerimonia) + '">Como chegar</a>' : '') +
      '</li>';
  }
  if (tem(C.localFesta)) {
    itens +=
      '<li>' + ico('taca') +
        '<p class="hora">' + esc(C.horaFesta || '') + '</p>' +
        '<h3>Recepção</h3>' +
        '<p><strong>' + esc(C.localFesta) + '</strong></p>' +
        (tem(C.enderecoFesta) ? '<p>' + esc(C.enderecoFesta) + '</p>' : '') +
        (tem(C.mapaFesta) ? '<a class="btn" target="_blank" rel="noopener" href="' + esc(C.mapaFesta) + '">Como chegar</a>' : '') +
      '</li>';
  }
  if (itens) {
    S.push(
      '<section class="faixa-escura">' +
        '<h2 class="sec-titulo">O grande dia</h2>' +
        '<ul class="linha seq">' + itens + '</ul>' +
      '</section>'
    );
  }


  // Programação do dia. Dois concorrentes têm, e eu só tinha cerimônia
  // e festa. Uma linha por momento: "19:00 | Cerimônia".
  if (tem(C.programacao)) {
    var linhasProg = String(C.programacao).split(/\n+/)
      .map(function (l) { return l.trim(); }).filter(Boolean)
      .map(function (l) {
        var m = l.split('|');
        var hora = (m[0] || '').trim();
        var oque = (m.slice(1).join('|') || '').trim();
        return '<li><span class="hr">' + esc(hora) + '</span>' +
               '<span class="oq">' + esc(oque) + '</span></li>';
      }).join('');
    S.push(
      '<section class="centro faixa-clara">' +
        '<h2 class="sec-titulo">' + esc(C.tituloProgramacao || 'Programação do dia') + '</h2>' +
        '<div class="rule"><i class="fim"></i></div>' +
        '<ol class="prog seq">' + linhasProg + '</ol>' +
      '</section>'
    );
  }

  // traje — uma linha só
  if (tem(C.dressCode)) {
    S.push(
      '<section class="centro faixa-clara traje">' +
        '<p class="valor">' + esc(C.dressCode) + '</p>' +
        '<div class="rule"><i class="fim"></i></div>' +
        (tem(C.dressCodeObs) ? '<p class="sec-texto">' + esc(C.dressCodeObs) + '</p>' : '') +
      '</section>'
    );
  }

  // galeria — grade assimétrica
  if (C.galeria && C.galeria.length) {
    S.push(
      '<section class="centro faixa-escura">' +
        '<h2 class="sec-titulo">Nós dois</h2>' +
        '<div class="galeria seq">' +
          C.galeria.map(function (src, i) {
            return '<img style="--i:' + i + '" src="' + esc(src) + '" alt="' + esc(C.noiva) + ' e ' + esc(C.noivo) + ', foto ' + (i + 1) + '" loading="lazy">';
          }).join('') +
        '</div>' +
      '</section>'
    );
  }

  // RSVP. No reel do concorrente é formulário na própria página com
  // tela de sucesso, não um link que joga o convidado pra fora. Aqui o
  // envio sai pelo WhatsApp já formatado: a experiência é a mesma e não
  // precisa de servidor.
  if (tem(C.whatsapp)) {
    S.push(
      '<section class="faixa-invertida" id="rsvp">' +
        '<h2 class="sec-titulo">' + esc(C.tituloRsvp || 'Você vem?') + '</h2>' +
        '<div class="rule"><i class="fim"></i></div>' +
        par(C.textoRsvp) +
        '<form class="form" id="formRsvp" novalidate>' +
          '<label class="cmp"><span>Seu nome</span>' +
            '<input name="nome" type="text" autocomplete="name" required placeholder="Nome e sobrenome"></label>' +
          '<fieldset class="esc"><legend>Você irá comparecer?</legend>' +
            '<label><input type="radio" name="vai" value="Sim, estarei lá" checked><span>Sim, estarei lá</span></label>' +
            '<label><input type="radio" name="vai" value="Não poderei ir"><span>Não poderei ir</span></label>' +
          '</fieldset>' +
          '<label class="cmp"><span>Quantas pessoas, contando você</span>' +
            '<input name="qtd" type="number" min="1" max="20" value="1" inputmode="numeric"></label>' +
          '<label class="cmp"><span>Restrição alimentar <i>(opcional)</i></span>' +
            '<input name="dieta" type="text" placeholder="Vegetariano, sem glúten..."></label>' +
          '<label class="cmp"><span>Recado para os noivos <i>(opcional)</i></span>' +
            '<textarea name="msg" rows="3" placeholder="Deixe uma mensagem"></textarea></label>' +
          '<button class="btn cheio" type="submit">Confirmar presença</button>' +
          '<p class="erroForm" id="erroRsvp" role="alert" hidden></p>' +
        '</form>' +
        '<div class="okForm" id="okRsvp" hidden>' +
          '<svg class="tick" viewBox="0 0 48 48" aria-hidden="true">' +
            '<circle cx="24" cy="24" r="21"/><path d="M15 24.5l6.5 6.5L33 19"/></svg>' +
          '<p class="okT">Quase lá</p>' +
          '<p class="sec-texto">Toque no botão abaixo para enviar sua confirmação.</p>' +
          '<a class="btn cheio enviar" target="_blank" rel="noopener" href="#">Enviar</a>' +
        '</div>' +
      '</section>'
    );
  }

  // presentes
  if (tem(C.pixChave) || tem(C.listaPresentes)) {
    S.push(
      '<section class="centro faixa-clara">' +
        '<h2 class="sec-titulo">' + esc(C.tituloPresentes || 'Se quiser nos presentear') + '</h2>' +
        '<div class="rule"><i class="fim"></i></div>' +
        par(C.textoPresentes) +
        (tem(C.listaPresentes) ? '<a class="btn btn-bloco" target="_blank" rel="noopener" href="' + esc(C.listaPresentes) + '">Ver lista de presentes</a>' : '') +
        (tem(C.pixChave)
          ? '<div class="pix">' +
              '<p class="rotulo">Chave PIX' + (tem(C.pixNome) ? ' · ' + esc(C.pixNome) : '') + '</p>' +
              '<code id="pix">' + esc(C.pixChave) + '</code>' +
              '<button class="btn" id="copiaPix" type="button">Copiar chave</button>' +
            '</div>' : '') +
      '</section>'
    );
  }

  // recado
  if (tem(C.recado)) {
    S.push(
      '<section class="centro faixa-escura">' +
        '<h2 class="sec-titulo">' + esc(C.tituloRecado || 'Um recado') + '</h2>' +
        '<div class="rule"><i class="fim"></i></div>' + par(C.recado) +
      '</section>'
    );
  }

  S.push(
    '<footer>' +
      '<p class="mono-grande">' + mono + '</p>' +
      '<p class="nomes-fim">' + esc(C.noiva) + ' &amp; ' + esc(C.noivo) + '</p>' +
      '<p class="data-fim">' + esc(dataExtenso) + '</p>' +
      (tem(C.cidade) ? '<p class="cidade-fim">' + esc(C.cidade) + '</p>' : '') +
      '<p class="assinatura">' +
        (tem(C.marcaUrl)
          ? '<a href="' + esc(C.marcaUrl) + '" target="_blank" rel="noopener">' + esc(C.marca || '') + '</a>'
          : esc(C.marca || '')) +
      '</p>' +
    '</footer>'
  );

  var audioHtml = tem(C.musica)
    ? '<audio id="audio" loop preload="none" src="' + esc(C.musica) + '"></audio>' +
      '<button class="som" id="som" type="button" title="' + esc(C.musicaTitulo || 'Música') + '" ' +
        'aria-label="Desligar a música' + (tem(C.musicaTitulo) ? ': ' + esc(C.musicaTitulo) : '') + '">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICO.som + '</svg></button>'
    : '';

  /* Modo livro: o convite se folheia em vez de rolar. Vem ligado
     porque é o que o cliente pediu como experiência padrão; quem
     preferir a página corrida põe navegacao:'rolagem'. */
  var modoLivro = (C.navegacao || 'pagina') !== 'rolagem';
  var SETA_ANT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg>';
  var SETA_PRO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg>';
  var NAVEGADOR =
    '<nav class="pags" id="pags" aria-label="Páginas do convite"></nav>' +
    '<button class="folhear ant" id="folAnt" type="button" aria-label="Página anterior">' + SETA_ANT + '</button>' +
    '<button class="folhear pro" id="folPro" type="button" aria-label="Próxima página">' + SETA_PRO + '</button>' +
    '<p class="dica-swipe" id="dicaSwipe" aria-hidden="true">arraste<i></i></p>';

  if (tem(C.textura)) {
    root.style.setProperty('--textura', 'url("' + C.textura + '")');
    raiz.classList.add('tem-textura');
  }

  raiz.innerHTML =
    cena + '<canvas id="petalas" aria-hidden="true"></canvas>' +
    '<main class="wrap' + (modoLivro ? ' livro' : '') + '">' + S.join('') + '</main>' +
    (modoLivro ? NAVEGADOR : '') + audioHtml;

  /* =============================================================
     Comportamento
     ============================================================= */
  document.body.classList.add('locked');
  limpar.push(function () { document.body.classList.remove('locked'); });
  var env = raiz.querySelector('#env');
  var cenaEl = raiz.querySelector('#cena');
  var audio = raiz.querySelector('#audio');
  var btnSom = raiz.querySelector('#som');
  var abriu = false;
  if (audio) { limpar.push(function () { try { audio.pause(); } catch (e) {} }); }

  /* A abertura é encenada em etapas. Tudo junto não se vê.
     Duração longa se justifica: é um momento único, visto uma vez. */
  function abrir() {
    if (abriu) return;
    abriu = true;

    // o toque É o gesto do usuário — é aqui, e só aqui, que o áudio libera
    if (audio) {
      // Sobe o volume aos poucos: entrar com som cheio num lugar público
      // faz o convidado fechar antes de ler.
      var alvoVol = Math.min(1, Math.max(0, (parseFloat(C.musicaVolume) || 32) / 100));
      audio.volume = 0;
      var p = audio.play();
      if (p && p.catch) p.catch(function () {});
      var sobe = setInterval(function () {
        if (audio.volume < alvoVol - 0.01) audio.volume = Math.min(alvoVol, audio.volume + alvoVol / 16);
        else { audio.volume = alvoVol; clearInterval(sobe); }
      }, 120);
      if (btnSom) btnSom.classList.add('vis');
    }

    if (abreEmFenda) {
      var fa = raiz.querySelector('#faiscas');
      if (fa && fa.comecar) fa.comecar();
      // Seis tempos. Cada um precisa do anterior ter sido visto: tudo
      // junto vira um borrão e foi o que deixava a abertura amadora.
      [[0,    't1'],   // brilho corre no lacre
       [760,  't2'],   // o lacre se rompe
       [1180, 't3'],   // a aba gira e a luz escapa
       [1900, 't4'],   // a carta sobe de dentro
       [2900, 't5'],   // a câmera entra
       [4300, 't6']    // dissolve
      ].forEach(function (p) {
        setTimeout(function () { cenaEl.classList.add(p[1]); }, p[0]);
      });
      setTimeout(revelar, 5100);
      return;
    }

    if (temCortina) {
      // A cortina é um vídeo: ele mesmo é a animação de abertura.
      // Revela quando o vídeo acaba — com teto de tempo, porque um
      // vídeo que não carrega não pode prender o convidado na tela.
      cenaEl.classList.add('tocou');
      var vid = raiz.querySelector('#cortina');
      var revelou = false;
      var revela = function () {
        if (revelou) return;
        revelou = true;
        // lava a tela antes de entregar: esconde o final torto do vídeo
        cenaEl.classList.add('fechando');
        setTimeout(revelar, 620);
      };
      vid.addEventListener('ended', revela);
      vid.addEventListener('error', revela);
      var pv = vid.play();
      if (pv && pv.catch) pv.catch(revela);
      setTimeout(revela, 14000);
      return;
    }

    [[0, 'selo-sai'], [420, 'abrindo'], [1220, 'carta-sai'], [2250, 'indo']]
      .forEach(function (p) { setTimeout(function () { env.classList.add(p[1]); }, p[0]); });
    setTimeout(revelar, 2750);
  }

  function revelar() {
    cenaEl.classList.add('foi');
    if (!modoLivro) document.body.classList.remove('locked');
    window.scrollTo(0, 0);
    var pet = raiz.querySelector('#petalas');
    if (pet) pet.classList.add('on');
    if (modoLivro) ligarLivro();
  }

  /* -------------------------------------------------------------
     O livro.

     A rolagem horizontal é nativa (scroll-snap), porque é ela que
     entrega o atrito e a inércia certos no telefone. O que o JS faz
     é só desenhar a virada em cima: para cada folha, o quanto ela
     já saiu da tela vira um giro em Y e uma sombra na dobra.
     ------------------------------------------------------------- */
  function ligarLivro() {
    var trilho = raiz.querySelector('.wrap.livro');
    if (!trilho) return;
    var folhas = [].slice.call(trilho.children);
    if (folhas.length < 2) return;

    var pags = raiz.querySelector('#pags');
    var bAnt = raiz.querySelector('#folAnt');
    var bPro = raiz.querySelector('#folPro');
    var dica = raiz.querySelector('#dicaSwipe');
    var atual = 0, pedido = 0, reduzido = false;
    try {
      reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    // uma bolinha por folha
    folhas.forEach(function (folha, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Ir para a página ' + (i + 1) + ' de ' + folhas.length);
      b.addEventListener('click', function () { irPara(i); });
      pags.appendChild(b);
      // conteúdo mais alto que a folha deixa de ser centrado
      if (folha.scrollHeight > folha.clientHeight + 4) folha.classList.add('transborda');
    });
    pags.classList.add('vis');

    function irPara(i) {
      i = Math.max(0, Math.min(folhas.length - 1, i));
      trilho.scrollTo({ left: i * trilho.clientWidth, behavior: 'smooth' });
    }

    function pintar() {
      pedido = 0;
      var larg = trilho.clientWidth || 1;
      var x = trilho.scrollLeft;
      folhas.forEach(function (folha, i) {
        // -1 saiu pela esquerda, 0 no lugar, 1 ainda à direita
        var d = (i * larg - x) / larg;
        // preso em uma folha: sem isto a terceira página atrás gira 52°
        // e a pilha vira leque
        if (d < -1) d = -1; else if (d > 1) d = 1;
        var fora = Math.abs(d);
        if (reduzido) {
          folha.style.transform = '';
          folha.style.setProperty('--dobra', 0);
        } else {
          // só a folha que está saindo gira; a que entra desliza reta,
          // senão as duas giram ao mesmo tempo e vira origami
          var giro = d < 0 ? -d * 26 : 0;
          var funda = d < 0 ? 1 - fora * 0.06 : 1;
          folha.style.transform =
            'rotateY(' + (-giro).toFixed(2) + 'deg) scale(' + funda.toFixed(3) + ')';
          folha.style.setProperty('--dobra', d > 0 ? Math.min(1, d * 1.6).toFixed(3) : 0);
        }
      });
      var novo = Math.round(x / larg);
      if (novo !== atual) {
        atual = novo;
        [].forEach.call(pags.children, function (b, i) {
          b.setAttribute('aria-current', i === atual ? 'true' : 'false');
        });
        if (bAnt) bAnt.disabled = atual === 0;
        if (bPro) bPro.disabled = atual === folhas.length - 1;
        if (dica && atual > 0 && !dica.classList.contains('foi')) {
          dica.classList.add('foi');
          setTimeout(function () { if (dica.parentNode) dica.parentNode.removeChild(dica); }, 500);
        }
      }
    }

    function aoRolar() {
      if (!pedido) pedido = requestAnimationFrame(pintar);
    }
    trilho.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar);
    limpar.push(function () {
      trilho.removeEventListener('scroll', aoRolar);
      window.removeEventListener('resize', aoRolar);
      if (pedido) cancelAnimationFrame(pedido);
    });

    if (bAnt) bAnt.addEventListener('click', function () { irPara(atual - 1); });
    if (bPro) bPro.addEventListener('click', function () { irPara(atual + 1); });

    // teclado: a seta só folheia quando a folha já chegou ao fim do seu
    // próprio texto, senão rouba a rolagem de quem está lendo
    function aoTeclar(e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); irPara(atual + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); irPara(atual - 1); }
    }
    document.addEventListener('keydown', aoTeclar);
    limpar.push(function () { document.removeEventListener('keydown', aoTeclar); });

    pintar();
  }

  env.addEventListener('click', abrir);
  env.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); }
  });

  if (btnSom && audio) {
    btnSom.addEventListener('click', function () {
      var mudo = !audio.paused;
      if (mudo) { audio.pause(); } else { audio.play(); }
      btnSom.classList.toggle('off', mudo);
      btnSom.setAttribute('aria-label', mudo ? 'Ligar a música' : 'Desligar a música');
      btnSom.querySelector('svg').innerHTML = mudo ? ICO.mudo : ICO.som;
    });
  }

  /* revelação em sequência — só onde a ordem significa algo */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      [].forEach.call(e.target.children, function (el, i) { el.style.setProperty('--i', i); });
      e.target.classList.add('on');
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  raiz.querySelectorAll('.seq').forEach(function (el) { io.observe(el); });
  limpar.push(function () { io.disconnect(); });

  /* contagem regressiva */
  if (dt) {
    var alvo = dt.getTime();
    var campos = {};
    raiz.querySelectorAll('#contagem [data-c]').forEach(function (el) { campos[el.dataset.c] = el; });
    var relogio;
    (function tick() {
      var seg = Math.floor(Math.max(0, alvo - Date.now()) / 1000);
      var o = { d: Math.floor(seg / 86400), h: Math.floor(seg % 86400 / 3600),
                m: Math.floor(seg % 3600 / 60), s: seg % 60 };
      Object.keys(campos).forEach(function (k) {
        campos[k].textContent = String(o[k]).padStart(2, '0');
      });
      relogio = setTimeout(tick, 1000);
    })();
    limpar.push(function () { clearTimeout(relogio); });
  }

  /* RSVP: valida, mostra o sucesso e entrega pelo WhatsApp */
  var form = raiz.querySelector('#formRsvp');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var erro = raiz.querySelector('#erroRsvp');
      var d = new FormData(form);
      var nome = String(d.get('nome') || '').trim();
      if (!nome) {
        erro.textContent = 'Precisamos do seu nome para confirmar.';
        erro.hidden = false;
        form.querySelector('[name=nome]').focus();
        return;
      }
      erro.hidden = true;

      var linhasMsg = [
        'Confirmação de presença no casamento de ' + C.noiva + ' e ' + C.noivo,
        'Nome: ' + nome,
        'Resposta: ' + d.get('vai')
      ];
      if (d.get('vai') !== 'Não poderei ir') linhasMsg.push('Pessoas: ' + (d.get('qtd') || '1'));
      if (String(d.get('dieta') || '').trim()) linhasMsg.push('Restrição: ' + d.get('dieta'));
      if (String(d.get('msg') || '').trim()) linhasMsg.push('Recado: ' + d.get('msg'));

      var zap = String(C.whatsapp).replace(/\D/g, '');
      var url = 'https://wa.me/' + zap + '?text=' + encodeURIComponent(linhasMsg.join('\n'));

      form.hidden = true;
      var ok = raiz.querySelector('#okRsvp');
      // link de verdade, não window.open: numa página publicada o
      // window.open é bloqueado para boa parte dos visitantes e o
      // convidado ficaria achando que confirmou sem ter confirmado
      var env = ok.querySelector('.enviar');
      env.setAttribute('href', url);
      env.textContent = 'Enviar para ' + C.noiva + ' e ' + C.noivo;
      ok.hidden = false;
      ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* copiar PIX */
  var bp = raiz.querySelector('#copiaPix');
  if (bp) {
    bp.addEventListener('click', function () {
      var txt = raiz.querySelector('#pix').textContent;
      var ok = function () {
        bp.textContent = 'Copiado';
        setTimeout(function () { bp.textContent = 'Copiar chave'; }, 2200);
      };
      if (navigator.clipboard) { navigator.clipboard.writeText(txt).then(ok, ok); }
      else {
        var t = document.createElement('textarea');
        t.value = txt; document.body.appendChild(t); t.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(t); ok();
      }
    });
  }

  /* Faíscas douradas em volta do lacre. Na referência elas aparecem no
     toque e acompanham a abertura: é metade do que faz parecer caro. */
  (function () {
    var cv = raiz.querySelector('#faiscas');
    if (!cv || !abreEmFenda) return;
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    var cx2 = cv.getContext('2d'), w, h, ps = [], vivo = true, rodando = false;
    var cor = getComputedStyle(root).getPropertyValue('--glow').trim() || '#ffe9b8';
    var gy = (parseFloat((C.geo || {}).lacreY) || 51.5) / 100;

    function dim() {
      var r = cv.getBoundingClientRect();
      w = cv.width = Math.max(1, r.width); h = cv.height = Math.max(1, r.height);
    }
    function nasce() {
      var a = Math.random() * 6.2832, d = Math.random() * w * .06;
      return {
        x: w / 2 + Math.cos(a) * d, y: h * gy + Math.sin(a) * d,
        vx: Math.cos(a) * (.3 + Math.random() * 1.9),
        vy: Math.sin(a) * (.3 + Math.random() * 1.9) - .25,
        r: .7 + Math.random() * 2.1,
        vida: 1, mingua: .007 + Math.random() * .017
      };
    }
    limpar.push(function () { vivo = false; removeEventListener('resize', dim); });
    addEventListener('resize', dim);

    cv.comecar = function () {
      if (rodando) return;
      rodando = true; dim();
      for (var i = 0; i < 70; i++) ps.push(nasce());
      (function laco() {
        if (!vivo) return;
        cx2.clearRect(0, 0, w, h);
        for (var i = ps.length - 1; i >= 0; i--) {
          var p = ps[i];
          p.x += p.vx; p.y += p.vy; p.vy += .012; p.vida -= p.mingua;
          if (p.vida <= 0) { ps.splice(i, 1); continue; }
          cx2.globalAlpha = Math.max(0, Math.sin(p.vida * Math.PI)) * .95;
          cx2.fillStyle = cor;
          cx2.beginPath(); cx2.arc(p.x, p.y, p.r, 0, 6.2832); cx2.fill();
        }
        cx2.globalAlpha = 1;
        if (ps.length < 46) ps.push(nasce());
        requestAnimationFrame(laco);
      })();
      // param de nascer: as faíscas acompanham a abertura e se apagam
      setTimeout(function () { ps.forEach(function (p) { p.mingua = .03; }); }, 2600);
    };
  })();

  /* pétalas */
  (function () {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    var cv = raiz.querySelector('#petalas');
    if (!cv) return;
    var cx = cv.getContext('2d'), w, h, ps = [];
    var cor = getComputedStyle(root).getPropertyValue('--accent-2').trim() || '#ddc79a';
    function dim() { w = cv.width = innerWidth; h = cv.height = innerHeight; }
    dim(); addEventListener('resize', dim);
    limpar.push(function () { removeEventListener('resize', dim); });
    for (var i = 0; i < 14; i++) {
      ps.push({ x: Math.random() * w, y: Math.random() * h, r: 3 + Math.random() * 4.5,
                vy: .2 + Math.random() * .45, vx: -.22 + Math.random() * .44,
                a: Math.random() * 6.28, va: -.013 + Math.random() * .026,
                o: .14 + Math.random() * .24 });
    }
    var vivo = true;
    limpar.push(function () { vivo = false; });
    (function loop() {
      if (!vivo) return;
      cx.clearRect(0, 0, w, h);
      ps.forEach(function (p) {
        p.y += p.vy; p.x += p.vx + Math.sin(p.y / 80) * .3; p.a += p.va;
        if (p.y > h + 20) { p.y = -20; p.x = Math.random() * w; }
        cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a);
        cx.globalAlpha = p.o; cx.fillStyle = cor;
        cx.beginPath(); cx.ellipse(0, 0, p.r, p.r * .55, 0, 0, 6.2832); cx.fill();
        cx.restore();
      });
      requestAnimationFrame(loop);
    })();
  })();
};

/* O convite exportado é um arquivo só: dispara sozinho. */
if (window.__CONVITE__) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      window.renderConvite(window.__CONVITE__, document.body);
    });
  } else {
    window.renderConvite(window.__CONVITE__, document.body);
  }
}
