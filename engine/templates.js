/* =============================================================
   Cartela de templates.

   Cada paleta sai de um tema com demanda medida, não de gosto:
   Cloud Dancer é a cor do ano 2026; sálvia com champanhe é a paleta
   anunciada como dominante para 2027; busca por renda subiu 280% e
   por laço (coquette) acompanha; oliva/Toscana é o pedido padrão de
   casamento ao ar livre; borgonha com dourado e esmeralda com prata
   são as duas paletas de inverno. Fontes trocam junto — mesma
   serifada em tudo faz doze convites virarem um.
   ============================================================= */

window.TEMPLATES = [
  {
    id: 'cloud', nome: 'Cloud Dancer', familia: 'Off-white suave — cor do ano 2026', tagline: 'Renda em arco. O pedido mais recorrente.',
    envelope: 'flap', motivo: 'renda',
    fonts: { display: 'Cormorant Garamond', body: 'Jost', script: 'Pinyon Script' },
    vars: {
      '--paper': '#f7f5f1', '--paper-2': '#e9e5dd',
      '--ink': '#423e38', '--ink-soft': '#8c857a',
      '--accent': '#b0a692', '--accent-2': '#ded7c8',
      '--seal': '#cdc3ad', '--seal-ink': '#4b453a', '--glow': '#ffffff',
      '--emboss-lo': 'rgba(96,88,72,.36)', '--emboss-hi': 'rgba(255,255,255,.98)', '--sombra': 'rgba(78,70,56,.2)'
    }
  },
  {
    id: 'marfim', nome: 'Marfim', familia: 'Marfim e ouro', tagline: 'A convenção da papelaria clássica.',
    envelope: 'flap', motivo: 'peonia',
    fonts: { display: 'Cormorant Garamond', body: 'Jost', script: 'Pinyon Script' },
    vars: {
      '--paper': '#f6f1e7', '--paper-2': '#ece3d2',
      '--ink': '#403a31', '--ink-soft': '#847868',
      '--accent': '#a8823f', '--accent-2': '#ddc79a',
      '--seal': '#b8913f', '--seal-ink': '#4a3912', '--glow': '#ffe9b8',
      '--emboss-lo': 'rgba(118,96,58,.40)', '--emboss-hi': 'rgba(255,255,255,.95)', '--sombra': 'rgba(84,66,38,.26)'
    }
  },
  {
    id: 'mocha', nome: 'Mocha', familia: 'Mocha mousse e nude amadeirado', tagline: 'Terroso sem ser bege chapado.',
    envelope: 'flap', motivo: 'laco',
    fonts: { display: 'Lora', body: 'Karla', script: 'Parisienne' },
    vars: {
      '--paper': '#cbb49f', '--paper-2': '#b59a83',
      '--ink': '#43352a', '--ink-soft': '#7a6555',
      '--accent': '#8a6a4e', '--accent-2': '#e3d2c0',
      '--seal': '#7d5f45', '--seal-ink': '#f0e4d6', '--glow': '#ffeedd',
      '--emboss-lo': 'rgba(80,56,38,.42)', '--emboss-hi': 'rgba(255,246,236,.75)', '--sombra': 'rgba(72,50,34,.3)'
    }
  },
  {
    id: 'oliva', nome: 'Oliva', familia: 'Verde oliva e linho', tagline: 'Toscana. O estilo mais pedido em casamento ao ar livre.',
    envelope: 'peel', motivo: 'oliveira',
    fonts: { display: 'Libre Baskerville', body: 'Jost', script: 'Italianno' },
    vars: {
      '--paper': '#eae5d4', '--paper-2': '#d6cfb6',
      '--ink': '#3f4a2e', '--ink-soft': '#76805f',
      '--accent': '#7b8a4f', '--accent-2': '#c3cda4',
      '--seal': '#6f7f45', '--seal-ink': '#f1efe2', '--glow': '#fff3cd',
      '--emboss-lo': 'rgba(74,84,46,.40)', '--emboss-hi': 'rgba(255,255,255,.92)', '--sombra': 'rgba(62,70,40,.24)'
    }
  },
  {
    id: 'salvia', nome: 'Sálvia', familia: 'Verde sálvia, off-white e champanhe', tagline: 'A paleta dominante anunciada para 2027.',
    envelope: 'flap', motivo: 'eucalipto',
    fonts: { display: 'Marcellus', body: 'Outfit', script: 'Great Vibes' },
    vars: {
      '--paper': '#e6eae1', '--paper-2': '#d2d9ca',
      '--ink': '#3b4739', '--ink-soft': '#72806e',
      '--accent': '#8d9f85', '--accent-2': '#d9cdb0',
      '--seal': '#9aab91', '--seal-ink': '#2e382c', '--glow': '#ffffff',
      '--emboss-lo': 'rgba(70,84,66,.36)', '--emboss-hi': 'rgba(255,255,255,.95)', '--sombra': 'rgba(58,70,54,.22)'
    }
  },
  {
    id: 'esmeralda', nome: 'Esmeralda', familia: 'Verde esmeralda, prata e preto', tagline: 'Noturno e fechado. Salão, não jardim.',
    envelope: 'flap', motivo: 'arco',
    fonts: { display: 'Cinzel', body: 'Commissioner', script: 'Italianno' },
    vars: {
      '--paper': '#123528', '--paper-2': '#0b241a',
      '--ink': '#e8eee8', '--ink-soft': '#9db5a6',
      '--accent': '#c3cdc6', '--accent-2': '#5d7a69',
      '--seal': '#aebdb3', '--seal-ink': '#0e2a20', '--glow': '#dff5e8',
      '--emboss-lo': 'rgba(0,0,0,.56)', '--emboss-hi': 'rgba(170,200,182,.3)', '--sombra': 'rgba(4,14,10,.52)'
    }
  },
  {
    id: 'borgonha', nome: 'Borgonha', familia: 'Borgonha e dourado', tagline: 'Inverno, vinho, catedral.',
    envelope: 'flap', motivo: 'peonia',
    fonts: { display: 'Playfair Display', body: 'Jost', script: 'Pinyon Script' },
    vars: {
      '--paper': '#6d1f2c', '--paper-2': '#53151f',
      '--ink': '#f6e9d8', '--ink-soft': '#d6ab9f',
      '--accent': '#d4a95e', '--accent-2': '#9c4a52',
      '--seal': '#cfa352', '--seal-ink': '#3d0e15', '--glow': '#ffdfa8',
      '--emboss-lo': 'rgba(40,6,12,.5)', '--emboss-hi': 'rgba(255,216,196,.4)', '--sombra': 'rgba(38,8,13,.46)'
    }
  },
  {
    id: 'ameixa', nome: 'Ameixa', familia: 'Ameixa e rosé empoeirado', tagline: 'Saturação alta, que é o que 2027 pede.',
    envelope: 'flap', motivo: 'laco',
    fonts: { display: 'Bodoni Moda', body: 'Outfit', script: 'Mrs Saint Delafield' },
    vars: {
      '--paper': '#6b4257', '--paper-2': '#523246',
      '--ink': '#f8edf1', '--ink-soft': '#d4b2c0',
      '--accent': '#e3b7b0', '--accent-2': '#9c6b80',
      '--seal': '#dcb0a8', '--seal-ink': '#432434', '--glow': '#ffe4e0',
      '--emboss-lo': 'rgba(40,16,30,.5)', '--emboss-hi': 'rgba(255,220,230,.4)', '--sombra': 'rgba(38,18,30,.44)'
    }
  },
  {
    id: 'blush', nome: 'Blush', familia: 'Rosé e laço', tagline: 'Coquette: busca por renda subiu 280%.',
    envelope: 'flap', motivo: 'renda',
    fonts: { display: 'Cormorant Garamond', body: 'Jost', script: 'Allura' },
    vars: {
      '--paper': '#f7e7e3', '--paper-2': '#eed4cd',
      '--ink': '#65453f', '--ink-soft': '#a3817a',
      '--accent': '#c08d7c', '--accent-2': '#e9cabd',
      '--seal': '#d7a894', '--seal-ink': '#573831', '--glow': '#ffe9df',
      '--emboss-lo': 'rgba(146,98,84,.38)', '--emboss-hi': 'rgba(255,255,255,.96)', '--sombra': 'rgba(120,78,66,.22)'
    }
  },
  {
    id: 'serenity', nome: 'Serenity', familia: 'Azul sereno e lacre branco', tagline: 'A paleta que mais viralizou nos reels do nicho.',
    envelope: 'flap', motivo: 'eucalipto',
    fonts: { display: 'EB Garamond', body: 'Outfit', script: 'Parisienne' },
    vars: {
      '--paper': '#a9c0dc', '--paper-2': '#8ea9cb',
      '--ink': '#1f3755', '--ink-soft': '#47638a',
      '--accent': '#f4f8fc', '--accent-2': '#cddcef',
      '--seal': '#f4f7fb', '--seal-ink': '#4e739f', '--glow': '#ffffff',
      '--emboss-lo': 'rgba(26,52,88,.42)', '--emboss-hi': 'rgba(255,255,255,.9)', '--sombra': 'rgba(24,46,78,.26)'
    }
  },
  {
    id: 'toscana', nome: 'Toscana', familia: 'Terracota, cipreste e sol', tagline: 'Destination. Villa, oliveira, fim de tarde.',
    envelope: 'peel', motivo: 'cipreste',
    fonts: { display: 'Playfair Display', body: 'Jost', script: 'Great Vibes' },
    vars: {
      '--paper': '#e7dcc6', '--paper-2': '#d3c3a4',
      '--ink': '#5a4430', '--ink-soft': '#8d7757',
      '--accent': '#b5633f', '--accent-2': '#8a9a62',
      '--seal': '#a85a38', '--seal-ink': '#f6ece0', '--glow': '#ffe3c4',
      '--emboss-lo': 'rgba(96,70,40,.4)', '--emboss-hi': 'rgba(255,252,244,.92)', '--sombra': 'rgba(84,60,34,.26)'
    }
  },
  {
    id: 'linho', nome: 'Linho', familia: 'Preto real e tan', tagline: 'Urbano, à noite, sem nenhum bege.',
    envelope: 'flap', motivo: 'arco',
    fonts: { display: 'Spectral', body: 'Commissioner', script: 'Petit Formal Script' },
    vars: {
      '--paper': '#1a1816', '--paper-2': '#100f0e',
      '--ink': '#f0ebe3', '--ink-soft': '#9c948a',
      '--accent': '#c8a579', '--accent-2': '#6d5c45',
      '--seal': '#c8a579', '--seal-ink': '#1a1410', '--glow': '#ffe3bb',
      '--emboss-lo': 'rgba(0,0,0,.66)', '--emboss-hi': 'rgba(200,165,121,.26)', '--sombra': 'rgba(0,0,0,.6)'
    }
  }
];

/* Dois tratamentos: 'relevo' é silhueta preenchida na cor do papel
   (o alto-relevo vem das sombras opostas do filtro, e isso só
   funciona em forma cheia); 'foil' é traço na cor de destaque,
   como hot stamping. Arte comprada entra pelo campo
   "Ornamento próprio" do estúdio — ver README. */
window.MOTIVOS = {
  peonia: { tipo:'relevo', svg:'<g><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(0.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(45.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(90.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(135.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(180.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(225.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(270.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(315.0 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(25.0 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(76.4 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(127.9 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(179.3 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(230.7 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(282.1 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(333.6 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(12.0 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(72.0 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(132.0 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(192.0 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(252.0 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(312.0 100 54)"/><circle cx="100" cy="50" r="4.6"/><path d="M100 58 C 99 72, 99 86, 100 99" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M99 70 C 88 66, 78 70, 73 79 C 84 84, 94 80, 99 70 Z"/><path d="M101 70 C 112 66, 122 70, 127 79 C 116 84, 106 80, 101 70 Z"/><path d="M99 85 C 90 82, 82 85, 78 92 C 87 96, 95 93, 99 85 Z"/><path d="M101 85 C 110 82, 118 85, 122 92 C 113 96, 105 93, 101 85 Z"/></g>' },
  eucalipto: { tipo:'relevo', svg:'<g><path d="M100 16 C 101 44, 101 74, 100 100" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/><ellipse cx="84" cy="30" rx="11" ry="8.1" transform="rotate(-34 84 30)"/><ellipse cx="116" cy="40" rx="11" ry="8.1" transform="rotate(34 116 40)"/><ellipse cx="85" cy="48" rx="10" ry="7.4" transform="rotate(-32 85 48)"/><ellipse cx="115" cy="58" rx="10" ry="7.4" transform="rotate(32 115 58)"/><ellipse cx="87" cy="66" rx="9" ry="6.7" transform="rotate(-30 87 66)"/><ellipse cx="113" cy="75" rx="9" ry="6.7" transform="rotate(30 113 75)"/><ellipse cx="90" cy="84" rx="8" ry="5.9" transform="rotate(-26 90 84)"/><ellipse cx="110" cy="92" rx="8" ry="5.9" transform="rotate(26 110 92)"/><ellipse cx="100" cy="14" rx="5" ry="7.5"/></g>' },
  oliveira: { tipo:'relevo', svg:'<g><path d="M100 18 C 102 42, 101 72, 100 100" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M97 34 Q91.5 25.0, 97 14 Q102.5 25.0, 97 34 Z" transform="rotate(-32 97 34)"/><path d="M103 44 Q97.5 35.0, 103 24 Q108.5 35.0, 103 44 Z" transform="rotate(32 103 44)"/><path d="M96 50 Q90.8 41.45, 96 31 Q101.2 41.45, 96 50 Z" transform="rotate(-36 96 50)"/><path d="M104 60 Q98.8 51.45, 104 41 Q109.2 51.45, 104 60 Z" transform="rotate(36 104 60)"/><path d="M96 66 Q91.2 58.35, 96 49 Q100.8 58.35, 96 66 Z" transform="rotate(-40 96 66)"/><path d="M104 76 Q99.2 68.35, 104 59 Q108.8 68.35, 104 76 Z" transform="rotate(40 104 76)"/><path d="M97 82 Q92.8 75.25, 97 67 Q101.2 75.25, 97 82 Z" transform="rotate(-44 97 82)"/><path d="M103 91 Q98.8 84.25, 103 76 Q107.2 84.25, 103 91 Z" transform="rotate(44 103 91)"/><ellipse cx="92" cy="58" rx="3.4" ry="4.6" transform="rotate(-18 92 58)"/><ellipse cx="108" cy="70" rx="3.4" ry="4.6" transform="rotate(18 108 70)"/><ellipse cx="94" cy="86" rx="3.4" ry="4.6" transform="rotate(-14 94 86)"/><path d="M100 18 Q96 12, 100 7 Q104 12, 100 18 Z"/></g>' },
  arco: { tipo:'foil', svg:'<g fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"><path d="M74 102V56a26 26 0 0 1 52 0v46"/><path d="M82 102V56a18 18 0 0 1 36 0v46"/><path d="M100 38v64M68 102h64"/><path d="M100 20v12M93 27l7-7 7 7"/><circle cx="100" cy="52" r="5"/><path d="M88 76h24M90 88h20"/></g>' },
  renda: { tipo:'relevo', svg:'<g><circle cx="70.0" cy="60.0" r="4.2"/><circle cx="71.0" cy="52.2" r="4.2"/><circle cx="74.0" cy="45.0" r="4.2"/><circle cx="78.8" cy="38.8" r="4.2"/><circle cx="85.0" cy="34.0" r="4.2"/><circle cx="92.2" cy="31.0" r="4.2"/><circle cx="100.0" cy="30.0" r="4.2"/><circle cx="107.8" cy="31.0" r="4.2"/><circle cx="115.0" cy="34.0" r="4.2"/><circle cx="121.2" cy="38.8" r="4.2"/><circle cx="126.0" cy="45.0" r="4.2"/><circle cx="129.0" cy="52.2" r="4.2"/><circle cx="130.0" cy="60.0" r="4.2"/><path d="M70 60a30 30 0 0 1 60 0v44H70z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M76 62a24 24 0 0 1 48 0v38H76z" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="71.0" cy="52.2" r="1.5"/><circle cx="78.8" cy="38.8" r="1.5"/><circle cx="92.2" cy="31.0" r="1.5"/><circle cx="107.8" cy="31.0" r="1.5"/><circle cx="121.2" cy="38.8" r="1.5"/><circle cx="129.0" cy="52.2" r="1.5"/><path d="M70 104h60M74 96h52" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="100" cy="34" r="3.4"/></g>' },
  laco: { tipo:'relevo', svg:'<g><path d="M100 44 C 86 26, 62 28, 60 44 C 58 60, 84 58, 100 44 Z"/><path d="M100 44 C 114 26, 138 28, 140 44 C 142 60, 116 58, 100 44 Z"/><ellipse cx="100" cy="45" rx="7.5" ry="6.5"/><path d="M96 51 C 90 66, 86 82, 82 100 L 92 96 L 97 103 C 98 85, 99 66, 100 52 Z"/><path d="M104 51 C 110 66, 114 82, 118 100 L 108 96 L 103 103 C 102 85, 101 66, 100 52 Z"/></g>' },
  cipreste: { tipo:'foil', svg:'<g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M26 102h148"/><path d="M48 102V62c0-10 4-18 7-18s7 8 7 18v40" /><path d="M66 102V72c0-8 3-14 5-14s5 6 5 14v30"/><path d="M152 102V64c0-10-4-17-7-17s-7 7-7 17v38"/><path d="M134 102V74c0-8-3-13-5-13s-5 5-5 13v28"/><path d="M86 102V78h28v24"/><path d="M82 78l18-13 18 13"/><path d="M95 102V88h10v14"/><path d="M90 84h5M105 84h5"/><path d="M118 70c6-3 12-1 14 4"/><path d="M82 70c-6-3-12-1-14 4"/></g>' }
};
