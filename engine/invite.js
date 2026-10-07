/* =============================================================
   Renderizador. Lê window.__CONVITE__ e monta o convite.
   O mesmo arquivo roda na prévia do estúdio e no site exportado.
   ============================================================= */
(function () {
  'use strict';

  var C = window.__CONVITE__ || {};
  var T = C._tpl || {};

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
  var root = document.documentElement;
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

  var temFoto = tem(C.envelopeImagem) && !tem(C.cortinaVideo);
  var temCortina = tem(C.cortinaVideo);
  var cena = temFoto
    ? '<div id="cena" class="foto">' +
        '<div class="foto-env"><img src="' + esc(C.envelopeImagem) + '" alt="Envelope do convite"></div>' +
        '<div class="foto-toque" id="env" role="button" tabindex="0" aria-label="Abrir convite">' +
          '<p>' + esc(C.textoAbrir || 'Toque para abrir') + '</p>' +
        '</div>' +
      '</div>'
    : temCortina
    ? '<div id="cena" class="cortina">' +
        '<div class="cortina-midia">' +
          '<video id="cortina" playsinline preload="auto" ' +
            (tem(C.cortinaPoster) ? 'poster="' + esc(C.cortinaPoster) + '" ' : '') +
            'src="' + esc(C.cortinaVideo) + '"></video>' +
        '</div>' +
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
    '<header class="capa-hero' + (tem(C.heroMidia) ? ' com-midia' : '') + '">' +
      camadaMidia(C.heroMidia, C.heroVeu) +
      '<div class="moldura"></div>' +
      '<div class="coroa">' + COROA + '<span class="mono">' + mono + '</span></div>' +
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

  // RSVP — faixa invertida: o maior contraste da página fica na única ação
  if (tem(C.whatsapp)) {
    var zap = String(C.whatsapp).replace(/\D/g, '');
    var msg = encodeURIComponent(C.msgRsvp || ('Olá! Confirmo minha presença no casamento de ' + C.noiva + ' e ' + C.noivo));
    S.push(
      '<section class="faixa-invertida">' +
        '<h2 class="sec-titulo">Você vem?</h2>' +
        '<div class="rule"><i class="fim"></i></div>' +
        par(C.textoRsvp) +
        '<a class="btn cheio btn-bloco" target="_blank" rel="noopener" href="https://wa.me/' + esc(zap) + '?text=' + msg + '">Confirmar presença</a>' +
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

  if (tem(C.textura)) {
    root.style.setProperty('--textura', 'url("' + C.textura + '")');
    document.body.classList.add('tem-textura');
  }

  document.body.innerHTML =
    cena + '<canvas id="petalas" aria-hidden="true"></canvas>' +
    '<main class="wrap">' + S.join('') + '</main>' + audioHtml;

  /* =============================================================
     Comportamento
     ============================================================= */
  document.body.classList.add('locked');
  var env = document.getElementById('env');
  var cenaEl = document.getElementById('cena');
  var audio = document.getElementById('audio');
  var btnSom = document.getElementById('som');
  var abriu = false;

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

    if (temFoto) {
      cenaEl.classList.add('abrindo');
      setTimeout(revelar, 1350);
      return;
    }

    if (temCortina) {
      // A cortina é um vídeo: ele mesmo é a animação de abertura.
      // Revela quando o vídeo acaba — com teto de tempo, porque um
      // vídeo que não carrega não pode prender o convidado na tela.
      cenaEl.classList.add('tocou');
      var vid = document.getElementById('cortina');
      var revelou = false;
      var revela = function () { if (!revelou) { revelou = true; revelar(); } };
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
    document.body.classList.remove('locked');
    window.scrollTo(0, 0);
    var pet = document.getElementById('petalas');
    if (pet) pet.classList.add('on');
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
  document.querySelectorAll('.seq').forEach(function (el) { io.observe(el); });

  /* contagem regressiva */
  if (dt) {
    var alvo = dt.getTime();
    var campos = {};
    document.querySelectorAll('#contagem [data-c]').forEach(function (el) { campos[el.dataset.c] = el; });
    (function tick() {
      var seg = Math.floor(Math.max(0, alvo - Date.now()) / 1000);
      var o = { d: Math.floor(seg / 86400), h: Math.floor(seg % 86400 / 3600),
                m: Math.floor(seg % 3600 / 60), s: seg % 60 };
      Object.keys(campos).forEach(function (k) {
        campos[k].textContent = String(o[k]).padStart(2, '0');
      });
      setTimeout(tick, 1000);
    })();
  }

  /* copiar PIX */
  var bp = document.getElementById('copiaPix');
  if (bp) {
    bp.addEventListener('click', function () {
      var txt = document.getElementById('pix').textContent;
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

  /* pétalas */
  (function () {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    var cv = document.getElementById('petalas');
    if (!cv) return;
    var cx = cv.getContext('2d'), w, h, ps = [];
    var cor = getComputedStyle(root).getPropertyValue('--accent-2').trim() || '#ddc79a';
    function dim() { w = cv.width = innerWidth; h = cv.height = innerHeight; }
    dim(); addEventListener('resize', dim);
    for (var i = 0; i < 14; i++) {
      ps.push({ x: Math.random() * w, y: Math.random() * h, r: 3 + Math.random() * 4.5,
                vy: .2 + Math.random() * .45, vx: -.22 + Math.random() * .44,
                a: Math.random() * 6.28, va: -.013 + Math.random() * .026,
                o: .14 + Math.random() * .24 });
    }
    (function loop() {
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
})();
