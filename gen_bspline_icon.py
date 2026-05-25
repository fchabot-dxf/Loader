"""
Generate b-spline-generator-web-addin.js icon.
10x12 terrain mesh, isometric CORNER VIEW (viewer from SE):
- Isometric projection: X_COL=1.75, Y_COL=2.0, X_ROW=-1.75, Y_ROW=2.0
- Height field (sine-wave hills), Z_SCALE=3.0
- Normal-based Phong shading (ambient + diffuse + specular)
- Painter algorithm: sort by row+col ascending = far first for SE viewer
"""
import math

COLS = 10
ROWS = 12

X_COL =  1.75
Y_COL =  2.00
X_ROW = -1.75
Y_ROW =  2.00

# Centre diamond in terrain viewport (x: 21..64, centre=42.5)
# centre_x = ORIGIN_X + (COLS*X_COL + ROWS*X_ROW)/2 = ORIGIN_X - 1.75
ORIGIN_X = 44.25
ORIGIN_Y = 11.0   # NW corner (row=0,col=0) — just below title bar

Z_SCALE = 1.8     # screen px per terrain height unit

MAX_H = 4.8

def h3d(row, col):
    r, c = row / ROWS, col / COLS
    v = (0.62 * math.sin(c * math.pi)            * math.sin(r * math.pi * 0.85)  +
         0.22 * math.sin(c * math.pi * 2.6)       * math.sin(r * math.pi * 1.55) +
         0.16 * math.sin(c * math.pi * 1.3 + 0.9) * math.sin(r * math.pi * 2.3))
    return max(0.0, v) * MAX_H

def screen(row, col):
    x = ORIGIN_X + col * X_COL + row * X_ROW
    y = ORIGIN_Y + col * Y_COL + row * Y_ROW - h3d(row, col) * Z_SCALE
    return x, y

H   = [[h3d(r, c)    for c in range(COLS + 1)] for r in range(ROWS + 1)]
PTS = [[screen(r, c) for c in range(COLS + 1)] for r in range(ROWS + 1)]

def normalize(v):
    l = math.sqrt(sum(x*x for x in v))
    return tuple(x/l for x in v) if l > 0 else v

LIGHT = normalize((-0.50,  0.75, -0.45))
VIEW  = normalize(( 0.60,  0.60, -0.50))

def face_brightness(row, col):
    h00 = H[row  ][col  ]; h01 = H[row  ][col+1]
    h10 = H[row+1][col  ]; h11 = H[row+1][col+1]
    dc = ((h01 - h00) + (h11 - h10)) * 0.5
    dr = ((h10 - h00) + (h11 - h01)) * 0.5
    N = normalize((-dc * 1.9, 1.0, -dr * 1.4))
    lx, ly, lz = LIGHT
    diffuse = max(0.0, N[0]*lx + N[1]*ly + N[2]*lz)
    dot = N[0]*lx + N[1]*ly + N[2]*lz
    R = (2*dot*N[0]-lx, 2*dot*N[1]-ly, 2*dot*N[2]-lz)
    spec = max(0.0, R[0]*VIEW[0] + R[1]*VIEW[1] + R[2]*VIEW[2]) ** 14 * 0.35
    return min(1.0, 0.18 + 0.72 * diffuse + spec)

DARK      = (0x52, 0x28, 0x08)
LIGHT_COL = (0xf4, 0xe0, 0x6a)

def lerp_col(t):
    t = max(0.0, min(1.0, t))
    r = int(DARK[0] + (LIGHT_COL[0] - DARK[0]) * t)
    g = int(DARK[1] + (LIGHT_COL[1] - DARK[1]) * t)
    b = int(DARK[2] + (LIGHT_COL[2] - DARK[2]) * t)
    return f"#{r:02x}{g:02x}{b:02x}"

def fmt(x, y): return f"{x:.2f},{y:.2f}"

elems = []

order = sorted([(r, c) for r in range(ROWS) for c in range(COLS)],
               key=lambda rc: rc[0] + rc[1])

for row, col in order:
    p00 = PTS[row  ][col  ]
    p01 = PTS[row  ][col+1]
    p11 = PTS[row+1][col+1]
    p10 = PTS[row+1][col  ]
    color = lerp_col(face_brightness(row, col))
    pts = f"{fmt(*p00)} {fmt(*p01)} {fmt(*p11)} {fmt(*p10)}"
    elems.append(f'    <polygon points="{pts}" fill="{color}"/>')

for row in range(ROWS + 1):
    pts = " ".join(fmt(*PTS[row][c]) for c in range(COLS + 1))
    elems.append(f'    <polyline points="{pts}" fill="none" stroke="#301000" stroke-width="0.12" opacity="0.30"/>')

for col in range(COLS + 1):
    pts = " ".join(fmt(*PTS[r][col]) for r in range(ROWS + 1))
    elems.append(f'    <polyline points="{pts}" fill="none" stroke="#301000" stroke-width="0.12" opacity="0.30"/>')

terrain = "\n".join(elems)

JS = f'''Fred.ICONS["b-spline-generator-web-addin"] = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <!-- App window chrome -->
    <rect width="64" height="64" rx="4" fill="#f5f5f5"/>
    <!-- Terrain viewport bg -->
    <rect x="21" y="9" width="43" height="55" fill="#faf7ee"/>
    <!-- Terrain mesh (isometric corner view, viewer from SE) -->
{terrain}
    <!-- Title bar overlay -->
    <rect width="64" height="9" rx="4" fill="#e8e8e8"/>
    <rect y="5" width="64" height="4" fill="#e8e8e8"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="35" y="7" text-anchor="middle" font-size="3.5" fill="#1a6aff" font-family="sans-serif" font-weight="bold">B-SPLINE GENERATOR</text>
    <!-- Left panel overlay -->
    <rect x="0" y="9" width="21" height="55" fill="#fff" stroke="#e0e0e0" stroke-width="0.5"/>
    <rect x="0" y="57" width="21" height="7" rx="4" fill="#fff"/>
    <rect x="1" y="11" width="19" height="5" rx="2" fill="#28c940"/>
    <text x="10.5" y="15" text-anchor="middle" font-size="2.5" fill="#fff" font-family="sans-serif">Generate New Seed</text>
    <rect x="2" y="18" width="8" height="3.5" rx="1" fill="#fff" stroke="#bbb" stroke-width="0.5"/>
    <text x="6" y="21" text-anchor="middle" font-size="2.3" fill="#333" font-family="sans-serif">Undo</text>
    <rect x="11" y="18" width="8" height="3.5" rx="1" fill="#fff" stroke="#bbb" stroke-width="0.5"/>
    <text x="15" y="21" text-anchor="middle" font-size="2.3" fill="#333" font-family="sans-serif">Redo</text>
    <text x="2" y="27" font-size="2.3" fill="#999" font-family="sans-serif" font-weight="bold">DIMENSIONS</text>
    <text x="2" y="32" font-size="2.3" fill="#333" font-family="sans-serif">Width  8</text>
    <text x="2" y="36.5" font-size="2.3" fill="#333" font-family="sans-serif">Height  13</text>
    <text x="2" y="41" font-size="2.3" fill="#333" font-family="sans-serif">Depth  1.5</text>
    <text x="2" y="49" font-size="2.3" fill="#555" font-family="sans-serif">&#9658; SEED</text>
    <text x="2" y="53" font-size="2.3" fill="#555" font-family="sans-serif">&#9658; SKELETON</text>
    <text x="2" y="57" font-size="2.3" fill="#555" font-family="sans-serif">&#9658; FILTER</text>
  </svg>`;
'''

out = r'C:\Users\danse\APPS\Loader\js\icons\b-spline-generator-web-addin.js'
with open(out, 'w', encoding='utf-8') as f:
    f.write(JS)

print(f"Done - {len(elems)} SVG elements, {len(JS):,} bytes")

