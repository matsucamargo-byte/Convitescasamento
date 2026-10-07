/* =============================================================
   NUTTI-STYLE INVITE ENGINE — Catálogo de templates
   Cada template é só DADO (paleta + fontes + motivo + envelope).
   Criar um convite novo = preencher formulário. Custo de IA: zero.
   ============================================================= */

window.TEMPLATES = [
  {
    id: 'perola',
    nome: 'Pérola',
    tagline: 'Marfim e ouro · relevo floral · o clássico que mais vende',
    envelope: 'flap',          // flap | peel
    seal: 'wax-gold',
    motivo: 'floral-denso',
    fonts: { display: 'Cormorant Garamond', body: 'Jost', script: 'Pinyon Script' },
    vars: {
      '--paper'      : '#f7f2e9',
      '--paper-2'    : '#efe6d6',
      '--ink'        : '#4a4136',
      '--ink-soft'   : '#8a7d6b',
      '--accent'     : '#b99256',
      '--accent-2'   : '#e3cfa4',
      '--seal'       : '#c9a24a',
      '--seal-ink'   : '#6d5220',
      '--glow'       : '#ffdfa0',
      '--emboss-lo'  : 'rgba(118,96,58,.40)',
      '--emboss-hi'  : 'rgba(255,255,255,.95)'
    }
  },
  {
    id: 'serenity',
    nome: 'Serenity',
    tagline: 'Azul sereno e lacre branco · a paleta queridinha de 2027',
    envelope: 'flap',
    seal: 'wax-white',
    motivo: 'floral-leve',
    fonts: { display: 'Cormorant Garamond', body: 'Jost', script: 'Pinyon Script' },
    vars: {
      '--paper'      : '#9fb8d8',
      '--paper-2'    : '#8aa6cb',
      '--ink'        : '#213a5c',
      '--ink-soft'   : '#48648c',
      '--accent'     : '#f2f6fb',
      '--accent-2'   : '#cddcef',
      '--seal'       : '#f4f7fb',
      '--seal-ink'   : '#5a7ba6',
      '--glow'       : '#ffffff',
      '--emboss-lo'  : 'rgba(26,52,88,.42)',
      '--emboss-hi'  : 'rgba(255,255,255,.9)'
    }
  },
  {
    id: 'toscana',
    nome: 'Toscana',
    tagline: 'Aquarela toscana · verde oliva e sol · destination wedding',
    envelope: 'peel',
    seal: 'wax-olive',
    motivo: 'botanico',
    fonts: { display: 'Cormorant Garamond', body: 'Jost', script: 'Italianno' },
    vars: {
      '--paper'      : '#f3efe2',
      '--paper-2'    : '#e4dcc4',
      '--ink'        : '#44502f',
      '--ink-soft'   : '#7d8a63',
      '--accent'     : '#8a9a5b',
      '--accent-2'   : '#cbd3a8',
      '--seal'       : '#7c8a4e',
      '--seal-ink'   : '#f3efe2',
      '--glow'       : '#fff2c9',
      '--emboss-lo'  : 'rgba(78,88,46,.40)',
      '--emboss-hi'  : 'rgba(255,255,255,.9)'
    }
  },
  {
    id: 'esmeralda',
    nome: 'Esmeralda',
    tagline: 'Verde profundo e ouro · sofisticação noturna',
    envelope: 'flap',
    seal: 'wax-gold',
    motivo: 'art-deco',
    fonts: { display: 'Cormorant Garamond', body: 'Jost', script: 'Pinyon Script' },
    vars: {
      '--paper'      : '#14321f',
      '--paper-2'    : '#0d2416',
      '--ink'        : '#f0e7d2',
      '--ink-soft'   : '#b9c6b0',
      '--accent'     : '#cfa75f',
      '--accent-2'   : '#8f7436',
      '--seal'       : '#c9a24a',
      '--seal-ink'   : '#2a1f08',
      '--glow'       : '#ffdfa0',
      '--emboss-lo'  : 'rgba(0,0,0,.45)',
      '--emboss-hi'  : 'rgba(207,167,95,.35)'
    }
  },
  {
    id: 'blush',
    nome: 'Blush',
    tagline: 'Rosé e tassel dourado · romântico e feminino',
    envelope: 'flap',
    seal: 'tassel',
    motivo: 'floral-leve',
    fonts: { display: 'Cormorant Garamond', body: 'Jost', script: 'Pinyon Script' },
    vars: {
      '--paper'      : '#f7e6e0',
      '--paper-2'    : '#eed3cb',
      '--ink'        : '#6b4a46',
      '--ink-soft'   : '#a3827c',
      '--accent'     : '#c08f7a',
      '--accent-2'   : '#e7c9ba',
      '--seal'       : '#d9a98c',
      '--seal-ink'   : '#5c3b33',
      '--glow'       : '#ffe9dd',
      '--emboss-lo'  : 'rgba(146,98,84,.38)',
      '--emboss-hi'  : 'rgba(255,255,255,.95)'
    }
  },
  {
    id: 'noir',
    nome: 'Noir',
    tagline: 'Preto e ouro · minimalista, moderno, ninguém faz',
    envelope: 'flap',
    seal: 'wax-gold',
    motivo: 'art-deco',
    fonts: { display: 'Cormorant Garamond', body: 'Jost', script: 'Pinyon Script' },
    vars: {
      '--paper'      : '#15141a',
      '--paper-2'    : '#0b0a0e',
      '--ink'        : '#efe9dd',
      '--ink-soft'   : '#a39c90',
      '--accent'     : '#c9a24a',
      '--accent-2'   : '#8a6f2e',
      '--seal'       : '#c9a24a',
      '--seal-ink'   : '#1a1407',
      '--glow'       : '#ffdfa0',
      '--emboss-lo'  : 'rgba(0,0,0,.6)',
      '--emboss-hi'  : 'rgba(201,162,74,.3)'
    }
  }
];

/* Motivos SVG — desenhados uma vez, reaproveitados em todos os templates.
   O efeito de "relevo" vem do filtro CSS, não da arte. */
window.MOTIVOS = {
  'floral-denso': `
    <g>
      <path d="M100 18c7 0 13 6 13 13s-6 13-13 13-13-6-13-13 6-13 13-13z"/>
      <path d="M100 14c4 0 7 5 7 11s-3 11-7 11-7-5-7-11 3-11 7-11z" opacity=".8"/>
      <ellipse cx="78" cy="30" rx="13" ry="7" transform="rotate(-28 78 30)"/>
      <ellipse cx="122" cy="30" rx="13" ry="7" transform="rotate(28 122 30)"/>
      <ellipse cx="72" cy="48" rx="12" ry="6" transform="rotate(-55 72 48)"/>
      <ellipse cx="128" cy="48" rx="12" ry="6" transform="rotate(55 128 48)"/>
      <path d="M100 44c0 16-2 30-6 44M100 44c0 16 2 30 6 44" stroke-width="1.6" fill="none"/>
      <ellipse cx="88" cy="62" rx="9" ry="4.5" transform="rotate(-35 88 62)"/>
      <ellipse cx="112" cy="62" rx="9" ry="4.5" transform="rotate(35 112 62)"/>
      <ellipse cx="84" cy="78" rx="8" ry="4" transform="rotate(-42 84 78)"/>
      <ellipse cx="116" cy="78" rx="8" ry="4" transform="rotate(42 116 78)"/>
      <circle cx="68" cy="20" r="4.5"/><circle cx="132" cy="20" r="4.5"/>
      <circle cx="58" cy="40" r="3.5"/><circle cx="142" cy="40" r="3.5"/>
      <circle cx="94" cy="92" r="3"/><circle cx="106" cy="92" r="3"/>
    </g>`,
  'floral-leve': `
    <g>
      <path d="M100 26c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z"/>
      <ellipse cx="84" cy="36" rx="11" ry="5" transform="rotate(-30 84 36)"/>
      <ellipse cx="116" cy="36" rx="11" ry="5" transform="rotate(30 116 36)"/>
      <path d="M100 44c0 14-3 26-8 36M100 44c0 14 3 26 8 36" stroke-width="1.4" fill="none"/>
      <ellipse cx="90" cy="60" rx="7" ry="3.4" transform="rotate(-38 90 60)"/>
      <ellipse cx="110" cy="60" rx="7" ry="3.4" transform="rotate(38 110 60)"/>
      <circle cx="76" cy="24" r="3.4"/><circle cx="124" cy="24" r="3.4"/>
    </g>`,
  'botanico': `
    <g>
      <path d="M100 16v78" stroke-width="1.6" fill="none"/>
      <ellipse cx="88" cy="28" rx="12" ry="5" transform="rotate(-32 88 28)"/>
      <ellipse cx="112" cy="34" rx="12" ry="5" transform="rotate(32 112 34)"/>
      <ellipse cx="86" cy="46" rx="11" ry="4.6" transform="rotate(-32 86 46)"/>
      <ellipse cx="114" cy="52" rx="11" ry="4.6" transform="rotate(32 114 52)"/>
      <ellipse cx="89" cy="64" rx="9" ry="4" transform="rotate(-32 89 64)"/>
      <ellipse cx="111" cy="70" rx="9" ry="4" transform="rotate(32 111 70)"/>
      <ellipse cx="100" cy="86" rx="6" ry="9"/>
    </g>`,
  'art-deco': `
    <g fill="none" stroke-width="1.5">
      <path d="M100 12l34 34-34 34-34-34z"/>
      <path d="M100 24l22 22-22 22-22-22z"/>
      <path d="M100 36l10 10-10 10-10-10z" fill="currentColor"/>
      <path d="M62 46h-28M138 46h28" stroke-width="1"/>
      <path d="M100 82v22M86 94h28" stroke-width="1"/>
      <circle cx="100" cy="104" r="3" fill="currentColor" stroke="none"/>
    </g>`
};
