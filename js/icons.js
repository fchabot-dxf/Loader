// App-specific window-chrome thumbnail icons — 64×64 SVG each.
// Faithfully reproduces actual app UI based on real screenshots.
// Keyed by exact app id from apps.json.

Fred.ICONS = {

  // G-code code editor: dark bg, line numbers, syntax-coloured G-code, status bar
  "DDCS-Studio": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <!-- Editor background -->
    <rect width="64" height="64" rx="6" fill="#1e1e2e"/>
    <!-- Title bar -->
    <rect width="64" height="10" rx="6" fill="#252040"/>
    <rect y="6" width="64" height="4" fill="#252040"/>
    <text x="32" y="7.5" text-anchor="middle" font-size="3" fill="#6a8ac0" font-family="monospace">program.nc</text>
    <!-- Line-number gutter -->
    <rect x="0" y="10" width="9" height="47" fill="#181824"/>
    <line x1="9" y1="10" x2="9" y2="57" stroke="#2a2a42" stroke-width="0.5"/>
    <!-- Line 1: G21 -->
    <text x="1.5" y="16.5" font-size="2.8" fill="#3d4466" font-family="monospace">1</text>
    <text x="11" y="16.5" font-size="2.8" fill="#569cd6" font-family="monospace">G21</text>
    <!-- Line 2: G90 -->
    <text x="1.5" y="21" font-size="2.8" fill="#3d4466" font-family="monospace">2</text>
    <text x="11" y="21" font-size="2.8" fill="#569cd6" font-family="monospace">G90</text>
    <!-- Line 3: M3 S1000 -->
    <text x="1.5" y="25.5" font-size="2.8" fill="#3d4466" font-family="monospace">3</text>
    <text x="11" y="25.5" font-size="2.8" fill="#c586c0" font-family="monospace">M3</text>
    <text x="18.5" y="25.5" font-size="2.8" fill="#9cdcfe" font-family="monospace">S1000</text>
    <!-- Line 4: G0 X0 Y0  (highlighted/cursor line) -->
    <rect x="9" y="27.2" width="55" height="4.5" fill="rgba(100,100,200,0.13)"/>
    <text x="1.5" y="30.5" font-size="2.8" fill="#3d4466" font-family="monospace">4</text>
    <text x="11" y="30.5" font-size="2.8" fill="#569cd6" font-family="monospace">G0</text>
    <text x="17.5" y="30.5" font-size="2.8" fill="#9cdcfe" font-family="monospace">X0 Y0</text>
    <!-- Line 5: G1 F300 Z-2 -->
    <text x="1.5" y="35" font-size="2.8" fill="#3d4466" font-family="monospace">5</text>
    <text x="11" y="35" font-size="2.8" fill="#569cd6" font-family="monospace">G1</text>
    <text x="17.5" y="35" font-size="2.8" fill="#9cdcfe" font-family="monospace">F300 Z-2</text>
    <!-- Line 6: G1 X50 Y50 -->
    <text x="1.5" y="39.5" font-size="2.8" fill="#3d4466" font-family="monospace">6</text>
    <text x="11" y="39.5" font-size="2.8" fill="#569cd6" font-family="monospace">G1</text>
    <text x="17.5" y="39.5" font-size="2.8" fill="#9cdcfe" font-family="monospace">X50 Y50</text>
    <!-- Line 7: comment -->
    <text x="1.5" y="44" font-size="2.8" fill="#3d4466" font-family="monospace">7</text>
    <text x="11" y="44" font-size="2.8" fill="#6a9955" font-family="monospace">; tool change</text>
    <!-- Line 8: M6 T2 -->
    <text x="1.5" y="48.5" font-size="2.8" fill="#3d4466" font-family="monospace">8</text>
    <text x="11" y="48.5" font-size="2.8" fill="#c586c0" font-family="monospace">M6</text>
    <text x="18.5" y="48.5" font-size="2.8" fill="#9cdcfe" font-family="monospace">T2</text>
    <!-- Line 9: G0 Z5 -->
    <text x="1.5" y="53" font-size="2.8" fill="#3d4466" font-family="monospace">9</text>
    <text x="11" y="53" font-size="2.8" fill="#569cd6" font-family="monospace">G0</text>
    <text x="17.5" y="53" font-size="2.8" fill="#9cdcfe" font-family="monospace">Z5</text>
    <!-- Status bar -->
    <rect x="0" y="57" width="64" height="7" fill="#181824"/>
    <rect x="0" y="61" width="64" height="3" rx="3" fill="#181824"/>
    <rect x="1" y="58.5" width="13" height="3.5" rx="1.5" fill="#0078d4"/>
    <text x="7.5" y="61.5" text-anchor="middle" font-size="2.3" fill="#fff" font-family="sans-serif">DDCS</text>
    <text x="17" y="61.5" font-size="2.2" fill="#569cd6" font-family="monospace">G-Code · Ln 4</text>
  </svg>`,

  // 3D terrain mesh - SVG polygon perspective grid, warm sandy palette
  "b-spline-generator-web-addin": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <!-- App window chrome -->
    <rect width="64" height="64" rx="4" fill="#f5f5f5"/>
    <!-- Terrain viewport bg + sky -->
    <rect x="21" y="9" width="43" height="55" fill="#faf7ee"/>
    <rect x="21" y="9" width="43" height="8" fill="#ddeaf8"/>
    <!-- Terrain faces back-to-front -->
    <polygon points="28,20 33.8,18 32.75,26.5 26.25,28.5" fill="#9e8040"/>
    <polygon points="33.8,18 39.6,16 39.25,22.5 32.75,26.5" fill="#b89844"/>
    <polygon points="39.6,16 45.4,14 45.75,20.5 39.25,22.5" fill="#d4b455"/>
    <polygon points="45.4,14 51.2,18 52.25,24.5 45.75,20.5" fill="#c8a84b"/>
    <polygon points="51.2,18 57,20 58.75,30.5 52.25,24.5" fill="#9e8040"/>
    <polygon points="26.25,28.5 32.75,26.5 31.7,37 24.5,41" fill="#a88a42"/>
    <polygon points="32.75,26.5 39.25,22.5 38.9,29 31.7,37" fill="#d4b455"/>
    <polygon points="39.25,22.5 45.75,20.5 46.1,31 38.9,29" fill="#e8cc68"/>
    <polygon points="45.75,20.5 52.25,24.5 53.3,37 46.1,31" fill="#cdb050"/>
    <polygon points="52.25,24.5 58.75,30.5 60.5,39 53.3,37" fill="#a88a42"/>
    <polygon points="24.5,41 31.7,37 30.65,45.5 22.75,49.5" fill="#a88a42"/>
    <polygon points="31.7,37 38.9,29 38.55,41.5 30.65,45.5" fill="#d4b455"/>
    <polygon points="38.9,29 46.1,31 46.45,43.5 38.55,41.5" fill="#e8cc68"/>
    <polygon points="46.1,31 53.3,37 54.35,47.5 46.45,43.5" fill="#c8a84b"/>
    <polygon points="53.3,37 60.5,39 62.25,51.5 54.35,47.5" fill="#a88a42"/>
    <polygon points="22.75,49.5 30.65,45.5 29.6,60 21,62" fill="#a88a42"/>
    <polygon points="30.65,45.5 38.55,41.5 38.2,56 29.6,60" fill="#c8a84b"/>
    <polygon points="38.55,41.5 46.45,43.5 46.8,58 38.2,56" fill="#d4b455"/>
    <polygon points="46.45,43.5 54.35,47.5 55.4,60 46.8,58" fill="#b89844"/>
    <polygon points="54.35,47.5 62.25,51.5 64,62 55.4,60" fill="#9a7a3a"/>
    <!-- Grid lines -->
    <polyline points="21,62 29.6,60 38.2,56 46.8,58 55.4,60 64,62" fill="none" stroke="#6a5020" stroke-width="0.4"/>
    <polyline points="22.75,49.5 30.65,45.5 38.55,41.5 46.45,43.5 54.35,47.5 62.25,51.5" fill="none" stroke="#6a5020" stroke-width="0.4"/>
    <polyline points="24.5,41 31.7,37 38.9,29 46.1,31 53.3,37 60.5,39" fill="none" stroke="#6a5020" stroke-width="0.4"/>
    <polyline points="26.25,28.5 32.75,26.5 39.25,22.5 45.75,20.5 52.25,24.5 58.75,30.5" fill="none" stroke="#6a5020" stroke-width="0.4"/>
    <polyline points="28,20 33.8,18 39.6,16 45.4,14 51.2,18 57,20" fill="none" stroke="#6a5020" stroke-width="0.4"/>
    <polyline points="21,62 22.75,49.5 24.5,41 26.25,28.5 28,20" fill="none" stroke="#6a5020" stroke-width="0.4"/>
    <polyline points="29.6,60 30.65,45.5 31.7,37 32.75,26.5 33.8,18" fill="none" stroke="#6a5020" stroke-width="0.4"/>
    <polyline points="38.2,56 38.55,41.5 38.9,29 39.25,22.5 39.6,16" fill="none" stroke="#6a5020" stroke-width="0.4"/>
    <polyline points="46.8,58 46.45,43.5 46.1,31 45.75,20.5 45.4,14" fill="none" stroke="#6a5020" stroke-width="0.4"/>
    <polyline points="55.4,60 54.35,47.5 53.3,37 52.25,24.5 51.2,18" fill="none" stroke="#6a5020" stroke-width="0.4"/>
    <polyline points="64,62 62.25,51.5 60.5,39 58.75,30.5 57,20" fill="none" stroke="#6a5020" stroke-width="0.4"/>
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
  </svg>`,

    // Left panel (tools + sliders) + white canvas with symmetric SVG path shape
  "SVG creator": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#f8f8f8"/>
    <rect width="64" height="9" rx="4" fill="#f0f0f0"/>
    <rect y="5" width="64" height="4" fill="#f0f0f0"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="32" y="7" text-anchor="middle" font-size="4" fill="#333" font-family="sans-serif" font-weight="bold">SVG Path Creator</text>
    <rect x="1" y="10" width="5" height="4" rx="1" fill="#1a6aff"/>
    <text x="3.5" y="13.5" text-anchor="middle" font-size="2.5" fill="#fff" font-family="sans-serif">Gen</text>
    <rect x="7" y="10" width="8" height="4" rx="1" fill="#28c940"/>
    <text x="11" y="13.5" text-anchor="middle" font-size="2.5" fill="#fff" font-family="sans-serif">Save SVG</text>
    <rect x="16" y="10" width="6" height="4" rx="1" fill="#ddd"/>
    <text x="19" y="13.5" text-anchor="middle" font-size="2.5" fill="#333" font-family="sans-serif">Undo</text>
    <rect x="0" y="15" width="26" height="49" fill="#fff" stroke="#ddd" stroke-width="0.5"/>
    <rect x="0" y="57" width="26" height="7" rx="4" fill="#fff"/>
    <text x="2" y="20" font-size="2.5" fill="#555" font-family="sans-serif" font-weight="bold">DRAW TOOLS</text>
    <rect x="2" y="21" width="7" height="4" rx="1" fill="#1a6aff"/>
    <text x="5.5" y="24.5" text-anchor="middle" font-size="2.5" fill="#fff" font-family="sans-serif">Line</text>
    <rect x="10" y="21" width="5" height="4" rx="1" fill="#eee" stroke="#ccc" stroke-width="0.4"/>
    <text x="12.5" y="24.5" text-anchor="middle" font-size="2.5" fill="#333" font-family="sans-serif">Arc</text>
    <rect x="16" y="21" width="7" height="4" rx="1" fill="#eee" stroke="#ccc" stroke-width="0.4"/>
    <text x="19.5" y="24.5" text-anchor="middle" font-size="2.5" fill="#333" font-family="sans-serif">Node</text>
    <circle cx="4" cy="31" r="2" fill="#111"/>
    <circle cx="9" cy="31" r="2" fill="#e63946"/>
    <circle cx="14" cy="31" r="2" fill="#1a6aff"/>
    <circle cx="19" cy="31" r="2" fill="#f8961e"/>
    <circle cx="24" cy="31" r="2" fill="#fff" stroke="#bbb" stroke-width="0.5"/>
    <text x="2" y="37" font-size="2.3" fill="#666" font-family="sans-serif">PATH</text>
    <rect x="2" y="38.5" width="22" height="1.5" rx="0.8" fill="#ddd"/>
    <rect x="2" y="38.5" width="4" height="1.5" rx="0.8" fill="#1a6aff"/>
    <text x="2" y="43" font-size="2.3" fill="#666" font-family="sans-serif">Keypoints: 2</text>
    <rect x="2" y="44.5" width="22" height="1.5" rx="0.8" fill="#ddd"/>
    <rect x="2" y="44.5" width="10" height="1.5" rx="0.8" fill="#1a6aff"/>
    <text x="2" y="49" font-size="2.3" fill="#666" font-family="sans-serif">Length: 75</text>
    <rect x="2" y="50.5" width="22" height="1.5" rx="0.8" fill="#ddd"/>
    <rect x="2" y="50.5" width="18" height="1.5" rx="0.8" fill="#1a6aff"/>
    <rect x="26" y="9" width="38" height="55" fill="#fff" stroke="#e8e8e8" stroke-width="0.5"/>
    <rect x="26" y="57" width="38" height="7" rx="4" fill="#fff"/>
    <!-- Symmetric body/vase shape with control points -->
    <path d="M45,14 C40,17 37,22 37,29 C37,35 38,37 40,38 C42,39 44,38 45,37 C46,38 48,39 50,38 C52,37 53,35 53,29 C53,22 50,17 45,14 Z" fill="rgba(30,100,255,0.1)" stroke="#4488ff" stroke-width="1"/>
    <path d="M45,37 C43,40 41,44 42,49 C43,54 44,56 45,57 C46,56 47,54 48,49 C49,44 47,40 45,37 Z" fill="rgba(30,100,255,0.1)" stroke="#4488ff" stroke-width="1"/>
    <!-- Control points (diamond handles) -->
    <rect x="43.5" y="12.5" width="3" height="3" transform="rotate(45,45,14)" fill="#fff" stroke="#4488ff" stroke-width="0.8"/>
    <circle cx="37" cy="29" r="2" fill="rgba(30,100,255,0.5)" stroke="#4488ff" stroke-width="0.8"/>
    <circle cx="53" cy="29" r="2" fill="rgba(30,100,255,0.5)" stroke="#4488ff" stroke-width="0.8"/>
    <rect x="43.5" y="55.5" width="3" height="3" transform="rotate(45,45,57)" fill="#fff" stroke="#4488ff" stroke-width="0.8"/>
    <!-- Symmetry axis -->
    <line x1="45" y1="10" x2="45" y2="60" stroke="#ffaa00" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.6"/>
  </svg>`,

  // White grid canvas, blue triangle center, input boxes at vertices, properties panel TL
  "geometric CALCULATOR": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#fff"/>
    <rect width="64" height="9" rx="4" fill="#f5f5f5"/>
    <rect y="5" width="64" height="4" fill="#f5f5f5"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <rect x="1" y="1" width="7" height="5" rx="1" fill="#e53935"/>
    <text x="4.5" y="5" text-anchor="middle" font-size="3" fill="#fff" font-family="sans-serif">Reset</text>
    <rect x="22" y="1.5" width="10" height="5" rx="2" fill="#fff" stroke="#1a6aff" stroke-width="0.6"/>
    <text x="27" y="5.5" text-anchor="middle" font-size="3" fill="#1a6aff" font-family="sans-serif">Triangle</text>
    <rect x="33" y="1.5" width="10" height="5" rx="2" fill="#fff"/>
    <text x="38" y="5.5" text-anchor="middle" font-size="3" fill="#888" font-family="sans-serif">Rectangle</text>
    <rect x="44" y="1.5" width="10" height="5" rx="2" fill="#fff"/>
    <text x="49" y="5.5" text-anchor="middle" font-size="3" fill="#888" font-family="sans-serif">Polygon</text>
    <line x1="0" y1="15" x2="64" y2="15" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="0" y1="22" x2="64" y2="22" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="0" y1="29" x2="64" y2="29" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="0" y1="36" x2="64" y2="36" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="0" y1="43" x2="64" y2="43" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="0" y1="50" x2="64" y2="50" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="0" y1="57" x2="64" y2="57" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="9" y1="9" x2="9" y2="64" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="18" y1="9" x2="18" y2="64" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="27" y1="9" x2="27" y2="64" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="36" y1="9" x2="36" y2="64" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="45" y1="9" x2="45" y2="64" stroke="#e8eaf0" stroke-width="0.4"/>
    <line x1="54" y1="9" x2="54" y2="64" stroke="#e8eaf0" stroke-width="0.4"/>
    <rect x="1" y="10" width="16" height="28" rx="1" fill="#fff" stroke="#dde" stroke-width="0.5"/>
    <text x="3" y="14" font-size="2.3" fill="#1a6aff" font-family="sans-serif" font-weight="bold">PROPERTIES</text>
    <text x="3" y="18" font-size="2" fill="#555" font-family="sans-serif">Side a</text><text x="15.5" y="18" text-anchor="end" font-size="2" fill="#111" font-family="sans-serif">5.0</text>
    <text x="3" y="22" font-size="2" fill="#555" font-family="sans-serif">Side b</text><text x="15.5" y="22" text-anchor="end" font-size="2" fill="#111" font-family="sans-serif">5.0</text>
    <text x="3" y="26" font-size="2" fill="#555" font-family="sans-serif">Side c</text><text x="15.5" y="26" text-anchor="end" font-size="2" fill="#111" font-family="sans-serif">6.0</text>
    <text x="3" y="30" font-size="2" fill="#555" font-family="sans-serif">Angle 1</text><text x="15.5" y="30" text-anchor="end" font-size="2" fill="#111" font-family="sans-serif">53.1°</text>
    <text x="3" y="34" font-size="2" fill="#555" font-family="sans-serif">Area</text><text x="15.5" y="34" text-anchor="end" font-size="2" fill="#111" font-family="sans-serif">12.0</text>
    <polygon points="32,14 21,47 47,47" fill="rgba(30,100,255,0.08)" stroke="#1a6aff" stroke-width="1"/>
    <circle cx="32" cy="14" r="2" fill="#fff" stroke="#1a6aff" stroke-width="0.8"/>
    <circle cx="21" cy="47" r="2" fill="#fff" stroke="#1a6aff" stroke-width="0.8"/>
    <circle cx="47" cy="47" r="2" fill="#fff" stroke="#1a6aff" stroke-width="0.8"/>
    <rect x="24" y="9" width="15" height="4" rx="1" fill="#fff" stroke="#1a6aff" stroke-width="0.6"/>
    <text x="31.5" y="12.3" text-anchor="middle" font-size="2.5" fill="#111" font-family="sans-serif">73.7 Angle3</text>
    <rect x="10" y="28" width="12" height="4" rx="1" fill="#fff" stroke="#1a6aff" stroke-width="0.6"/>
    <text x="16" y="31.3" text-anchor="middle" font-size="2.5" fill="#111" font-family="sans-serif">5.0 Side b</text>
    <rect x="42" y="28" width="12" height="4" rx="1" fill="#fff" stroke="#1a6aff" stroke-width="0.6"/>
    <text x="48" y="31.3" text-anchor="middle" font-size="2.5" fill="#111" font-family="sans-serif">5.0 Side a</text>
    <rect x="25" y="49" width="13" height="4" rx="1" fill="#fff" stroke="#1a6aff" stroke-width="0.6"/>
    <text x="31.5" y="52.3" text-anchor="middle" font-size="2.5" fill="#111" font-family="sans-serif">6.0 Side c</text>
    <rect x="1" y="58" width="9" height="4" rx="1.5" fill="#1a6aff"/>
    <text x="5.5" y="61.3" text-anchor="middle" font-size="2.3" fill="#fff" font-family="sans-serif">Decimal</text>
    <rect x="11" y="58" width="11" height="4" rx="1.5" fill="#eee"/>
    <text x="16.5" y="61.3" text-anchor="middle" font-size="2.3" fill="#555" font-family="sans-serif">Fractional</text>
    <rect x="52" y="58" width="11" height="4" rx="1.5" fill="#1a6aff"/>
    <text x="57.5" y="61.3" text-anchor="middle" font-size="2.3" fill="#fff" font-family="sans-serif">Style</text>
  </svg>`,

  // Dark navy bg, center: sage green display + AC(red)/=(orange) + gray button grid
  "calculator": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#1a2644"/>
    <rect width="64" height="9" rx="4" fill="#111d38"/>
    <rect y="5" width="64" height="4" fill="#111d38"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="39" y="7" text-anchor="middle" font-size="3.5" fill="#8090b0" font-family="sans-serif">Constr. Calc</text>
    <rect x="10" y="10" width="44" height="10" rx="2" fill="#8a9e6a"/>
    <text x="53" y="17" text-anchor="end" font-size="5" fill="#1a2644" font-family="monospace">0.0</text>
    <rect x="10" y="21" width="10" height="4" rx="1" fill="#2a3855"/>
    <text x="15" y="24.3" text-anchor="middle" font-size="2.5" fill="#8090b0" font-family="sans-serif">0.0</text>
    <rect x="21" y="21" width="10" height="4" rx="1" fill="#3a4a6a"/>
    <text x="26" y="24.3" text-anchor="middle" font-size="2.5" fill="#ccc" font-family="sans-serif">1/8</text>
    <rect x="32" y="21" width="10" height="4" rx="1" fill="#2a3855"/>
    <text x="37" y="24.3" text-anchor="middle" font-size="2.5" fill="#8090b0" font-family="sans-serif">1/16</text>
    <rect x="43" y="21" width="11" height="4" rx="1" fill="#2a3855"/>
    <text x="48.5" y="24.3" text-anchor="middle" font-size="2.5" fill="#8090b0" font-family="sans-serif">1/32</text>
    <rect x="10" y="27" width="10" height="7" rx="1.5" fill="#cc2222"/>
    <text x="15" y="32" text-anchor="middle" font-size="4.5" fill="#fff" font-family="sans-serif">AC</text>
    <rect x="21" y="27" width="10" height="7" rx="1.5" fill="#3a4a6a"/>
    <text x="26" y="32" text-anchor="middle" font-size="4.5" fill="#ccc" font-family="sans-serif">&amp;</text>
    <rect x="32" y="27" width="10" height="7" rx="1.5" fill="#3a4a6a"/>
    <text x="37" y="32" text-anchor="middle" font-size="4.5" fill="#ccc" font-family="sans-serif">/</text>
    <rect x="43" y="27" width="11" height="7" rx="1.5" fill="#3a4a6a"/>
    <text x="48.5" y="32" text-anchor="middle" font-size="4" fill="#ccc" font-family="sans-serif">⌫</text>
    <rect x="10" y="36" width="10" height="7" rx="1.5" fill="#e8e8e4"/>
    <text x="15" y="41.5" text-anchor="middle" font-size="5" fill="#1a2644" font-family="sans-serif">7</text>
    <rect x="21" y="36" width="10" height="7" rx="1.5" fill="#e8e8e4"/>
    <text x="26" y="41.5" text-anchor="middle" font-size="5" fill="#1a2644" font-family="sans-serif">8</text>
    <rect x="32" y="36" width="10" height="7" rx="1.5" fill="#e8e8e4"/>
    <text x="37" y="41.5" text-anchor="middle" font-size="5" fill="#1a2644" font-family="sans-serif">9</text>
    <rect x="43" y="36" width="11" height="7" rx="1.5" fill="#3a4a6a"/>
    <text x="48.5" y="41.5" text-anchor="middle" font-size="5" fill="#ccc" font-family="sans-serif">÷</text>
    <rect x="10" y="45" width="10" height="7" rx="1.5" fill="#e8e8e4"/>
    <text x="15" y="50.5" text-anchor="middle" font-size="5" fill="#1a2644" font-family="sans-serif">4</text>
    <rect x="21" y="45" width="10" height="7" rx="1.5" fill="#e8e8e4"/>
    <text x="26" y="50.5" text-anchor="middle" font-size="5" fill="#1a2644" font-family="sans-serif">5</text>
    <rect x="32" y="45" width="10" height="7" rx="1.5" fill="#e8e8e4"/>
    <text x="37" y="50.5" text-anchor="middle" font-size="5" fill="#1a2644" font-family="sans-serif">6</text>
    <rect x="43" y="45" width="11" height="7" rx="1.5" fill="#3a4a6a"/>
    <text x="48.5" y="50.5" text-anchor="middle" font-size="5" fill="#ccc" font-family="sans-serif">×</text>
    <rect x="10" y="54" width="10" height="8" rx="1.5" fill="#e8e8e4"/>
    <text x="15" y="59.5" text-anchor="middle" font-size="5" fill="#1a2644" font-family="sans-serif">1</text>
    <rect x="21" y="54" width="10" height="8" rx="1.5" fill="#e8e8e4"/>
    <text x="26" y="59.5" text-anchor="middle" font-size="5" fill="#1a2644" font-family="sans-serif">2</text>
    <rect x="32" y="54" width="10" height="8" rx="1.5" fill="#e8e8e4"/>
    <text x="37" y="59.5" text-anchor="middle" font-size="5" fill="#1a2644" font-family="sans-serif">3</text>
    <rect x="43" y="54" width="11" height="8" rx="1.5" fill="#3a4a6a"/>
    <text x="48.5" y="59.5" text-anchor="middle" font-size="5" fill="#ccc" font-family="sans-serif">-</text>
  </svg>`,

  // Light theme: left file panel + yellow "Send to Fusion" + gray viewport with 3D STEP part
  "step-editor": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#f0f0f0"/>
    <rect width="64" height="9" rx="4" fill="#fff"/>
    <rect y="5" width="64" height="4" fill="#fff"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="32" y="7.5" text-anchor="middle" font-size="4" fill="#333" font-family="sans-serif">STEP Editor ▲</text>
    <rect x="0" y="9" width="22" height="55" fill="#fff" stroke="#ddd" stroke-width="0.5"/>
    <rect x="0" y="57" width="22" height="7" rx="4" fill="#fff"/>
    <text x="2" y="14" font-size="2.3" fill="#999" font-family="sans-serif" font-weight="bold">FILE</text>
    <rect x="2" y="15" width="18" height="4" rx="1" fill="#f5f5f5" stroke="#ddd" stroke-width="0.5"/>
    <text x="11" y="18" text-anchor="middle" font-size="2.3" fill="#333" font-family="sans-serif">Open .stp...</text>
    <rect x="2" y="20" width="18" height="4" rx="1" fill="#f5f5f5" stroke="#ddd" stroke-width="0.5"/>
    <text x="11" y="23" text-anchor="middle" font-size="2.3" fill="#333" font-family="sans-serif">Save .stp...</text>
    <rect x="2" y="25" width="18" height="4" rx="1" fill="#f5f5f5" stroke="#ddd" stroke-width="0.5"/>
    <text x="11" y="28" text-anchor="middle" font-size="2.3" fill="#333" font-family="sans-serif">New (empty)</text>
    <text x="2" y="34" font-size="2.3" fill="#999" font-family="sans-serif" font-weight="bold">CLOUD</text>
    <rect x="2" y="35" width="18" height="4" rx="1" fill="#f5f5f5" stroke="#ddd" stroke-width="0.5"/>
    <text x="11" y="38" text-anchor="middle" font-size="2" fill="#333" font-family="sans-serif">My saved files...</text>
    <text x="2" y="45" font-size="2.3" fill="#999" font-family="sans-serif" font-weight="bold">FUSION</text>
    <rect x="2" y="46" width="18" height="5" rx="1.5" fill="#f9d070"/>
    <text x="11" y="50" text-anchor="middle" font-size="2.5" fill="#333" font-family="sans-serif">Send to Fusion</text>
    <!-- Gray viewport with 3D mechanical bracket -->
    <rect x="22" y="9" width="42" height="55" fill="#e8e8e8"/>
    <rect x="22" y="57" width="42" height="7" rx="4" fill="#e8e8e8"/>
    <!-- Isometric bracket/part -->
    <!-- Top face -->
    <polygon points="32,20 50,14 58,20 40,26" fill="#d0d8e8" stroke="#8899bb" stroke-width="0.7"/>
    <!-- Left face -->
    <polygon points="32,20 32,38 40,44 40,26" fill="#b0b8cc" stroke="#8899bb" stroke-width="0.7"/>
    <!-- Right face -->
    <polygon points="50,14 58,20 58,38 50,32" fill="#c0c8dc" stroke="#8899bb" stroke-width="0.7"/>
    <!-- Front cutout (stepped) -->
    <polygon points="32,30 40,26 40,44 32,38" fill="#a8b0c4" stroke="#8899bb" stroke-width="0.5"/>
    <!-- Hole on top face -->
    <ellipse cx="45" cy="20" rx="4" ry="2" fill="#888" stroke="#8899bb" stroke-width="0.6"/>
    <!-- Axis indicators -->
    <line x1="24" y1="58" x2="31" y2="58" stroke="#ee3333" stroke-width="1"/>
    <text x="32" y="59.5" font-size="3" fill="#ee3333" font-family="sans-serif">X</text>
    <line x1="24" y1="58" x2="24" y2="51" stroke="#33ee33" stroke-width="1"/>
    <text x="25" y="51" font-size="3" fill="#33ee33" font-family="sans-serif">Y</text>
    <text x="24" y="63" font-size="2" fill="#999" font-family="sans-serif">step-editor v0.1.0</text>
  </svg>`,

  // Blue header + UNIT TYPE dropdown + two conversion rows with colored dots + swap
  "unitconverter": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#fff"/>
    <rect width="64" height="9" rx="4" fill="#3a70e8"/>
    <rect y="5" width="64" height="4" fill="#3a70e8"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <rect x="0" y="9" width="64" height="13" fill="#3a70e8"/>
    <text x="32" y="15" text-anchor="middle" font-size="5" fill="#fff" font-family="sans-serif">⇄</text>
    <text x="32" y="20" text-anchor="middle" font-size="4" fill="#fff" font-family="sans-serif" font-weight="bold">Units Converter</text>
    <text x="4" y="27" font-size="2.5" fill="#555" font-family="sans-serif" font-weight="bold">UNIT TYPE</text>
    <rect x="3" y="28.5" width="58" height="8" rx="3" fill="#fff" stroke="#ddd" stroke-width="0.7"/>
    <text x="7" y="34" font-size="3.5" fill="#333" font-family="sans-serif">Length</text>
    <text x="59" y="34" text-anchor="end" font-size="4" fill="#aaa" font-family="sans-serif">∨</text>
    <rect x="3" y="39" width="34" height="8" rx="3" fill="#fff" stroke="#ddd" stroke-width="0.7"/>
    <text x="7" y="45" font-size="4" fill="#333" font-family="monospace">1</text>
    <rect x="38" y="39" width="23" height="8" rx="3" fill="#fff" stroke="#ddd" stroke-width="0.7"/>
    <circle cx="42" cy="43" r="2.5" fill="#e05050"/>
    <text x="46" y="45" font-size="3.5" fill="#333" font-family="sans-serif">Inch ∨</text>
    <text x="62" y="51" text-anchor="middle" font-size="5" fill="#3a70e8" font-family="sans-serif">⇅</text>
    <rect x="3" y="49" width="34" height="8" rx="3" fill="#fff" stroke="#ddd" stroke-width="0.7"/>
    <text x="7" y="55" font-size="4" fill="#333" font-family="monospace">2.54</text>
    <rect x="38" y="49" width="23" height="8" rx="3" fill="#fff" stroke="#ddd" stroke-width="0.7"/>
    <circle cx="42" cy="53" r="2.5" fill="#5060e0"/>
    <text x="46" y="55" font-size="3" fill="#333" font-family="sans-serif">Centimeter ∨</text>
    <rect x="3" y="59" width="58" height="4" rx="2" fill="#f5f7ff"/>
    <text x="5" y="62.3" font-size="2.3" fill="#555" font-family="sans-serif">Conversion History · No conversions yet.</text>
  </svg>`,

  // Dark sidebar (tools + Import SVG) + white canvas with pen plotter drawing
  "pen-plotter": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#2a2a2a"/>
    <rect width="64" height="9" rx="4" fill="#222"/>
    <rect y="5" width="64" height="4" fill="#222"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="39" y="7" text-anchor="middle" font-size="4" fill="#aaa" font-family="sans-serif">Pen Plotter</text>
    <rect x="20" y="10" width="8" height="5" rx="1" fill="#1a6aff"/>
    <text x="24" y="14" text-anchor="middle" font-size="3" fill="#fff" font-family="sans-serif">SVG</text>
    <rect x="29" y="10" width="15" height="5" rx="1" fill="#333"/>
    <text x="36.5" y="14" text-anchor="middle" font-size="3" fill="#aaa" font-family="sans-serif">TOOLPATH</text>
    <rect x="0" y="9" width="19" height="55" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="0.5"/>
    <rect x="0" y="57" width="19" height="7" rx="4" fill="#2a2a2a"/>
    <rect x="1" y="11" width="17" height="4" rx="1" fill="#1a1a1a"/>
    <text x="9.5" y="14" text-anchor="middle" font-size="2.3" fill="#aaa" font-family="sans-serif">Project...</text>
    <rect x="1" y="16" width="17" height="4.5" rx="1" fill="#1a6aff"/>
    <text x="9.5" y="19.5" text-anchor="middle" font-size="2.5" fill="#fff" font-family="sans-serif">Import SVG...</text>
    <rect x="2" y="23" width="6" height="5" rx="1" fill="#3a3a3a"/>
    <text x="5" y="26.8" text-anchor="middle" font-size="3" fill="#ccc" font-family="sans-serif">↖</text>
    <rect x="9" y="23" width="5" height="5" rx="1" fill="#3a3a3a"/>
    <text x="11.5" y="26.8" text-anchor="middle" font-size="3" fill="#ccc" font-family="sans-serif">↻</text>
    <rect x="2" y="30" width="5" height="5" rx="1" fill="#3a3a3a"/>
    <rect x="4" y="32" width="3" height="3" fill="none" stroke="#ccc" stroke-width="0.7"/>
    <rect x="9" y="30" width="5" height="5" rx="1" fill="#3a3a3a"/>
    <circle cx="11.5" cy="32.5" r="1.5" fill="none" stroke="#ccc" stroke-width="0.7"/>
    <text x="2" y="42" font-size="2" fill="#888" font-family="sans-serif" font-weight="bold">LAYERS</text>
    <circle cx="4" cy="46" r="1.5" fill="#aaa"/>
    <text x="7" y="47" font-size="2" fill="#aaa" font-family="sans-serif">all shapes</text>
    <text x="2" y="52" font-size="2" fill="#888" font-family="sans-serif" font-weight="bold">DOCUMENT</text>
    <text x="2" y="56" font-size="2" fill="#777" font-family="sans-serif">W: 200mm</text>
    <text x="2" y="60" font-size="2" fill="#777" font-family="sans-serif">H: 200mm</text>
    <!-- White canvas with pen plotter art -->
    <rect x="19" y="16" width="45" height="44" fill="#fffff8" stroke="#ddd" stroke-width="0.5"/>
    <!-- Geometric pen-plotter design: concentric diamonds -->
    <polygon points="41.5,18 51,30 41.5,42 32,30" fill="none" stroke="#333" stroke-width="0.6"/>
    <polygon points="41.5,21 48,30 41.5,39 35,30" fill="none" stroke="#555" stroke-width="0.5"/>
    <polygon points="41.5,24 45,30 41.5,36 38,30" fill="none" stroke="#777" stroke-width="0.4"/>
    <!-- Hatch lines inside -->
    <line x1="32" y1="30" x2="51" y2="30" stroke="#888" stroke-width="0.3"/>
    <line x1="41.5" y1="18" x2="41.5" y2="42" stroke="#888" stroke-width="0.3"/>
    <line x1="34" y1="22" x2="49" y2="38" stroke="#aaa" stroke-width="0.3"/>
    <line x1="49" y1="22" x2="34" y2="38" stroke="#aaa" stroke-width="0.3"/>
    <!-- Circular arc -->
    <circle cx="41.5" cy="30" r="12" fill="none" stroke="#333" stroke-width="0.5" stroke-dasharray="1,1"/>
    <!-- Status bar -->
    <rect x="19" y="60" width="45" height="4" fill="#2a2a2a"/>
    <text x="21" y="63" font-size="2" fill="#666" font-family="sans-serif">200×200mm · Export G-code (.zip)</text>
  </svg>`,

  // Weekly calendar: day columns with colored event blocks (green, yellow, teal)
  "calendar": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#fff"/>
    <rect width="64" height="9" rx="4" fill="#fff"/>
    <rect y="5" width="64" height="4" fill="#fff"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="39" y="7" text-anchor="middle" font-size="3.5" fill="#555" font-family="sans-serif">Calendrier Dashboard</text>
    <rect x="0" y="9" width="64" height="7" fill="#f8f8f8" stroke="#eee" stroke-width="0.5"/>
    <text x="3" y="14.5" font-size="3" fill="#888" font-family="sans-serif">‹ Aujourd'hui ›</text>
    <text x="36" y="14.5" font-size="3" fill="#444" font-family="sans-serif">MAI 2026</text>
    <rect x="0" y="16" width="8" height="48" fill="#fafafa" stroke="#eee" stroke-width="0.3"/>
    <text x="4" y="30" text-anchor="middle" font-size="1.8" fill="#bbb" font-family="sans-serif" transform="rotate(-90,4,30)">TRAVAUX</text>
    <text x="4" y="50" text-anchor="middle" font-size="1.8" fill="#bbb" font-family="sans-serif" transform="rotate(-90,4,50)">PLANNING</text>
    <line x1="0" y1="37" x2="64" y2="37" stroke="#ddd" stroke-width="0.5"/>
    <line x1="8" y1="16" x2="8" y2="64" stroke="#ddd" stroke-width="0.4"/>
    <text x="12" y="22" text-anchor="middle" font-size="2" fill="#1a6aff" font-weight="bold" font-family="sans-serif">LUN 25</text>
    <line x1="16" y1="16" x2="16" y2="64" stroke="#eee" stroke-width="0.3"/>
    <text x="20" y="22" text-anchor="middle" font-size="2" fill="#555" font-family="sans-serif">MAR 26</text>
    <line x1="24" y1="16" x2="24" y2="64" stroke="#eee" stroke-width="0.3"/>
    <text x="28" y="22" text-anchor="middle" font-size="2" fill="#555" font-family="sans-serif">MER 27</text>
    <line x1="32" y1="16" x2="32" y2="64" stroke="#eee" stroke-width="0.3"/>
    <text x="36" y="22" text-anchor="middle" font-size="2" fill="#555" font-family="sans-serif">JEU 28</text>
    <line x1="40" y1="16" x2="40" y2="64" stroke="#eee" stroke-width="0.3"/>
    <text x="44" y="22" text-anchor="middle" font-size="2" fill="#555" font-family="sans-serif">VEN 29</text>
    <line x1="48" y1="16" x2="48" y2="64" stroke="#eee" stroke-width="0.3"/>
    <text x="52" y="22" text-anchor="middle" font-size="2" fill="#aaa" font-family="sans-serif">SAM 30</text>
    <line x1="56" y1="16" x2="56" y2="64" stroke="#eee" stroke-width="0.3"/>
    <text x="60" y="22" text-anchor="middle" font-size="2" fill="#aaa" font-family="sans-serif">DIM 31</text>
    <!-- Today column highlight -->
    <rect x="8" y="23" width="8" height="41" fill="rgba(26,106,255,0.04)"/>
    <!-- TRAVAUX row events -->
    <rect x="9" y="24" width="7" height="12" rx="1.5" fill="#5a9a55"/>
    <text x="12.5" y="29" text-anchor="middle" font-size="1.8" fill="#fff" font-family="sans-serif">Bancs</text>
    <text x="12.5" y="32" text-anchor="middle" font-size="1.8" fill="#fff" font-family="sans-serif">Rouville</text>
    <!-- PLANNING row events -->
    <rect x="9" y="38" width="7" height="10" rx="1.5" fill="#f0c030"/>
    <text x="12.5" y="42" text-anchor="middle" font-size="1.6" fill="#444" font-family="sans-serif">Voyage</text>
    <text x="12.5" y="45" text-anchor="middle" font-size="1.6" fill="#444" font-family="sans-serif">montage</text>
    <rect x="17" y="38" width="7" height="10" rx="1.5" fill="#f0c030"/>
    <text x="20.5" y="42" text-anchor="middle" font-size="1.6" fill="#444" font-family="sans-serif">Projet</text>
    <text x="20.5" y="45" text-anchor="middle" font-size="1.6" fill="#444" font-family="sans-serif">Tables</text>
    <rect x="25" y="38" width="7" height="10" rx="1.5" fill="#f0c030"/>
    <text x="28.5" y="42" text-anchor="middle" font-size="1.6" fill="#444" font-family="sans-serif">Projet</text>
    <text x="28.5" y="45" text-anchor="middle" font-size="1.6" fill="#444" font-family="sans-serif">Guirl.</text>
    <rect x="33" y="38" width="7" height="10" rx="1.5" fill="#5a8a70"/>
    <text x="36.5" y="42" text-anchor="middle" font-size="1.6" fill="#fff" font-family="sans-serif">Livr.</text>
    <text x="36.5" y="45" text-anchor="middle" font-size="1.6" fill="#fff" font-family="sans-serif">Desjard</text>
    <rect x="33" y="49" width="7" height="10" rx="1.5" fill="#30a090"/>
    <text x="36.5" y="53" text-anchor="middle" font-size="1.6" fill="#fff" font-family="sans-serif">Prome.</text>
    <text x="36.5" y="56" text-anchor="middle" font-size="1.6" fill="#fff" font-family="sans-serif">Masson</text>
  </svg>`,

  // GPS bike speedometer — black background, large green "0.0 KM/H" display
  "speed-o-meter": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#0a0a0a"/>
    <rect width="64" height="9" rx="4" fill="#111"/>
    <rect y="5" width="64" height="4" fill="#111"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="39" y="7" text-anchor="middle" font-size="3.5" fill="#444" font-family="monospace">Bike Speedo</text>
    <!-- Large green speed readout -->
    <text x="32" y="38" text-anchor="middle" font-size="22" fill="#00ff44" font-family="monospace" font-weight="bold">42.7</text>
    <!-- KM/H label -->
    <text x="32" y="50" text-anchor="middle" font-size="7" fill="#00ff44" font-family="monospace">KM/H</text>
    <!-- Status message -->
    <text x="32" y="58" text-anchor="middle" font-size="2.8" fill="#00cc33" font-family="monospace">GPS OK  ●  1.2 km  ●  00:48</text>
  </svg>`,

  // Top constraint toolbar + grid canvas + red/cyan axes + mechanical sketch drawn
  "sketch-studio": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#fff"/>
    <rect width="64" height="9" rx="4" fill="#f5f5f5"/>
    <rect y="5" width="64" height="4" fill="#f5f5f5"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="39" y="7" text-anchor="middle" font-size="3.5" fill="#555" font-family="sans-serif">Sketch Studio</text>
    <!-- Toolbar -->
    <rect x="0" y="9" width="64" height="10" fill="#f8f8f8" stroke="#eee" stroke-width="0.5"/>
    <rect x="1" y="10.5" width="7" height="6" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.4"/>
    <text x="4.5" y="15" text-anchor="middle" font-size="2.2" fill="#888" font-family="sans-serif">CLEAR</text>
    <rect x="9" y="10.5" width="7" height="6" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.4"/>
    <text x="12.5" y="15" text-anchor="middle" font-size="2.2" fill="#888" font-family="sans-serif">UNDO</text>
    <rect x="17" y="10.5" width="9" height="6" rx="1" fill="#1a6aff"/>
    <text x="21.5" y="15" text-anchor="middle" font-size="2.2" fill="#fff" font-family="sans-serif">SELECT</text>
    <rect x="27" y="10.5" width="6" height="6" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.4"/>
    <text x="30" y="15" text-anchor="middle" font-size="2.2" fill="#555" font-family="sans-serif">LINE</text>
    <rect x="34" y="10.5" width="7" height="6" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.4"/>
    <text x="37.5" y="15" text-anchor="middle" font-size="2.2" fill="#555" font-family="sans-serif">RECT</text>
    <rect x="42" y="10.5" width="8" height="6" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.4"/>
    <text x="46" y="15" text-anchor="middle" font-size="2.2" fill="#555" font-family="sans-serif">CIRCLE</text>
    <rect x="51" y="10.5" width="5" height="6" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.4"/>
    <text x="53.5" y="15" text-anchor="middle" font-size="2.2" fill="#555" font-family="sans-serif">ARC</text>
    <rect x="57" y="10.5" width="6" height="6" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.4"/>
    <text x="60" y="15" text-anchor="middle" font-size="2.2" fill="#555" font-family="sans-serif">DIM</text>
    <!-- Grid canvas -->
    <rect x="0" y="19" width="64" height="41" fill="#fff"/>
    <line x1="0" y1="27" x2="64" y2="27" stroke="#eee" stroke-width="0.5"/>
    <line x1="0" y1="35" x2="64" y2="35" stroke="#eee" stroke-width="0.5"/>
    <line x1="0" y1="43" x2="64" y2="43" stroke="#eee" stroke-width="0.5"/>
    <line x1="0" y1="51" x2="64" y2="51" stroke="#eee" stroke-width="0.5"/>
    <line x1="0" y1="59" x2="64" y2="59" stroke="#eee" stroke-width="0.5"/>
    <line x1="8" y1="19" x2="8" y2="64" stroke="#eee" stroke-width="0.5"/>
    <line x1="16" y1="19" x2="16" y2="64" stroke="#eee" stroke-width="0.5"/>
    <line x1="24" y1="19" x2="24" y2="64" stroke="#eee" stroke-width="0.5"/>
    <line x1="32" y1="19" x2="32" y2="64" stroke="#eee" stroke-width="0.5"/>
    <line x1="40" y1="19" x2="40" y2="64" stroke="#eee" stroke-width="0.5"/>
    <line x1="48" y1="19" x2="48" y2="64" stroke="#eee" stroke-width="0.5"/>
    <line x1="56" y1="19" x2="56" y2="64" stroke="#eee" stroke-width="0.5"/>
    <!-- Cyan vertical axis -->
    <line x1="24" y1="19" x2="24" y2="64" stroke="#00aaaa" stroke-width="0.8"/>
    <!-- Red horizontal axis -->
    <line x1="0" y1="43" x2="64" y2="43" stroke="#ee2222" stroke-width="0.8"/>
    <!-- Origin circle -->
    <circle cx="24" cy="43" r="3" fill="#fff" stroke="#111" stroke-width="1.2"/>
    <!-- Mechanical sketch: rectangle with circle feature, constrained -->
    <rect x="30" y="23" width="28" height="18" fill="none" stroke="#111" stroke-width="1"/>
    <circle cx="44" cy="32" r="5" fill="none" stroke="#111" stroke-width="1"/>
    <!-- Dimension line bottom -->
    <line x1="30" y1="45" x2="58" y2="45" stroke="#1a6aff" stroke-width="0.6"/>
    <line x1="30" y1="44" x2="30" y2="46" stroke="#1a6aff" stroke-width="0.6"/>
    <line x1="58" y1="44" x2="58" y2="46" stroke="#1a6aff" stroke-width="0.6"/>
    <text x="44" y="49" text-anchor="middle" font-size="2.5" fill="#1a6aff" font-family="monospace">28.0</text>
    <!-- Constraint coincident marker at origin -->
    <text x="24" y="60" font-size="2" fill="#888" font-family="sans-serif">MODE: SELECT  X:0 Y:0</text>
  </svg>`,

  // TECFÉE quiz: white card, logo, category pills, question count, launch button
  "quiz-francais": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#eef0f8"/>
    <rect width="64" height="9" rx="4" fill="#e8eaf5"/>
    <rect y="5" width="64" height="4" fill="#e8eaf5"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="39" y="7" text-anchor="middle" font-size="3.5" fill="#555" font-family="sans-serif">Quiz Français</text>
    <rect x="4" y="11" width="56" height="51" rx="3" fill="#fff" stroke="#e0e4f0" stroke-width="0.5"/>
    <text x="29" y="20" text-anchor="middle" font-size="5.5" fill="#1a2a80" font-family="sans-serif" font-weight="bold">TECFÉE</text>
    <text x="44" y="19" font-size="5" fill="#e03030" font-family="sans-serif">✓</text>
    <text x="32" y="27" text-anchor="middle" font-size="3.8" fill="#1a2a80" font-family="sans-serif" font-weight="bold">Étude Personnalisée</text>
    <text x="32" y="31.5" text-anchor="middle" font-size="2.3" fill="#888" font-family="sans-serif">Configurez votre session TECFÉE.</text>
    <text x="7" y="36" font-size="2.3" fill="#555" font-family="sans-serif" font-weight="bold">CATÉGORIES À RÉVISER</text>
    <rect x="6" y="37.5" width="14" height="5" rx="2.5" fill="#1a2a80"/>
    <text x="13" y="41.3" text-anchor="middle" font-size="2.2" fill="#fff" font-family="sans-serif">ORTHOGRAPHE</text>
    <rect x="21" y="37.5" width="10" height="5" rx="2.5" fill="#e8ecff" stroke="#1a2a80" stroke-width="0.4"/>
    <text x="26" y="41.3" text-anchor="middle" font-size="2.2" fill="#1a2a80" font-family="sans-serif">SYNTAXE</text>
    <rect x="32" y="37.5" width="9" height="5" rx="2.5" fill="#1a2a80"/>
    <text x="36.5" y="41.3" text-anchor="middle" font-size="2.2" fill="#fff" font-family="sans-serif">LEXIQUE</text>
    <rect x="42" y="37.5" width="16" height="5" rx="2.5" fill="#e8ecff" stroke="#1a2a80" stroke-width="0.4"/>
    <text x="50" y="41.3" text-anchor="middle" font-size="2.2" fill="#1a2a80" font-family="sans-serif">PONCTUATION</text>
    <text x="7" y="47.5" font-size="2.3" fill="#555" font-family="sans-serif" font-weight="bold">NOMBRE DE QUESTIONS</text>
    <text x="8" y="54" font-size="2.5" fill="#888" font-family="sans-serif">5</text>
    <circle cx="16" cy="52.5" r="3.5" fill="#1a2a80"/>
    <text x="16" y="54" text-anchor="middle" font-size="2.5" fill="#fff" font-family="sans-serif">10</text>
    <text x="23" y="54" font-size="2.5" fill="#888" font-family="sans-serif">15</text>
    <text x="29" y="54" font-size="2.5" fill="#888" font-family="sans-serif">20</text>
    <text x="35" y="54" font-size="2.5" fill="#888" font-family="sans-serif">30</text>
    <text x="41" y="54" font-size="2.5" fill="#888" font-family="sans-serif">50</text>
    <text x="48" y="54" font-size="2.5" fill="#888" font-family="sans-serif">Tout (247)</text>
    <rect x="6" y="56.5" width="52" height="7" rx="3.5" fill="#1a2a80"/>
    <text x="32" y="61.5" text-anchor="middle" font-size="3.5" fill="#fff" font-family="sans-serif">Lancer le quiz ›</text>
  </svg>`,

  // 3D Outline System: app window with accurate bent-ribbon art from exported SVG reference
  "mathieuconnery": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#fff"/>
    <rect width="64" height="9" rx="4" fill="#f8f8f8"/>
    <rect y="5" width="64" height="4" fill="#f8f8f8"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="35" y="7" text-anchor="middle" font-size="3.5" fill="#555" font-family="sans-serif">3D Outline System</text>
    <!-- Top-right action buttons -->
    <rect x="36" y="10" width="8" height="3.5" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.5"/>
    <text x="40" y="13" text-anchor="middle" font-size="2.2" fill="#555" font-family="sans-serif">Import</text>
    <rect x="45" y="10" width="8" height="3.5" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.5"/>
    <text x="49" y="13" text-anchor="middle" font-size="2.2" fill="#555" font-family="sans-serif">Export</text>
    <rect x="54" y="10" width="9" height="3.5" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.5"/>
    <text x="58.5" y="13" text-anchor="middle" font-size="2.2" fill="#e04040" font-family="sans-serif">Clear</text>
    <!-- Left toolbar strip -->
    <rect x="0" y="9" width="13" height="55" fill="#fff" stroke="#f0f0f0" stroke-width="0.5"/>
    <rect x="0" y="57" width="13" height="7" rx="4" fill="#fff"/>
    <rect x="1" y="10" width="11" height="6" rx="1.5" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="0.4"/>
    <text x="6.5" y="15" text-anchor="middle" font-size="4.5" fill="#666">↖</text>
    <rect x="1" y="17" width="11" height="6" rx="1.5" fill="#3a7ee8"/>
    <text x="6.5" y="22" text-anchor="middle" font-size="5" fill="#fff">−</text>
    <rect x="1" y="24" width="11" height="6" rx="1.5" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="0.4"/>
    <text x="6.5" y="29" text-anchor="middle" font-size="4.5" fill="#666">↩</text>
    <rect x="1" y="31" width="11" height="5" rx="1.5" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="0.4"/>
    <text x="6.5" y="35.5" text-anchor="middle" font-size="4" fill="#666">▦</text>
    <!-- Color swatches -->
    <rect x="2" y="38" width="3" height="4" rx="1.5" fill="#e84040"/>
    <rect x="4.5" y="38" width="3" height="4" fill="#3a80e8"/>
    <rect x="7" y="38" width="4" height="4" rx="1.5" fill="#e8c020"/>
    <circle cx="6.5" cy="47" r="3.5" fill="#3a80e8"/>
    <circle cx="6.5" cy="54" r="3.5" fill="#e84040"/>
    <circle cx="6.5" cy="61" r="3" fill="#e8c020"/>
    <!-- Main white canvas with grid -->
    <rect x="13" y="9" width="51" height="55" fill="#fff"/>
    <line x1="13" y1="18" x2="64" y2="18" stroke="#eee" stroke-width="0.5"/>
    <line x1="13" y1="27" x2="64" y2="27" stroke="#eee" stroke-width="0.5"/>
    <line x1="13" y1="36" x2="64" y2="36" stroke="#eee" stroke-width="0.5"/>
    <line x1="13" y1="45" x2="64" y2="45" stroke="#eee" stroke-width="0.5"/>
    <line x1="13" y1="54" x2="64" y2="54" stroke="#eee" stroke-width="0.5"/>
    <line x1="22" y1="9" x2="22" y2="64" stroke="#eee" stroke-width="0.5"/>
    <line x1="31" y1="9" x2="31" y2="64" stroke="#eee" stroke-width="0.5"/>
    <line x1="40" y1="9" x2="40" y2="64" stroke="#eee" stroke-width="0.5"/>
    <line x1="49" y1="9" x2="49" y2="64" stroke="#eee" stroke-width="0.5"/>
    <line x1="58" y1="9" x2="58" y2="64" stroke="#eee" stroke-width="0.5"/>
    <!--
      Bent ribbon — faithfully scaled from the actual exported SVG reference
      (3d-outline_full_color_path_001.svg, 207×137 canvas).
      Source bounding box x:33.5→182.4, y:24→112.5.
      Scale = 0.309, offset x+5.65 y+15.88
      Segment 1 goes top-left → centre-bottom; segment 2 centre-bottom → top-right.
    -->
    <!-- p_0  red top face (segment 1) -->
    <polygon points="18.6,25.9 18.6,23.3 41,45.7 40.9,48.2" fill="#ec1f27"/>
    <!-- p_1  blue side face (segment 1) -->
    <polygon points="18.6,25.9 16,25.9 40.7,50.6 40.9,48.2" fill="#1034A6"/>
    <!-- p_2  olive start cap -->
    <polygon points="18.6,23.3 16,25.9 18.6,25.9" fill="#837e53"/>
    <!-- p_3  yellow top face (segment 2) -->
    <polygon points="40.9,48.2 41,45.7 59.7,30.7 59.4,33.3" fill="#f5c800"/>
    <!-- p_4  black side face (segment 2) -->
    <polygon points="40.9,48.2 40.7,50.6 62,33.6 59.4,33.3" fill="#090700"/>
    <!-- p_5  red end cap -->
    <polygon points="62,33.6 59.7,30.7 59.4,33.3" fill="#ec1f27"/>
  </svg>`,
};

Fred.getIcon = function (id) {
  return Fred.ICONS[id] || `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#334155"/>
    <rect width="64" height="9" rx="4" fill="#1e293b"/>
    <rect y="5" width="64" height="4" fill="#1e293b"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="32" y="40" text-anchor="middle" font-size="18" fill="#94a3b8" font-family="sans-serif">${(id[0]||'?').toUpperCase()}</text>
  </svg>`;
};
