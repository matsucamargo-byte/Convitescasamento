/* =============================================================
   Catálogo de templates.

   Seis FAMÍLIAS de paleta distintas, não seis variações da mesma.
   A regra que isso respeita: bege + latão + café é o reflexo padrão
   para briefing "premium consumer" e deixa a marca invisível.
   Só "Marfim" fica nessa família — e por um motivo que dá pra defender:
   marfim com lacre dourado é a convenção de papelaria de casamento,
   é o que o mercado referência usa, não um reflexo.
   As outras cinco vêm de famílias deliberadamente diferentes.

   Cada template também troca o par tipográfico. Mesma serifada em
   tudo é o que faz seis convites parecerem um convite só.
   ============================================================= */

window.TEMPLATES = [
  {
    id: 'marfim',
    nome: 'Marfim',
    familia: 'Marfim e ouro',
    tagline: 'A convenção da papelaria clássica. Vende sozinho.',
    envelope: 'flap',
    seal: 'wax',
    motivo: 'peonia',
    fonts: { display: 'Cormorant Garamond', body: 'Jost', script: 'Pinyon Script' },
    vars: {
      '--paper'    : '#f6f1e7',
      '--paper-2'  : '#ece3d2',
      '--ink'      : '#403a31',
      '--ink-soft' : '#847868',
      '--accent'   : '#a8823f',
      '--accent-2' : '#ddc79a',
      '--seal'     : '#b8913f',
      '--seal-ink' : '#4a3912',
      '--glow'     : '#ffe9b8',
      '--emboss-lo': 'rgba(118,96,58,.40)',
      '--emboss-hi': 'rgba(255,255,255,.95)',
      '--sombra'   : 'rgba(84,66,38,.26)'
    }
  },
  {
    id: 'bosque',
    nome: 'Bosque',
    familia: 'Verde profundo, osso e âmbar',
    tagline: 'Casamento no campo, na serra, ao ar livre.',
    envelope: 'flap',
    seal: 'wax',
    motivo: 'eucalipto',
    fonts: { display: 'Cinzel', body: 'Karla', script: 'Italianno' },
    vars: {
      '--paper'    : '#1e3328',
      '--paper-2'  : '#15251c',
      '--ink'      : '#ece4d4',
      '--ink-soft' : '#a8b5a2',
      '--accent'   : '#d49a4e',
      '--accent-2' : '#6f8a6a',
      '--seal'     : '#c98f45',
      '--seal-ink' : '#22160a',
      '--glow'     : '#ffd89a',
      '--emboss-lo': 'rgba(0,0,0,.52)',
      '--emboss-hi': 'rgba(176,196,170,.34)',
      '--sombra'   : 'rgba(6,16,11,.5)'
    }
  },
  {
    id: 'terracota',
    nome: 'Terracota',
    familia: 'Terracota e ardósia',
    tagline: 'Quente sem ser bege. Fim de tarde, adobe, deserto.',
    envelope: 'peel',
    seal: 'wax',
    motivo: 'oliveira',
    fonts: { display: 'Playfair Display', body: 'Jost', script: 'Great Vibes' },
    vars: {
      '--paper'    : '#c96a4c',
      '--paper-2'  : '#ad5538',
      '--ink'      : '#fdf3ec',
      '--ink-soft' : '#f0cdbb',
      '--accent'   : '#5c6b73',
      '--accent-2' : '#e8b9a4',
      '--seal'     : '#49565d',
      '--seal-ink' : '#e9f0f3',
      '--glow'     : '#ffd9c4',
      '--emboss-lo': 'rgba(92,38,20,.46)',
      '--emboss-hi': 'rgba(255,228,214,.52)',
      '--sombra'   : 'rgba(74,28,14,.4)'
    }
  },
  {
    id: 'linho',
    nome: 'Linho',
    familia: 'Preto real e tan',
    tagline: 'Contraste duro, zero bege. Casamento urbano à noite.',
    envelope: 'flap',
    seal: 'wax',
    motivo: 'arco',
    fonts: { display: 'Spectral', body: 'Commissioner', script: 'Petit Formal Script' },
    vars: {
      '--paper'    : '#1a1816',
      '--paper-2'  : '#100f0e',
      '--ink'      : '#f0ebe3',
      '--ink-soft' : '#9c948a',
      '--accent'   : '#c8a579',
      '--accent-2' : '#6d5c45',
      '--seal'     : '#c8a579',
      '--seal-ink' : '#1a1410',
      '--glow'     : '#ffe3bb',
      '--emboss-lo': 'rgba(0,0,0,.66)',
      '--emboss-hi': 'rgba(200,165,121,.26)',
      '--sombra'   : 'rgba(0,0,0,.6)'
    }
  },
  {
    id: 'cobalto',
    nome: 'Cobalto',
    familia: 'Cobalto e creme',
    tagline: 'Um azul saturado contra um neutro só. Sem latão.',
    envelope: 'flap',
    seal: 'wax',
    motivo: 'arco',
    fonts: { display: 'EB Garamond', body: 'Outfit', script: 'Tangerine' },
    vars: {
      '--paper'    : '#2f4b8f',
      '--paper-2'  : '#223a73',
      '--ink'      : '#f6f2e7',
      '--ink-soft' : '#bcc8e4',
      '--accent'   : '#f2e7cf',
      '--accent-2' : '#7b92c9',
      '--seal'     : '#f4ecd9',
      '--seal-ink' : '#2b447f',
      '--glow'     : '#ffffff',
      '--emboss-lo': 'rgba(13,28,66,.5)',
      '--emboss-hi': 'rgba(228,236,255,.5)',
      '--sombra'   : 'rgba(10,24,58,.44)'
    }
  },
  {
    id: 'bruma',
    nome: 'Bruma',
    familia: 'Prata, cromo e fumaça',
    tagline: 'Luxo frio. Nenhum concorrente brasileiro faz isso.',
    envelope: 'flap',
    seal: 'wax',
    motivo: 'peonia',
    fonts: { display: 'Marcellus', body: 'Outfit', script: 'Parisienne' },
    vars: {
      '--paper'    : '#dcdee1',
      '--paper-2'  : '#c6cace',
      '--ink'      : '#2c3034',
      '--ink-soft' : '#6d757c',
      '--accent'   : '#8a9299',
      '--accent-2' : '#b9bfc5',
      '--seal'     : '#9aa3aa',
      '--seal-ink' : '#f2f4f6',
      '--glow'     : '#ffffff',
      '--emboss-lo': 'rgba(56,66,76,.42)',
      '--emboss-hi': 'rgba(255,255,255,.95)',
      '--sombra'   : 'rgba(44,52,60,.3)'
    }
  }
];

/* -------------------------------------------------------------
   Ornamentos.

   Estes são desenhos vetoriais simples — linhas e curvas reais,
   não primitivas empilhadas. Funcionam, mas não competem com
   aquarela botânica de verdade.

   Para subir de nível: cada template aceita `ornamentoUrl` (PNG ou
   SVG). Se estiver preenchido, a arte comprada entra no lugar
   destes desenhos. Ver README, seção "Trocar o ornamento".
   ------------------------------------------------------------- */
window.MOTIVOS = {
  /* Dois tratamentos diferentes, de propósito:

     'relevo' — silhueta PREENCHIDA na cor do papel. O alto-relevo vem de
     duas sombras opostas no filtro CSS, e isso só funciona em forma cheia:
     em traço fino as sombras viram um risco duplicado.

     'foil'   — traço na cor de destaque, como hot stamping. Para as paletas
     sem flor, onde linha arquitetônica cabe melhor que botânica.

     Para arte de verdade (aquarela botânica comprada), use o campo
     "Ornamento próprio" no estúdio. Ver README. */

  peonia:    { tipo:'relevo', svg:'<g><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(0.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(45.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(90.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(135.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(180.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(225.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(270.0 100 54)"/><path d="M100 54 C 90 43, 88 25, 100 15 C 112 25, 110 43, 100 54 Z" transform="rotate(315.0 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(25.0 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(76.4 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(127.9 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(179.3 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(230.7 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(282.1 100 54)"/><path d="M100 54 C 93 46, 92 32, 100 24 C 108 32, 107 46, 100 54 Z" transform="rotate(333.6 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(12.0 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(72.0 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(132.0 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(192.0 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(252.0 100 54)"/><path d="M100 54 C 96 49, 95 40, 100 35 C 105 40, 104 49, 100 54 Z" transform="rotate(312.0 100 54)"/><circle cx="100" cy="50" r="4.6"/><path d="M100 58 C 99 72, 99 86, 100 99" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M99 70 C 88 66, 78 70, 73 79 C 84 84, 94 80, 99 70 Z"/><path d="M101 70 C 112 66, 122 70, 127 79 C 116 84, 106 80, 101 70 Z"/><path d="M99 85 C 90 82, 82 85, 78 92 C 87 96, 95 93, 99 85 Z"/><path d="M101 85 C 110 82, 118 85, 122 92 C 113 96, 105 93, 101 85 Z"/></g>' },
  eucalipto: { tipo:'relevo', svg:'<g><path d="M100 16 C 101 44, 101 74, 100 100" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/><ellipse cx="84" cy="30" rx="11" ry="8.1" transform="rotate(-34 84 30)"/><ellipse cx="116" cy="40" rx="11" ry="8.1" transform="rotate(34 116 40)"/><ellipse cx="85" cy="48" rx="10" ry="7.4" transform="rotate(-32 85 48)"/><ellipse cx="115" cy="58" rx="10" ry="7.4" transform="rotate(32 115 58)"/><ellipse cx="87" cy="66" rx="9" ry="6.7" transform="rotate(-30 87 66)"/><ellipse cx="113" cy="75" rx="9" ry="6.7" transform="rotate(30 113 75)"/><ellipse cx="90" cy="84" rx="8" ry="5.9" transform="rotate(-26 90 84)"/><ellipse cx="110" cy="92" rx="8" ry="5.9" transform="rotate(26 110 92)"/><ellipse cx="100" cy="14" rx="5" ry="7.5"/></g>' },
  oliveira:  { tipo:'relevo', svg:'<g><path d="M72 100 C 76 72, 92 42, 118 26" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M80 80 C 76 73, 76 65, 80 59 C 84 65, 84 73, 80 80 Z" transform="rotate(-48 80 80)"/><path d="M86 66 C 82 59, 82 51, 86 45 C 90 51, 90 59, 86 66 Z" transform="rotate(-42 86 66)"/><path d="M94 52 C 90 45, 90 37, 94 31 C 98 37, 98 45, 94 52 Z" transform="rotate(-34 94 52)"/><path d="M104 38 C 100 31, 100 23, 104 17 C 108 23, 108 31, 104 38 Z" transform="rotate(-24 104 38)"/><path d="M92 84 C 88 77, 88 69, 92 63 C 96 69, 96 77, 92 84 Z" transform="rotate(38 92 84)"/><path d="M99 70 C 95 63, 95 55, 99 49 C 103 55, 103 63, 99 70 Z" transform="rotate(32 99 70)"/><path d="M107 56 C 103 49, 103 41, 107 35 C 111 41, 111 49, 107 56 Z" transform="rotate(24 107 56)"/><path d="M116 42 C 112 35, 112 27, 116 21 C 120 27, 120 35, 116 42 Z" transform="rotate(16 116 42)"/><ellipse cx="88" cy="92" rx="3.6" ry="4.8" transform="rotate(14 88 92)"/><ellipse cx="101" cy="64" rx="3.6" ry="4.8" transform="rotate(20 101 64)"/><ellipse cx="115" cy="38" rx="3.6" ry="4.8" transform="rotate(26 115 38)"/></g>' },
  arco:      { tipo:'foil',   svg:'<g fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"><path d="M74 102V56a26 26 0 0 1 52 0v46"/><path d="M82 102V56a18 18 0 0 1 36 0v46"/><path d="M100 38v64M68 102h64"/><path d="M100 20v12M93 27l7-7 7 7"/><circle cx="100" cy="52" r="5"/><path d="M88 76h24M90 88h20"/></g>' }
};
