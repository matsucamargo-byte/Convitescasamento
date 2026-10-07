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

  var cena =
    '<div id="cena">' +
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
    '<header class="capa-hero">' +
      '<div class="moldura"></div>' +
      '<p class="mono-grande">' + mono + '</p>' +
      (tem(C.versiculo) ? '<p class="versiculo">' + esc(C.versiculo) + '</p>' : '') +
      '<h1 class="nomes script">' + esc(C.noiva) + '<span class="e-comercial">&amp;</span>' + esc(C.noivo) + '</h1>' +
      '<div class="rule"></div>' +
      '<p class="data-capa">' + esc(dataCurta) + '</p>' +
      '<div class="seta"></div>' +
    '</header>'
  );

  // convite
  S.push(
    '<section class="centro faixa-clara">' +
      '<h2 class="sec-titulo">' + esc(C.tituloConvite || 'Com alegria, convidamos você') + '</h2>' +
      '<div class="rule"></div>' +
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

  // traje — uma linha só
  if (tem(C.dressCode)) {
    S.push(
      '<section class="centro faixa-clara traje">' +
        '<p class="valor">' + esc(C.dressCode) + '</p>' +
        '<div class="rule"></div>' +
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
        '<div class="rule"></div>' +
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
        '<div class="rule"></div>' +
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
        '<div class="rule"></div>' + par(C.recado) +
      '</section>'
    );
  }

  S.push(
    '<footer>' +
      '<p class="mono-grande">' + mono + '</p>' +
      '<p class="nomes-fim">' + esc(C.noiva) + ' &amp; ' + esc(C.noivo) + '</p>' +
      '<p class="data-fim">' + esc(dataExtenso) + (tem(C.cidade) ? ' · ' + esc(C.cidade) : '') + '</p>' +
      '<p class="assinatura">' +
        (tem(C.marcaUrl)
          ? '<a href="' + esc(C.marcaUrl) + '" target="_blank" rel="noopener">' + esc(C.marca || '') + '</a>'
          : esc(C.marca || '')) +
      '</p>' +
    '</footer>'
  );

  var audioHtml = tem(C.musica)
    ? '<audio id="audio" loop preload="none" src="' + esc(C.musica) + '"></audio>' +
      '<button class="som" id="som" type="button" aria-label="Desligar a música">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICO.som + '</svg></button>'
    : '';

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
      audio.volume = 0;
      var p = audio.play();
      if (p && p.catch) p.catch(function () {});
      var sobe = setInterval(function () {
        if (audio.volume < 0.32) audio.volume = Math.min(0.32, audio.volume + 0.02);
        else clearInterval(sobe);
      }, 120);
      if (btnSom) btnSom.classList.add('vis');
    }

    [[0, 'selo-sai'], [420, 'abrindo'], [1220, 'carta-sai'], [2250, 'indo']]
      .forEach(function (p) { setTimeout(function () { env.classList.add(p[1]); }, p[0]); });

    setTimeout(function () {
      cenaEl.classList.add('foi');
      document.body.classList.remove('locked');
      window.scrollTo(0, 0);
      var pet = document.getElementById('petalas');
      if (pet) pet.classList.add('on');
    }, 2750);
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
