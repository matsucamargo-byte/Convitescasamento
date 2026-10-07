#!/usr/bin/env bash
# Junta engine/* dentro de estudio.src.html e gera estudio.html (arquivo único,
# abre com dois cliques, funciona offline). Rode depois de mexer em engine/.
set -euo pipefail
cd "$(dirname "$0")"

python3 - <<'PY'
import re, pathlib
src = pathlib.Path('estudio.src.html').read_text(encoding='utf-8')

def inject(m):
    caminho = m.group(1)
    return pathlib.Path(caminho).read_text(encoding='utf-8')

out = re.sub(r'<!--INJECT:([^>]+?)-->', inject, src)
pathlib.Path('estudio.html').write_text(out, encoding='utf-8')
print(f'estudio.html gerado — {len(out)/1024:.0f} KB')
PY
