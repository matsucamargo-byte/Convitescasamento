/* =============================================================
   NUTTI-STYLE INVITE ENGINE — renderizador
   Lê window.__CONVITE__ e monta o convite inteiro.
   Mesmo arquivo roda no preview do estúdio e no site exportado.
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
  // Converte quebras de linha em <p>, escapando o conteúdo.
  var par = function (s) {
    return String(s || '').split(/\n{2,}|\n/).filter(Boolean)
      .map(function (p) { return '<p class="sec-texto">' + esc(p.trim()) + '</p>'; }).join('');
  };
  var tem = function (v) { return v != null && String(v).trim() !== ''; };

  /* ---------- aplica o template ---------- */
  var root = document.documentElement;
  Object.keys(T.vars || {}).forEach(function (k) { root.style.setProperty(k, T.vars[k]); });
  var f = T.fonts || {};
  root.style.setProperty('--f-display', '"' + (f.display || 'Cormorant Garamond') + '"');
  root.style.setProperty('--f-body', '"' + (f.body || 'Jost') + '"');
  root.style.setProperty('--f-script', '"' + (f.script || 'Pinyon Script') + '"');

  /* ---------- helpers de data ---------- */
  var dt = C.dataISO ? new Date(C.dataISO + 'T' + (C.horaCerimonia || '16:00') + ':00') : null;
  var MES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  var DIA = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
  var dataExtenso = dt ? (dt.getDate() + ' de ' + MES[dt.getMonth()] + ' de ' + dt.getFullYear()) : '';
  var dataCurta = dt ? (String(dt.getDate()).padStart(2, '0') + ' · ' + MES[dt.getMonth()].slice(0, 3).toUpperCase() + ' · ' + dt.getFullYear()) : '';
  var diaSemana = dt ? DIA[dt.getDay()] : '';

  var mono = ((C.noiva || ' ')[0] + '&' + (C.noivo || ' ')[0]).toUpperCase();

  /* Ícones de traço — emoji colorido destoa da paleta e muda de desenho
     a cada sistema operacional. */
  var ICO = {
    igreja: '<path d="M12 2v5M9.5 4.5h5M12 7 5 12v10h14V12z"/><path d="M10 22v-5h4v5"/>',
    taca:   '<path d="M7 3h10l-1.2 6a3.8 3.8 0 0 1-7.6 0z"/><path d="M12 15v6M8.5 21h7"/>',
    traje:  '<path d="M9 3 5 6l2 3-1 12h12l-1-12 2-3-4-3"/><path d="M9 3l3 3 3-3"/>',
    gift:   '<path d="M3 9h18v3H3zM4.5 12v9h15v-9M12 9v12"/><path d="M12 9S9.8 3.8 7.6 5.3C5.8 6.6 8.3 9 12 9zM12 9s2.2-5.2 4.4-3.7C18.2 6.6 15.7 9 12 9z"/>'
  };
  function icone(k) {
    return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      ICO[k] + '</svg>';
  }

  /* ---------- monta o HTML ---------- */
  var motivo = (window.MOTIVOS || {})[T.motivo] || '';
  var svgMotivo = '<svg viewBox="0 0 200 110" aria-hidden="true">' + motivo + '</svg>';

  var selo = '';
  if (T.seal === 'tassel') {
    selo = '<div class="tassel"><div class="tassel-arg"></div><div class="tassel-fio"></div></div>';
  } else {
    selo = '<div class="lacre"><div class="lacre-disco"><span class="lacre-mono">' + mono + '</span></div></div>';
  }

  var ehPeel = T.envelope === 'peel';
  var carta =
    '<div class="carta">' +
      '<div><p class="eyebrow">Convidamos você para</p>' +
      '<div class="script">' + esc(C.noiva) + '<br>&amp;<br>' + esc(C.noivo) + '</div></div>' +
    '</div>';

  var envInterno = ehPeel
    ? carta +
      '<div class="capa">' +
        '<div class="relevo topo">' + svgMotivo + '</div>' +
        '<div class="relevo base">' + svgMotivo + '</div>' +
      '</div>' +
      '<div class="dobra"></div><div class="puxe">Puxe aqui</div>'
    : '<div class="relevo topo">' + svgMotivo + '</div>' +
      '<div class="relevo base">' + svgMotivo + '</div>' +
      '<div class="luz"></div>' + carta +
      '<div class="aba aba-e"></div><div class="aba aba-d"></div>' +
      '<div class="aba aba-b"></div><div class="aba aba-t"></div>';

  var cena =
    '<div id="cena">' +
      '<div class="env ' + (ehPeel ? 'peel' : '') + '" id="env" role="button" tabindex="0" aria-label="Abrir convite">' +
        '<div class="env-corpo"></div>' + envInterno + selo +
      '</div>' +
      '<div class="toque">' + esc(C.textoAbrir || 'Toque para abrir o convite') + '</div>' +
    '</div>';

  /* ---- seções ---- */
  var S = [];

  // capa
  S.push(
    '<div class="capa-hero">' +
      '<div class="moldura"></div>' +
      '<div class="mono-grande">' + mono + '</div>' +
      (tem(C.versiculo) ? '<p class="eyebrow">' + esc(C.versiculo) + '</p>' : '') +
      '<h1 class="nomes script">' + esc(C.noiva) + '<span class="e-comercial">&amp;</span>' + esc(C.noivo) + '</h1>' +
      '<div class="rule"></div>' +
      '<div class="data-capa">' + esc(dataCurta) + '</div>' +
      '<div class="seta"></div>' +
    '</div>'
  );

  // convite / chamada
  S.push(
    '<section class="rv">' +
      '<p class="eyebrow">' + esc(C.tipoEvento || 'Nosso casamento') + '</p>' +
      '<h2 class="sec-titulo">' + esc(C.tituloConvite || 'Com alegria, convidamos você') + '</h2>' +
      '<div class="rule"></div>' +
      par(C.textoConvite || 'Depois de tanto caminho lado a lado, chegou o dia de dizer sim diante de quem a gente ama. Sua presença é o presente que falta.') +
    '</section>'
  );

  // contagem
  if (dt) {
    S.push(
      '<section class="alt rv">' +
        '<p class="eyebrow">Faltam</p>' +
        '<h2 class="sec-titulo data">' + esc(diaSemana) + ', ' + esc(dataExtenso) + '</h2>' +
        '<div class="contagem" id="contagem">' +
          '<div class="cx"><b data-c="d">--</b><span>Dias</span></div>' +
          '<div class="cx"><b data-c="h">--</b><span>Horas</span></div>' +
          '<div class="cx"><b data-c="m">--</b><span>Min</span></div>' +
          '<div class="cx"><b data-c="s">--</b><span>Seg</span></div>' +
        '</div>' +
      '</section>'
    );
  }

  // nossa história
  if (tem(C.historia)) {
    S.push(
      '<section class="rv">' +
        (tem(C.fotoHistoria) ? '<img class="foto-destaque" src="' + esc(C.fotoHistoria) + '" alt="' + esc(C.noiva) + ' e ' + esc(C.noivo) + '">' : '') +
        '<p class="eyebrow">Nossa história</p>' +
        '<h2 class="sec-titulo">' + esc(C.tituloHistoria || 'Como tudo começou') + '</h2>' +
        '<div class="rule"></div>' +
        par(C.historia) +
      '</section>'
    );
  }

  // cerimônia + recepção
  var eventos = '';
  if (tem(C.localCerimonia)) {
    eventos +=
      '<div class="evento">' +
        icone('igreja') +
        '<h3>Cerimônia</h3>' +
        '<div class="hora">' + esc(C.horaCerimonia || '') + '</div>' +
        '<p><strong>' + esc(C.localCerimonia) + '</strong></p>' +
        (tem(C.enderecoCerimonia) ? '<p>' + esc(C.enderecoCerimonia) + '</p>' : '') +
        (tem(C.mapaCerimonia) ? '<a class="btn" target="_blank" rel="noopener" href="' + esc(C.mapaCerimonia) + '">Como chegar</a>' : '') +
      '</div>';
  }
  if (tem(C.localFesta)) {
    eventos +=
      '<div class="evento">' +
        icone('taca') +
        '<h3>Recepção</h3>' +
        '<div class="hora">' + esc(C.horaFesta || '') + '</div>' +
        '<p><strong>' + esc(C.localFesta) + '</strong></p>' +
        (tem(C.enderecoFesta) ? '<p>' + esc(C.enderecoFesta) + '</p>' : '') +
        (tem(C.mapaFesta) ? '<a class="btn" target="_blank" rel="noopener" href="' + esc(C.mapaFesta) + '">Como chegar</a>' : '') +
      '</div>';
  }
  if (eventos) {
    S.push('<section class="alt rv"><p class="eyebrow">Quando e onde</p>' +
      '<h2 class="sec-titulo">O grande dia</h2><div class="rule"></div>' + eventos + '</section>');
  }

  // dress code
  if (tem(C.dressCode)) {
    S.push(
      '<section class="rv">' +
        icone('traje') +
        '<p class="eyebrow">Traje</p>' +
        '<h2 class="sec-titulo">' + esc(C.dressCode) + '</h2>' +
        '<div class="rule"></div>' +
        (tem(C.dressCodeObs) ? par(C.dressCodeObs) : '') +
      '</section>'
    );
  }

  // galeria
  if (C.galeria && C.galeria.length) {
    S.push(
      '<section class="alt rv">' +
        '<p class="eyebrow">Nós dois</p>' +
        '<h2 class="sec-titulo">Momentos</h2>' +
        '<div class="galeria">' +
          C.galeria.map(function (src, i) {
            return '<img src="' + esc(src) + '" alt="Foto ' + (i + 1) + '" loading="lazy">';
          }).join('') +
        '</div>' +
      '</section>'
    );
  }

  // RSVP — uma única ação óbvia (erro nº1 dos concorrentes é ter várias)
  if (tem(C.whatsapp)) {
    var zap = String(C.whatsapp).replace(/\D/g, '');
    var msg = encodeURIComponent(C.msgRsvp || ('Olá! Confirmo minha presença no casamento de ' + C.noiva + ' e ' + C.noivo + ' 💍'));
    S.push(
      '<section class="rv">' +
        '<p class="eyebrow">Confirmação de presença</p>' +
        '<h2 class="sec-titulo">Você vem?</h2>' +
        '<div class="rule"></div>' +
        par(C.textoRsvp || ('Confirme até ' + (C.prazoRsvp || 'o quanto antes') + ' para garantirmos seu lugar à mesa.')) +
        '<a class="btn cheio" target="_blank" rel="noopener" href="https://wa.me/' + esc(zap) + '?text=' + msg + '">Confirmar no WhatsApp</a>' +
      '</section>'
    );
  }

  // presentes
  if (tem(C.pixChave) || tem(C.listaPresentes)) {
    S.push(
      '<section class="alt rv">' +
        icone('gift') +
        '<p class="eyebrow">Lista de presentes</p>' +
        '<h2 class="sec-titulo">' + esc(C.tituloPresentes || 'Se quiser nos presentear') + '</h2>' +
        '<div class="rule"></div>' +
        par(C.textoPresentes || 'Sua presença já é o maior presente. Mas se quiser fazer parte do começo da nossa história de outro jeito, deixamos as opções abaixo.') +
        (tem(C.listaPresentes) ? '<a class="btn btn-linha" target="_blank" rel="noopener" href="' + esc(C.listaPresentes) + '">Ver lista de presentes</a>' : '') +
        (tem(C.pixChave) ? '<div class="pix-box">Chave PIX' + (tem(C.pixNome) ? ' · ' + esc(C.pixNome) : '') + '<code id="pix">' + esc(C.pixChave) + '</code></div>' +
          '<button class="btn" id="copiaPix" type="button">Copiar chave PIX</button>' : '') +
      '</section>'
    );
  }

  // recado livre
  if (tem(C.recado)) {
    S.push('<section class="rv"><h2 class="sec-titulo">' + esc(C.tituloRecado || 'Um recado') + '</h2><div class="rule"></div>' + par(C.recado) + '</section>');
  }

  // rodapé
  S.push(
    '<footer>' +
      '<div class="mono-grande">' + mono + '</div>' +
      '<p class="script">' + esc(C.noiva) + ' &amp; ' + esc(C.noivo) + '</p>' +
      '<p class="eyebrow" style="margin-top:1rem">' + esc(dataExtenso) + '</p>' +
      (tem(C.cidade) ? '<p class="sec-texto">' + esc(C.cidade) + '</p>' : '') +
      '<div class="assinatura">' +
        (tem(C.marcaUrl)
          ? '<a href="' + esc(C.marcaUrl) + '" target="_blank" rel="noopener">' + esc(C.marca || '') + '</a>'
          : esc(C.marca || '')) +
      '</div>' +
    '</footer>'
  );

  var som = tem(C.musica)
    ? '<audio id="audio" loop preload="none" src="' + esc(C.musica) + '"></audio>' +
      '<button class="som" id="som" type="button" aria-label="Ligar ou desligar a música">♪</button>'
    : '';

  document.body.innerHTML =
    cena + '<canvas id="petalas"></canvas><div class="wrap" id="conteudo">' + S.join('') + '</div>' + som;

  /* =============================================================
     Comportamento
     ============================================================= */
  document.body.classList.add('locked');
  var env = document.getElementById('env');
  var cenaEl = document.getElementById('cena');
  var audio = document.getElementById('audio');
  var btnSom = document.getElementById('som');
  var abriu = false;

  // A abertura é encenada em etapas — se tudo acontecer junto, não se vê nada.
  // lacre salta → aba abre com a luz → carta sobe → cena dissolve.
  function abrir() {
    if (abriu) return;
    abriu = true;

    // o clique É o gesto do usuário — é aqui, e só aqui, que o autoplay é liberado
    if (audio) {
      audio.volume = 0;
      var p = audio.play();
      if (p && p.catch) p.catch(function () {});
      var vol = setInterval(function () {
        if (audio.volume < 0.34) audio.volume = Math.min(0.34, audio.volume + 0.02);
        else clearInterval(vol);
      }, 120);
      if (btnSom) btnSom.classList.add('vis');
    }

    var passos = [
      [0,    'selo-sai'],   // o lacre se rompe
      [420,  'abrindo'],    // a aba gira e a luz escapa
      [1220, 'carta-sai'],  // a carta sobe de dentro
      [2250, 'indo']        // tudo avança e dissolve
    ];
    passos.forEach(function (p) {
      setTimeout(function () { env.classList.add(p[1]); }, p[0]);
    });

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
      if (audio.paused) { audio.play(); btnSom.classList.remove('off'); btnSom.textContent = '♪'; }
      else { audio.pause(); btnSom.classList.add('off'); btnSom.textContent = '✕'; }
    });
  }

  /* reveal no scroll */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });

  /* contagem regressiva */
  if (dt) {
    var alvo = dt.getTime();
    var campos = {};
    document.querySelectorAll('#contagem [data-c]').forEach(function (el) { campos[el.dataset.c] = el; });
    (function tick() {
      var dif = Math.max(0, alvo - Date.now());
      var seg = Math.floor(dif / 1000);
      var o = {
        d: Math.floor(seg / 86400),
        h: Math.floor(seg % 86400 / 3600),
        m: Math.floor(seg % 3600 / 60),
        s: seg % 60
      };
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
      var ok = function () { bp.textContent = 'Copiado ✓'; setTimeout(function () { bp.textContent = 'Copiar chave PIX'; }, 2200); };
      if (navigator.clipboard) { navigator.clipboard.writeText(txt).then(ok, ok); }
      else {
        var t = document.createElement('textarea');
        t.value = txt; document.body.appendChild(t); t.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(t); ok();
      }
    });
  }

  /* pétalas flutuantes */
  (function () {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    var cv = document.getElementById('petalas');
    if (!cv) return;
    var cx = cv.getContext('2d'), w, h, ps = [];
    var cor = getComputedStyle(root).getPropertyValue('--accent-2').trim() || '#e3cfa4';
    function dim() { w = cv.width = innerWidth; h = cv.height = innerHeight; }
    dim(); addEventListener('resize', dim);
    for (var i = 0; i < 16; i++) {
      ps.push({
        x: Math.random() * w, y: Math.random() * h,
        r: 3 + Math.random() * 5, vy: .22 + Math.random() * .5,
        vx: -.25 + Math.random() * .5, a: Math.random() * 6.28,
        va: -.015 + Math.random() * .03, o: .18 + Math.random() * .3
      });
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
