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
  },
  {
    id: 'vinha', nome: 'Vinha', familia: 'Creme com traço oliva e lacre vinho', tagline: 'Cerimônia religiosa sem parecer santinho.',
    envelope: 'peel', motivo: 'videira',
    fonts: { display: 'EB Garamond', body: 'Jost', script: 'Tangerine' },
    vars: {
      '--paper': '#f3eee1', '--paper-2': '#e4dcc8',
      '--ink': '#3c4430', '--ink-soft': '#79806a',
      '--accent': '#5f6e42', '--accent-2': '#cfd3b4',
      '--seal': '#7a3f4a', '--seal-ink': '#f6eee9', '--glow': '#ffe2d0',
      '--emboss-lo': 'rgba(70,80,46,.40)', '--emboss-hi': 'rgba(255,255,255,.94)', '--sombra': 'rgba(60,68,42,.24)'
    }
  },
  {
    id: 'bruma', nome: 'Bruma', familia: 'Azul empoeirado e lacre dourado', tagline: 'Vegetal seco sobre papel vegetal.',
    envelope: 'flap', motivo: 'louro',
    fonts: { display: 'Marcellus', body: 'Mulish', script: 'Allura' },
    vars: {
      '--paper': '#eef0ee', '--paper-2': '#dde2e1',
      '--ink': '#37414a', '--ink-soft': '#79848e',
      '--accent': '#6e8293', '--accent-2': '#c3cfd8',
      '--seal': '#b08d4e', '--seal-ink': '#2d2a20', '--glow': '#ffe9bb',
      '--emboss-lo': 'rgba(60,72,84,.34)', '--emboss-hi': 'rgba(255,255,255,.98)', '--sombra': 'rgba(52,64,74,.2)'
    }
  },
  {
    id: 'traco', nome: 'Traço', familia: 'Creme e verde profundo', tagline: 'Ilustração do casal no lugar da foto.',
    envelope: 'flap', motivo: 'alianca',
    fonts: { display: 'Cardo', body: 'Work Sans', script: 'Petit Formal Script' },
    vars: {
      '--paper': '#f5f2e9', '--paper-2': '#e7e2d3',
      '--ink': '#24352a', '--ink-soft': '#6b7a6c',
      '--accent': '#2f5240', '--accent-2': '#b9cbbb',
      '--seal': '#2f5240', '--seal-ink': '#f2f6f0', '--glow': '#dff3e4',
      '--emboss-lo': 'rgba(36,53,42,.38)', '--emboss-hi': 'rgba(255,255,255,.96)', '--sombra': 'rgba(36,53,42,.22)'
    }
  },
  {
    id: 'chateau', nome: 'Château', familia: 'Marfim, azul ardósia e ouro', tagline: 'Aquarela de fachada. Casamento formal.',
    envelope: 'flap', motivo: 'brasao',
    fonts: { display: 'Playfair Display', body: 'Commissioner', script: 'Great Vibes' },
    vars: {
      '--paper': '#f3f1ea', '--paper-2': '#e2e0d6',
      '--ink': '#2f3742', '--ink-soft': '#77818c',
      '--accent': '#4d5f78', '--accent-2': '#c0cad8',
      '--seal': '#a98b46', '--seal-ink': '#231d10', '--glow': '#ffeec2',
      '--emboss-lo': 'rgba(52,62,76,.36)', '--emboss-hi': 'rgba(255,255,255,.97)', '--sombra': 'rgba(46,56,68,.22)'
    }
  },
  {
    id: 'rute', nome: 'Rute', familia: 'Off-white, verde seco e pergaminho', tagline: 'Versículo e nomes dos pais. O convite de igreja.',
    envelope: 'peel', motivo: 'eucalipto',
    fonts: { display: 'Gilda Display', body: 'Karla', script: 'Mrs Saint Delafield' },
    vars: {
      '--paper': '#f6f4ec', '--paper-2': '#e8e5d8',
      '--ink': '#4a4639', '--ink-soft': '#8c8776',
      '--accent': '#7e8a63', '--accent-2': '#cfd8c2',
      '--seal': '#8f9a72', '--seal-ink': '#2f3524', '--glow': '#f4f8e6',
      '--emboss-lo': 'rgba(88,90,64,.36)', '--emboss-hi': 'rgba(255,255,255,.96)', '--sombra': 'rgba(78,80,58,.22)'
    }
  },
  {
    id: 'campo', nome: 'Campo', familia: 'Rosé queimado e flor do campo', tagline: 'Borda rasgada à mão. Casamento no sítio.',
    envelope: 'peel', motivo: 'campo',
    fonts: { display: 'Crimson Pro', body: 'Outfit', script: 'Parisienne' },
    vars: {
      '--paper': '#f8f0ec', '--paper-2': '#eddfd8',
      '--ink': '#4a3a38', '--ink-soft': '#8e7973',
      '--accent': '#b5736a', '--accent-2': '#e8cfc6',
      '--seal': '#c9a227', '--seal-ink': '#332a0c', '--glow': '#ffe7c9',
      '--emboss-lo': 'rgba(110,72,66,.34)', '--emboss-hi': 'rgba(255,255,255,.96)', '--sombra': 'rgba(96,64,58,.22)'
    }
  },
  {
    id: 'lirio', nome: 'Lírio', familia: 'Azul toile e lacre dourado', tagline: 'Conjunto de cartões. O mais caro de parecer.',
    envelope: 'flap', motivo: 'lirio',
    fonts: { display: 'Cormorant Garamond', body: 'Commissioner', script: 'Pinyon Script' },
    vars: {
      '--paper': '#eceff2', '--paper-2': '#dbe2e8',
      '--ink': '#2c3a45', '--ink-soft': '#72828d',
      '--accent': '#3f5a72', '--accent-2': '#bcccd8',
      '--seal': '#b2913f', '--seal-ink': '#2a2210', '--glow': '#ffe8bb',
      '--emboss-lo': 'rgba(44,62,78,.36)', '--emboss-hi': 'rgba(255,255,255,.98)', '--sombra': 'rgba(40,58,72,.22)'
    }
  },
  {
    id: 'hortensia', nome: 'Hortênsia', familia: 'Lilás azulado sobre papel vegetal', tagline: 'Traço de hortênsia e fita de cetim.',
    envelope: 'flap', motivo: 'hortensia',
    fonts: { display: 'Spectral', body: 'Mulish', script: 'Italianno' },
    vars: {
      '--paper': '#f1f2f5', '--paper-2': '#e2e3ec',
      '--ink': '#343a4a', '--ink-soft': '#7d8294',
      '--accent': '#8085ab', '--accent-2': '#d4d3e6',
      '--seal': '#a98f52', '--seal-ink': '#2a2210', '--glow': '#ffeec6',
      '--emboss-lo': 'rgba(60,62,86,.34)', '--emboss-hi': 'rgba(255,255,255,.98)', '--sombra': 'rgba(54,56,78,.2)'
    }
  },
  {
    id: 'trigo', nome: 'Trigo', familia: 'Creme palha e ouro fosco', tagline: 'Três cartões, fita de chiffon, mosquitinho.',
    envelope: 'peel', motivo: 'trigo',
    fonts: { display: 'Libre Baskerville', body: 'Jost', script: 'Great Vibes' },
    vars: {
      '--paper': '#f6f2e6', '--paper-2': '#e9e1cd',
      '--ink': '#443d2e', '--ink-soft': '#8b8169',
      '--accent': '#a98d4f', '--accent-2': '#e2d4ae',
      '--seal': '#b89a5c', '--seal-ink': '#3a2e12', '--glow': '#fff0c6',
      '--emboss-lo': 'rgba(110,94,54,.38)', '--emboss-hi': 'rgba(255,255,255,.95)', '--sombra': 'rgba(92,78,46,.24)'
    }
  }
];

/* Dois tratamentos: 'relevo' é silhueta preenchida na cor do papel
   (o alto-relevo vem das sombras opostas do filtro, e isso só
   funciona em forma cheia); 'foil' é traço na cor de destaque,
   como hot stamping. Arte comprada entra pelo campo
   "Ornamento próprio" do estúdio — ver README. */
window.MOTIVOS = {
  peonia: { tipo:'relevo', svg:'<g><path d="M100 54 C 85 37.620000000000005, 86.2 19.68, 100 15 C 113.8 19.68, 115 37.620000000000005, 100 54 Z" transform="rotate(0.0 100 54)"/><path d="M100 54 C 85 37.620000000000005, 86.2 19.68, 100 15 C 113.8 19.68, 115 37.620000000000005, 100 54 Z" transform="rotate(40.0 100 54)"/><path d="M100 54 C 85 37.620000000000005, 86.2 19.68, 100 15 C 113.8 19.68, 115 37.620000000000005, 100 54 Z" transform="rotate(80.0 100 54)"/><path d="M100 54 C 85 37.620000000000005, 86.2 19.68, 100 15 C 113.8 19.68, 115 37.620000000000005, 100 54 Z" transform="rotate(120.0 100 54)"/><path d="M100 54 C 85 37.620000000000005, 86.2 19.68, 100 15 C 113.8 19.68, 115 37.620000000000005, 100 54 Z" transform="rotate(160.0 100 54)"/><path d="M100 54 C 85 37.620000000000005, 86.2 19.68, 100 15 C 113.8 19.68, 115 37.620000000000005, 100 54 Z" transform="rotate(200.0 100 54)"/><path d="M100 54 C 85 37.620000000000005, 86.2 19.68, 100 15 C 113.8 19.68, 115 37.620000000000005, 100 54 Z" transform="rotate(240.0 100 54)"/><path d="M100 54 C 85 37.620000000000005, 86.2 19.68, 100 15 C 113.8 19.68, 115 37.620000000000005, 100 54 Z" transform="rotate(280.0 100 54)"/><path d="M100 54 C 85 37.620000000000005, 86.2 19.68, 100 15 C 113.8 19.68, 115 37.620000000000005, 100 54 Z" transform="rotate(320.0 100 54)"/><path d="M100 54 C 87 41.4, 88.03999999999999 27.6, 100 24 C 111.96000000000001 27.6, 113 41.4, 100 54 Z" transform="rotate(22.0 100 54)"/><path d="M100 54 C 87 41.4, 88.03999999999999 27.6, 100 24 C 111.96000000000001 27.6, 113 41.4, 100 54 Z" transform="rotate(67.0 100 54)"/><path d="M100 54 C 87 41.4, 88.03999999999999 27.6, 100 24 C 111.96000000000001 27.6, 113 41.4, 100 54 Z" transform="rotate(112.0 100 54)"/><path d="M100 54 C 87 41.4, 88.03999999999999 27.6, 100 24 C 111.96000000000001 27.6, 113 41.4, 100 54 Z" transform="rotate(157.0 100 54)"/><path d="M100 54 C 87 41.4, 88.03999999999999 27.6, 100 24 C 111.96000000000001 27.6, 113 41.4, 100 54 Z" transform="rotate(202.0 100 54)"/><path d="M100 54 C 87 41.4, 88.03999999999999 27.6, 100 24 C 111.96000000000001 27.6, 113 41.4, 100 54 Z" transform="rotate(247.0 100 54)"/><path d="M100 54 C 87 41.4, 88.03999999999999 27.6, 100 24 C 111.96000000000001 27.6, 113 41.4, 100 54 Z" transform="rotate(292.0 100 54)"/><path d="M100 54 C 87 41.4, 88.03999999999999 27.6, 100 24 C 111.96000000000001 27.6, 113 41.4, 100 54 Z" transform="rotate(337.0 100 54)"/><path d="M100 54 C 90 45.18, 90.8 35.52, 100 33 C 109.2 35.52, 110 45.18, 100 54 Z" transform="rotate(11.0 100 54)"/><path d="M100 54 C 90 45.18, 90.8 35.52, 100 33 C 109.2 35.52, 110 45.18, 100 54 Z" transform="rotate(62.4 100 54)"/><path d="M100 54 C 90 45.18, 90.8 35.52, 100 33 C 109.2 35.52, 110 45.18, 100 54 Z" transform="rotate(113.9 100 54)"/><path d="M100 54 C 90 45.18, 90.8 35.52, 100 33 C 109.2 35.52, 110 45.18, 100 54 Z" transform="rotate(165.3 100 54)"/><path d="M100 54 C 90 45.18, 90.8 35.52, 100 33 C 109.2 35.52, 110 45.18, 100 54 Z" transform="rotate(216.7 100 54)"/><path d="M100 54 C 90 45.18, 90.8 35.52, 100 33 C 109.2 35.52, 110 45.18, 100 54 Z" transform="rotate(268.1 100 54)"/><path d="M100 54 C 90 45.18, 90.8 35.52, 100 33 C 109.2 35.52, 110 45.18, 100 54 Z" transform="rotate(319.6 100 54)"/><path d="M100 54 C 93 48.54, 93.56 42.56, 100 41 C 106.44 42.56, 107 48.54, 100 54 Z" transform="rotate(28.0 100 54)"/><path d="M100 54 C 93 48.54, 93.56 42.56, 100 41 C 106.44 42.56, 107 48.54, 100 54 Z" transform="rotate(88.0 100 54)"/><path d="M100 54 C 93 48.54, 93.56 42.56, 100 41 C 106.44 42.56, 107 48.54, 100 54 Z" transform="rotate(148.0 100 54)"/><path d="M100 54 C 93 48.54, 93.56 42.56, 100 41 C 106.44 42.56, 107 48.54, 100 54 Z" transform="rotate(208.0 100 54)"/><path d="M100 54 C 93 48.54, 93.56 42.56, 100 41 C 106.44 42.56, 107 48.54, 100 54 Z" transform="rotate(268.0 100 54)"/><path d="M100 54 C 93 48.54, 93.56 42.56, 100 41 C 106.44 42.56, 107 48.54, 100 54 Z" transform="rotate(328.0 100 54)"/><circle cx="100" cy="54" r="4"/><path d="M100 56 C 99 70, 99 86, 100 99" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M99 70 C 88 65, 77 69, 72 79 C 84 85, 94 81, 99 70 Z"/><path d="M101 70 C 112 65, 123 69, 128 79 C 116 85, 106 81, 101 70 Z"/><path d="M99 86 C 90 82, 81 85, 77 93 C 87 97, 95 94, 99 86 Z"/><path d="M101 86 C 110 82, 119 85, 123 93 C 113 97, 105 94, 101 86 Z"/></g>' },
  eucalipto: { tipo:'relevo', svg:'<g><path d="M100 16 C 101 44, 101 74, 100 100" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/><ellipse cx="84" cy="30" rx="11" ry="8.1" transform="rotate(-34 84 30)"/><ellipse cx="116" cy="40" rx="11" ry="8.1" transform="rotate(34 116 40)"/><ellipse cx="85" cy="48" rx="10" ry="7.4" transform="rotate(-32 85 48)"/><ellipse cx="115" cy="58" rx="10" ry="7.4" transform="rotate(32 115 58)"/><ellipse cx="87" cy="66" rx="9" ry="6.7" transform="rotate(-30 87 66)"/><ellipse cx="113" cy="75" rx="9" ry="6.7" transform="rotate(30 113 75)"/><ellipse cx="90" cy="84" rx="8" ry="5.9" transform="rotate(-26 90 84)"/><ellipse cx="110" cy="92" rx="8" ry="5.9" transform="rotate(26 110 92)"/><ellipse cx="100" cy="14" rx="5" ry="7.5"/></g>' },
  oliveira: { tipo:'relevo', svg:'<g><path d="M100 18 C 102 42, 101 72, 100 100" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M97 34 Q91.5 25.0, 97 14 Q102.5 25.0, 97 34 Z" transform="rotate(-32 97 34)"/><path d="M103 44 Q97.5 35.0, 103 24 Q108.5 35.0, 103 44 Z" transform="rotate(32 103 44)"/><path d="M96 50 Q90.8 41.45, 96 31 Q101.2 41.45, 96 50 Z" transform="rotate(-36 96 50)"/><path d="M104 60 Q98.8 51.45, 104 41 Q109.2 51.45, 104 60 Z" transform="rotate(36 104 60)"/><path d="M96 66 Q91.2 58.35, 96 49 Q100.8 58.35, 96 66 Z" transform="rotate(-40 96 66)"/><path d="M104 76 Q99.2 68.35, 104 59 Q108.8 68.35, 104 76 Z" transform="rotate(40 104 76)"/><path d="M97 82 Q92.8 75.25, 97 67 Q101.2 75.25, 97 82 Z" transform="rotate(-44 97 82)"/><path d="M103 91 Q98.8 84.25, 103 76 Q107.2 84.25, 103 91 Z" transform="rotate(44 103 91)"/><ellipse cx="92" cy="58" rx="3.4" ry="4.6" transform="rotate(-18 92 58)"/><ellipse cx="108" cy="70" rx="3.4" ry="4.6" transform="rotate(18 108 70)"/><ellipse cx="94" cy="86" rx="3.4" ry="4.6" transform="rotate(-14 94 86)"/><path d="M100 18 Q96 12, 100 7 Q104 12, 100 18 Z"/></g>' },
  arco: { tipo:'foil', svg:'<g fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"><path d="M74 102V56a26 26 0 0 1 52 0v46"/><path d="M82 102V56a18 18 0 0 1 36 0v46"/><path d="M100 38v64M68 102h64"/><path d="M100 20v12M93 27l7-7 7 7"/><circle cx="100" cy="52" r="5"/><path d="M88 76h24M90 88h20"/></g>' },
  renda: { tipo:'relevo', svg:'<g><circle cx="70.0" cy="60.0" r="4.2"/><circle cx="71.0" cy="52.2" r="4.2"/><circle cx="74.0" cy="45.0" r="4.2"/><circle cx="78.8" cy="38.8" r="4.2"/><circle cx="85.0" cy="34.0" r="4.2"/><circle cx="92.2" cy="31.0" r="4.2"/><circle cx="100.0" cy="30.0" r="4.2"/><circle cx="107.8" cy="31.0" r="4.2"/><circle cx="115.0" cy="34.0" r="4.2"/><circle cx="121.2" cy="38.8" r="4.2"/><circle cx="126.0" cy="45.0" r="4.2"/><circle cx="129.0" cy="52.2" r="4.2"/><circle cx="130.0" cy="60.0" r="4.2"/><path d="M70 60a30 30 0 0 1 60 0v44H70z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M76 62a24 24 0 0 1 48 0v38H76z" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="71.0" cy="52.2" r="1.5"/><circle cx="78.8" cy="38.8" r="1.5"/><circle cx="92.2" cy="31.0" r="1.5"/><circle cx="107.8" cy="31.0" r="1.5"/><circle cx="121.2" cy="38.8" r="1.5"/><circle cx="129.0" cy="52.2" r="1.5"/><path d="M70 104h60M74 96h52" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="100" cy="34" r="3.4"/></g>' },
  laco: { tipo:'relevo', svg:'<g><path d="M100 44 C 86 26, 62 28, 60 44 C 58 60, 84 58, 100 44 Z"/><path d="M100 44 C 114 26, 138 28, 140 44 C 142 60, 116 58, 100 44 Z"/><ellipse cx="100" cy="45" rx="7.5" ry="6.5"/><path d="M96 51 C 90 66, 86 82, 82 100 L 92 96 L 97 103 C 98 85, 99 66, 100 52 Z"/><path d="M104 51 C 110 66, 114 82, 118 100 L 108 96 L 103 103 C 102 85, 101 66, 100 52 Z"/></g>' },
  cipreste: { tipo:'foil', svg:'<g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M26 102h148"/><path d="M48 102V62c0-10 4-18 7-18s7 8 7 18v40" /><path d="M66 102V72c0-8 3-14 5-14s5 6 5 14v30"/><path d="M152 102V64c0-10-4-17-7-17s-7 7-7 17v38"/><path d="M134 102V74c0-8-3-13-5-13s-5 5-5 13v28"/><path d="M86 102V78h28v24"/><path d="M82 78l18-13 18 13"/><path d="M95 102V88h10v14"/><path d="M90 84h5M105 84h5"/><path d="M118 70c6-3 12-1 14 4"/><path d="M82 70c-6-3-12-1-14 4"/></g>' },
  videira: { tipo:'relevo', svg:"<g><path d=\"M100 12 C 102 24, 101 34, 100 44\" stroke=\"currentColor\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\"/><circle cx=\"82\" cy=\"52\" r=\"6.3\"/><circle cx=\"94\" cy=\"52\" r=\"6.3\"/><circle cx=\"106\" cy=\"52\" r=\"6.3\"/><circle cx=\"118\" cy=\"52\" r=\"6.3\"/><circle cx=\"88\" cy=\"62.4\" r=\"6.3\"/><circle cx=\"100\" cy=\"62.4\" r=\"6.3\"/><circle cx=\"112\" cy=\"62.4\" r=\"6.3\"/><circle cx=\"94\" cy=\"72.8\" r=\"6.3\"/><circle cx=\"106\" cy=\"72.8\" r=\"6.3\"/><circle cx=\"100\" cy=\"83.2\" r=\"6.3\"/><path d=\"M0 0 C -5 -3, -9 -5, -13 -4 C -11 -9, -13 -12, -16 -13 C -11 -14, -9 -18, -9 -22 C -5 -20, -2 -21, 0 -25 C 2 -21, 5 -20, 9 -22 C 9 -18, 11 -14, 16 -13 C 13 -12, 11 -9, 13 -4 C 9 -5, 5 -3, 0 0 Z\" transform=\"translate(80 36) rotate(-58) scale(0.92)\"/><path d=\"M100 40 Q88 42, 80 38\" stroke=\"currentColor\" stroke-width=\"1.4\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M0 0 C -5 -3, -9 -5, -13 -4 C -11 -9, -13 -12, -16 -13 C -11 -14, -9 -18, -9 -22 C -5 -20, -2 -21, 0 -25 C 2 -21, 5 -20, 9 -22 C 9 -18, 11 -14, 16 -13 C 13 -12, 11 -9, 13 -4 C 9 -5, 5 -3, 0 0 Z\" transform=\"translate(120 36) rotate(58) scale(0.92)\"/><path d=\"M100 40 Q112 42, 120 38\" stroke=\"currentColor\" stroke-width=\"1.4\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M101 26 C 110 22, 116 17, 113 12 C 110 8, 105 11, 107 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\"/></g>" },
  louro: { tipo:'relevo', svg:"<g><path d=\"M100 103 Q64 80, 66 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M93.2 98 C 88.1 92.2, 89 84.4, 93.2 81 C 97.4 84.4, 98.3 92.2, 93.2 98 Z\" transform=\"rotate(-17.9 93.2 98)\"/><path d=\"M85.8 90.7 C 81 85.2, 81.9 77.8, 85.8 74.6 C 89.8 77.8, 90.7 85.2, 85.8 90.7 Z\" transform=\"rotate(-8.6 85.8 90.7)\"/><path d=\"M79.7 82.2 C 75.1 77, 75.9 70, 79.7 66.9 C 83.4 70, 84.2 77, 79.7 82.2 Z\" transform=\"rotate(0.4 79.7 82.2)\"/><path d=\"M74.6 72.4 C 70.3 67.5, 71.1 60.9, 74.6 58 C 78.2 60.9, 78.9 67.5, 74.6 72.4 Z\" transform=\"rotate(8.7 74.6 72.4)\"/><path d=\"M70.7 61.5 C 66.6 56.8, 67.4 50.6, 70.7 47.9 C 74 50.6, 74.8 56.8, 70.7 61.5 Z\" transform=\"rotate(16 70.7 61.5)\"/><path d=\"M68 49.2 C 64.1 44.9, 64.8 39.1, 68 36.5 C 71.1 39.1, 71.8 44.9, 68 49.2 Z\" transform=\"rotate(22.4 68 49.2)\"/><path d=\"M66.4 35.8 C 62.8 31.7, 63.4 26.3, 66.4 23.9 C 69.3 26.3, 69.9 31.7, 66.4 35.8 Z\" transform=\"rotate(27.8 66.4 35.8)\"/><path d=\"M65.9 21.1 C 62.6 17.3, 63.2 12.3, 65.9 10.1 C 68.6 12.3, 69.2 17.3, 65.9 21.1 Z\" transform=\"rotate(32.4 65.9 21.1)\"/><path d=\"M100 103 Q136 80, 134 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M106.8 98 C 101.7 92.2, 102.6 84.4, 106.8 81 C 111 84.4, 111.9 92.2, 106.8 98 Z\" transform=\"rotate(17.9 106.8 98)\"/><path d=\"M114.2 90.7 C 109.3 85.2, 110.2 77.8, 114.2 74.6 C 118.1 77.8, 119 85.2, 114.2 90.7 Z\" transform=\"rotate(8.6 114.2 90.7)\"/><path d=\"M120.3 82.2 C 115.8 77, 116.6 70, 120.3 66.9 C 124.1 70, 124.9 77, 120.3 82.2 Z\" transform=\"rotate(-0.4 120.3 82.2)\"/><path d=\"M125.4 72.4 C 121.1 67.5, 121.8 60.9, 125.4 58 C 128.9 60.9, 129.7 67.5, 125.4 72.4 Z\" transform=\"rotate(-8.7 125.4 72.4)\"/><path d=\"M129.3 61.5 C 125.2 56.8, 126 50.6, 129.3 47.9 C 132.6 50.6, 133.4 56.8, 129.3 61.5 Z\" transform=\"rotate(-16 129.3 61.5)\"/><path d=\"M132 49.2 C 128.2 44.9, 128.9 39.1, 132 36.5 C 135.2 39.1, 135.9 44.9, 132 49.2 Z\" transform=\"rotate(-22.4 132 49.2)\"/><path d=\"M133.6 35.8 C 130.1 31.7, 130.7 26.3, 133.6 23.9 C 136.6 26.3, 137.2 31.7, 133.6 35.8 Z\" transform=\"rotate(-27.8 133.6 35.8)\"/><path d=\"M134.1 21.1 C 130.8 17.3, 131.4 12.3, 134.1 10.1 C 136.8 12.3, 137.4 17.3, 134.1 21.1 Z\" transform=\"rotate(-32.4 134.1 21.1)\"/><circle cx=\"100\" cy=\"103\" r=\"2.2\"/></g>" },
  lirio: { tipo:'relevo', svg:"<g><path d=\"M100 60 C 90.5 43.7, 93.7 21.6, 100 12 C 106.3 21.6, 109.5 43.7, 100 60 Z\" transform=\"rotate(-60 100 60)\"/><path d=\"M100 60 C 90.5 43.7, 93.7 21.6, 100 12 C 106.3 21.6, 109.5 43.7, 100 60 Z\" transform=\"rotate(0 100 60)\"/><path d=\"M100 60 C 90.5 43.7, 93.7 21.6, 100 12 C 106.3 21.6, 109.5 43.7, 100 60 Z\" transform=\"rotate(60 100 60)\"/><path d=\"M100 60 C 89.5 45, 92.7 24.8, 100 16 C 107.3 24.8, 110.5 45, 100 60 Z\" transform=\"rotate(-30 100 60)\"/><path d=\"M100 60 C 89.5 45, 92.7 24.8, 100 16 C 107.3 24.8, 110.5 45, 100 60 Z\" transform=\"rotate(30 100 60)\"/><path d=\"M100 60 C 89 44.4, 92.3 23.2, 100 14 C 107.7 23.2, 111 44.4, 100 60 Z\" transform=\"rotate(0 100 60)\"/><path d=\"M100 60 Q93.7 33.2, 84.3 16.8\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\" stroke-linecap=\"round\"/><ellipse cx=\"84.3\" cy=\"16.8\" rx=\"1.9\" ry=\"3.2\" transform=\"rotate(2 84.3 16.8)\"/><path d=\"M100 60 Q100 27.8, 100 8\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\" stroke-linecap=\"round\"/><ellipse cx=\"100\" cy=\"8\" rx=\"1.9\" ry=\"3.2\" transform=\"rotate(22 100 8)\"/><path d=\"M100 60 Q106.3 33.2, 115.7 16.8\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\" stroke-linecap=\"round\"/><ellipse cx=\"115.7\" cy=\"16.8\" rx=\"1.9\" ry=\"3.2\" transform=\"rotate(42 115.7 16.8)\"/><path d=\"M100 60 C 101 78, 100 92, 100 104\" stroke=\"currentColor\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M92 94 C 87 85.8, 89.4 74.8, 92 70 C 94.6 74.8, 97 85.8, 92 94 Z\" transform=\"rotate(-38 92 94)\"/><path d=\"M108 100 C 103.2 92.5, 105.5 82.4, 108 78 C 110.5 82.4, 112.8 92.5, 108 100 Z\" transform=\"rotate(38 108 100)\"/></g>" },
  hortensia: { tipo:'relevo', svg:"<g><ellipse cx=\"103.5\" cy=\"20.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(45 103.5 20.5)\"/><ellipse cx=\"103.5\" cy=\"27.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(135 103.5 27.5)\"/><ellipse cx=\"96.5\" cy=\"27.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(225 96.5 27.5)\"/><ellipse cx=\"96.5\" cy=\"20.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(315 96.5 20.5)\"/><circle cx=\"100\" cy=\"24\" r=\"1.2\"/><ellipse cx=\"85.5\" cy=\"32.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(45 85.5 32.5)\"/><ellipse cx=\"85.5\" cy=\"39.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(135 85.5 39.5)\"/><ellipse cx=\"78.5\" cy=\"39.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(225 78.5 39.5)\"/><ellipse cx=\"78.5\" cy=\"32.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(315 78.5 32.5)\"/><circle cx=\"82\" cy=\"36\" r=\"1.2\"/><ellipse cx=\"121.5\" cy=\"32.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(45 121.5 32.5)\"/><ellipse cx=\"121.5\" cy=\"39.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(135 121.5 39.5)\"/><ellipse cx=\"114.5\" cy=\"39.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(225 114.5 39.5)\"/><ellipse cx=\"114.5\" cy=\"32.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(315 114.5 32.5)\"/><circle cx=\"118\" cy=\"36\" r=\"1.2\"/><ellipse cx=\"103.5\" cy=\"38.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(45 103.5 38.5)\"/><ellipse cx=\"103.5\" cy=\"45.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(135 103.5 45.5)\"/><ellipse cx=\"96.5\" cy=\"45.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(225 96.5 45.5)\"/><ellipse cx=\"96.5\" cy=\"38.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(315 96.5 38.5)\"/><circle cx=\"100\" cy=\"42\" r=\"1.2\"/><ellipse cx=\"91.5\" cy=\"50.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(45 91.5 50.5)\"/><ellipse cx=\"91.5\" cy=\"57.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(135 91.5 57.5)\"/><ellipse cx=\"84.5\" cy=\"57.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(225 84.5 57.5)\"/><ellipse cx=\"84.5\" cy=\"50.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(315 84.5 50.5)\"/><circle cx=\"88\" cy=\"54\" r=\"1.2\"/><ellipse cx=\"115.5\" cy=\"50.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(45 115.5 50.5)\"/><ellipse cx=\"115.5\" cy=\"57.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(135 115.5 57.5)\"/><ellipse cx=\"108.5\" cy=\"57.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(225 108.5 57.5)\"/><ellipse cx=\"108.5\" cy=\"50.5\" rx=\"3.4\" ry=\"4.6\" transform=\"rotate(315 108.5 50.5)\"/><circle cx=\"112\" cy=\"54\" r=\"1.2\"/><path d=\"M100 60 C 101 78, 100 92, 100 104\" stroke=\"currentColor\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M86 88 C 76.5 77.8, 79.3 64, 86 58 C 92.7 64, 95.5 77.8, 86 88 Z\" transform=\"rotate(-40 86 88)\"/><path d=\"M114 96 C 105 86.5, 107.7 73.6, 114 68 C 120.3 73.6, 123 86.5, 114 96 Z\" transform=\"rotate(40 114 96)\"/></g>" },
  trigo: { tipo:'relevo', svg:"<g><g transform=\"translate(100 104) rotate(-13) scale(0.93)\"><path d=\"M0 0 L0 -26\" stroke=\"currentColor\" stroke-width=\"1.8\" fill=\"none\" stroke-linecap=\"round\"/><ellipse cx=\"-4.2\" cy=\"-22\" rx=\"3\" ry=\"6.4\" transform=\"rotate(-26 -4.2 -22)\"/><ellipse cx=\"4.2\" cy=\"-22\" rx=\"3\" ry=\"6.4\" transform=\"rotate(26 4.2 -22)\"/><ellipse cx=\"-4.2\" cy=\"-30.2\" rx=\"2.9\" ry=\"6.1\" transform=\"rotate(-26 -4.2 -30.2)\"/><ellipse cx=\"4.2\" cy=\"-30.2\" rx=\"2.9\" ry=\"6.1\" transform=\"rotate(26 4.2 -30.2)\"/><ellipse cx=\"-4.2\" cy=\"-38.4\" rx=\"2.7\" ry=\"5.8\" transform=\"rotate(-26 -4.2 -38.4)\"/><ellipse cx=\"4.2\" cy=\"-38.4\" rx=\"2.7\" ry=\"5.8\" transform=\"rotate(26 4.2 -38.4)\"/><ellipse cx=\"-4.2\" cy=\"-46.6\" rx=\"2.6\" ry=\"5.5\" transform=\"rotate(-26 -4.2 -46.6)\"/><ellipse cx=\"4.2\" cy=\"-46.6\" rx=\"2.6\" ry=\"5.5\" transform=\"rotate(26 4.2 -46.6)\"/><ellipse cx=\"-4.2\" cy=\"-54.8\" rx=\"2.5\" ry=\"5.2\" transform=\"rotate(-26 -4.2 -54.8)\"/><ellipse cx=\"4.2\" cy=\"-54.8\" rx=\"2.5\" ry=\"5.2\" transform=\"rotate(26 4.2 -54.8)\"/><ellipse cx=\"-4.2\" cy=\"-63\" rx=\"2.3\" ry=\"5\" transform=\"rotate(-26 -4.2 -63)\"/><ellipse cx=\"4.2\" cy=\"-63\" rx=\"2.3\" ry=\"5\" transform=\"rotate(26 4.2 -63)\"/><ellipse cx=\"-4.2\" cy=\"-71.2\" rx=\"2.2\" ry=\"4.7\" transform=\"rotate(-26 -4.2 -71.2)\"/><ellipse cx=\"4.2\" cy=\"-71.2\" rx=\"2.2\" ry=\"4.7\" transform=\"rotate(26 4.2 -71.2)\"/><ellipse cx=\"-4.2\" cy=\"-79.4\" rx=\"2.1\" ry=\"4.4\" transform=\"rotate(-26 -4.2 -79.4)\"/><ellipse cx=\"4.2\" cy=\"-79.4\" rx=\"2.1\" ry=\"4.4\" transform=\"rotate(26 4.2 -79.4)\"/><ellipse cx=\"0\" cy=\"-86.6\" rx=\"2.7\" ry=\"6.6\"/></g><g transform=\"translate(100 104) rotate(13) scale(0.93)\"><path d=\"M0 0 L0 -26\" stroke=\"currentColor\" stroke-width=\"1.8\" fill=\"none\" stroke-linecap=\"round\"/><ellipse cx=\"-4.2\" cy=\"-22\" rx=\"3\" ry=\"6.4\" transform=\"rotate(-26 -4.2 -22)\"/><ellipse cx=\"4.2\" cy=\"-22\" rx=\"3\" ry=\"6.4\" transform=\"rotate(26 4.2 -22)\"/><ellipse cx=\"-4.2\" cy=\"-30.2\" rx=\"2.9\" ry=\"6.1\" transform=\"rotate(-26 -4.2 -30.2)\"/><ellipse cx=\"4.2\" cy=\"-30.2\" rx=\"2.9\" ry=\"6.1\" transform=\"rotate(26 4.2 -30.2)\"/><ellipse cx=\"-4.2\" cy=\"-38.4\" rx=\"2.7\" ry=\"5.8\" transform=\"rotate(-26 -4.2 -38.4)\"/><ellipse cx=\"4.2\" cy=\"-38.4\" rx=\"2.7\" ry=\"5.8\" transform=\"rotate(26 4.2 -38.4)\"/><ellipse cx=\"-4.2\" cy=\"-46.6\" rx=\"2.6\" ry=\"5.5\" transform=\"rotate(-26 -4.2 -46.6)\"/><ellipse cx=\"4.2\" cy=\"-46.6\" rx=\"2.6\" ry=\"5.5\" transform=\"rotate(26 4.2 -46.6)\"/><ellipse cx=\"-4.2\" cy=\"-54.8\" rx=\"2.5\" ry=\"5.2\" transform=\"rotate(-26 -4.2 -54.8)\"/><ellipse cx=\"4.2\" cy=\"-54.8\" rx=\"2.5\" ry=\"5.2\" transform=\"rotate(26 4.2 -54.8)\"/><ellipse cx=\"-4.2\" cy=\"-63\" rx=\"2.3\" ry=\"5\" transform=\"rotate(-26 -4.2 -63)\"/><ellipse cx=\"4.2\" cy=\"-63\" rx=\"2.3\" ry=\"5\" transform=\"rotate(26 4.2 -63)\"/><ellipse cx=\"-4.2\" cy=\"-71.2\" rx=\"2.2\" ry=\"4.7\" transform=\"rotate(-26 -4.2 -71.2)\"/><ellipse cx=\"4.2\" cy=\"-71.2\" rx=\"2.2\" ry=\"4.7\" transform=\"rotate(26 4.2 -71.2)\"/><ellipse cx=\"-4.2\" cy=\"-79.4\" rx=\"2.1\" ry=\"4.4\" transform=\"rotate(-26 -4.2 -79.4)\"/><ellipse cx=\"4.2\" cy=\"-79.4\" rx=\"2.1\" ry=\"4.4\" transform=\"rotate(26 4.2 -79.4)\"/><ellipse cx=\"0\" cy=\"-86.6\" rx=\"2.7\" ry=\"6.6\"/></g><path d=\"M94 100 Q100 104, 106 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></g>" },
  campo: { tipo:'relevo', svg:"<g><path d=\"M100 104 Q84.6 78.8, 64.7 55.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><ellipse cx=\"61.2\" cy=\"50.6\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(-36 61.2 50.6)\"/><ellipse cx=\"66.3\" cy=\"49.7\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(15.4 66.3 49.7)\"/><ellipse cx=\"70.3\" cy=\"53.1\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(66.9 70.3 53.1)\"/><ellipse cx=\"70\" cy=\"58.3\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(118.3 70 58.3)\"/><ellipse cx=\"65.8\" cy=\"61.4\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(169.7 65.8 61.4)\"/><ellipse cx=\"60.8\" cy=\"60\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(221.1 60.8 60)\"/><ellipse cx=\"58.7\" cy=\"55.2\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(272.6 58.7 55.2)\"/><circle cx=\"64.7\" cy=\"55.5\" r=\"2.6\"/><path d=\"M100 104 Q88.8 66.6, 75.3 32.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><ellipse cx=\"75.3\" cy=\"32.1\" rx=\"3.4\" ry=\"5.1\" transform=\"rotate(-19 75.3 32.1)\"/><ellipse cx=\"73.5\" cy=\"40.1\" rx=\"3\" ry=\"4.5\" transform=\"rotate(-19 75.3 40.1)\"/><ellipse cx=\"71.7\" cy=\"48.1\" rx=\"2.6\" ry=\"3.9\" transform=\"rotate(-19 75.3 48.1)\"/><path d=\"M100 104 Q100 58.2, 100 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><ellipse cx=\"100\" cy=\"10\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(0 100 10)\"/><ellipse cx=\"104.7\" cy=\"12.3\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(51.4 104.7 12.3)\"/><ellipse cx=\"105.8\" cy=\"17.3\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(102.9 105.8 17.3)\"/><ellipse cx=\"102.6\" cy=\"21.4\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(154.3 102.6 21.4)\"/><ellipse cx=\"97.4\" cy=\"21.4\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(205.7 97.4 21.4)\"/><ellipse cx=\"94.2\" cy=\"17.3\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(257.1 94.2 17.3)\"/><ellipse cx=\"95.3\" cy=\"12.3\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(308.6 95.3 12.3)\"/><circle cx=\"100\" cy=\"16\" r=\"2.6\"/><path d=\"M100 104 Q110.9 67.6, 124.1 34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><ellipse cx=\"126\" cy=\"28.4\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(19 126 28.4)\"/><ellipse cx=\"129.7\" cy=\"32\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(70.4 129.7 32)\"/><ellipse cx=\"129.2\" cy=\"37.2\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(121.9 129.2 37.2)\"/><ellipse cx=\"124.8\" cy=\"40\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(173.3 124.8 40)\"/><ellipse cx=\"119.9\" cy=\"38.3\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(224.7 119.9 38.3)\"/><ellipse cx=\"118.1\" cy=\"33.4\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(276.1 118.1 33.4)\"/><ellipse cx=\"120.9\" cy=\"29\" rx=\"2.5\" ry=\"4.2\" transform=\"rotate(327.6 120.9 29)\"/><circle cx=\"124.1\" cy=\"34\" r=\"2.6\"/><path d=\"M100 104 Q114.8 79.6, 134.1 57.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><ellipse cx=\"134.1\" cy=\"57.1\" rx=\"3.4\" ry=\"5.1\" transform=\"rotate(36 134.1 57.1)\"/><ellipse cx=\"135.9\" cy=\"65.1\" rx=\"3\" ry=\"4.5\" transform=\"rotate(36 134.1 65.1)\"/><ellipse cx=\"137.6\" cy=\"73.1\" rx=\"2.6\" ry=\"3.9\" transform=\"rotate(36 134.1 73.1)\"/><path d=\"M100 104 Q86.5 86.5, 66.3 75.7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><path d=\"M100 104 Q112.9 87.3, 132.2 77\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/></g>" },
  alianca: { tipo:'foil', svg:"<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"><circle cx=\"88\" cy=\"68\" r=\"22\"/><circle cx=\"88\" cy=\"68\" r=\"18.6\"/><circle cx=\"112\" cy=\"68\" r=\"22\"/><circle cx=\"112\" cy=\"68\" r=\"18.6\"/><path d=\"M100 40 C 92 32, 90 22, 100 14 C 110 22, 108 32, 100 40\"/><path d=\"M86 28 C 92 26, 96 30, 98 36\"/><path d=\"M114 28 C 108 26, 104 30, 102 36\"/><path d=\"M66 100h68\"/><path d=\"M100 96l3.4 4-3.4 4-3.4-4z\" stroke-width=\"1\"/></g>" },
  brasao: { tipo:'foil', svg:"<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"><path d=\"M70 36h60v30c0 18-14 28-30 36-16-8-30-18-30-36z\"/><path d=\"M75 41h50v25c0 15-11 23-25 30-14-7-25-15-25-30z\"/><path d=\"M100 18l5 7-5 7-5-7z\"/><path d=\"M80 58h40\" stroke-width=\"1\"/><path d=\"M100 53l4 5-4 5-4-5z\" stroke-width=\"1\"/><path d=\"M40 94c14-8 24-7 30-2M160 94c-14-8-24-7-30-2\" stroke-width=\"1\"/></g>" }
};
