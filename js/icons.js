// App-specific window-chrome thumbnail icons — 64×64 SVG each.
// Faithfully reproduces actual app UI based on real screenshots.
// Keyed by exact app id from apps.json.

Fred.ICONS = {

  // Dark navy header + variable tabs row + big black canvas + bottom button strip
  "DDCS-Studio": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#0d1f42"/>
    <rect width="64" height="9" rx="4" fill="#1b3a6e"/>
    <rect y="5" width="64" height="4" fill="#1b3a6e"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="39" y="7" text-anchor="middle" font-size="3.5" fill="#a0b8e0" font-family="sans-serif">DDCS Studio V9</text>
    <rect x="0" y="9" width="64" height="9" fill="#2a3f6e"/>
    <rect x="1" y="10" width="8" height="6" rx="1" fill="#d8e4f0"/>
    <text x="5" y="14.5" text-anchor="middle" font-size="2.5" fill="#1a2a50" font-family="monospace">#0</text>
    <rect x="10" y="10" width="8" height="6" rx="1" fill="#d8e4f0"/>
    <text x="14" y="14.5" text-anchor="middle" font-size="2.5" fill="#1a2a50" font-family="monospace">#1</text>
    <rect x="19" y="10" width="8" height="6" rx="1" fill="#d8e4f0"/>
    <text x="23" y="14.5" text-anchor="middle" font-size="2.5" fill="#1a2a50" font-family="monospace">#2</text>
    <rect x="28" y="10" width="8" height="6" rx="1" fill="#d8e4f0"/>
    <text x="32" y="14.5" text-anchor="middle" font-size="2.5" fill="#1a2a50" font-family="monospace">#3</text>
    <rect x="37" y="10" width="8" height="6" rx="1" fill="#d8e4f0"/>
    <text x="41" y="14.5" text-anchor="middle" font-size="2.5" fill="#1a2a50" font-family="monospace">#4</text>
    <rect x="46" y="10" width="8" height="6" rx="1" fill="#d8e4f0"/>
    <text x="50" y="14.5" text-anchor="middle" font-size="2.5" fill="#1a2a50" font-family="monospace">#5</text>
    <rect x="55" y="10" width="8" height="6" rx="1" fill="#d8e4f0"/>
    <text x="59" y="14.5" text-anchor="middle" font-size="2.5" fill="#1a2a50" font-family="monospace">#6</text>
    <rect x="0" y="18" width="64" height="38" fill="#000"/>
    <text x="32" y="37" text-anchor="middle" font-size="3.5" fill="#2a2a2a" font-family="monospace">( System Ready )</text>
    <rect x="0" y="56" width="64" height="8" rx="0" fill="#2a3f6e"/>
    <rect x="0" y="60" width="64" height="4" rx="4" fill="#2a3f6e"/>
    <rect x="1" y="57" width="9" height="4" rx="1" fill="#1a2a50" stroke="#4a6ab0" stroke-width="0.4"/>
    <text x="5.5" y="60" text-anchor="middle" font-size="2.3" fill="#a0c0e0" font-family="sans-serif">Comm</text>
    <rect x="11" y="57" width="7" height="4" rx="1" fill="#1a2a50" stroke="#4a6ab0" stroke-width="0.4"/>
    <text x="14.5" y="60" text-anchor="middle" font-size="2.3" fill="#a0c0e0" font-family="sans-serif">WCS</text>
    <rect x="33" y="57" width="9" height="4" rx="1" fill="#1a2a50" stroke="#4a6ab0" stroke-width="0.4"/>
    <text x="37.5" y="60" text-anchor="middle" font-size="2.3" fill="#a0c0e0" font-family="sans-serif">Corner</text>
    <rect x="54" y="57" width="9" height="4" rx="1" fill="#1a2a50" stroke="#4a6ab0" stroke-width="0.4"/>
    <text x="58.5" y="60" text-anchor="middle" font-size="2.3" fill="#a0c0e0" font-family="sans-serif">EXPORT</text>
  </svg>`,

  // White left panel (sections + green button) + black 3D viewport with spline mesh
  "b-spline-generator-web-addin": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#f5f5f5"/>
    <rect width="64" height="9" rx="4" fill="#e8e8e8"/>
    <rect y="5" width="64" height="4" fill="#e8e8e8"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="35" y="7" text-anchor="middle" font-size="3.5" fill="#1a6aff" font-family="sans-serif" font-weight="bold">B-SPLINE GENERATOR</text>
    <rect x="0" y="9" width="21" height="55" fill="#fff" stroke="#e0e0e0" stroke-width="0.5"/>
    <rect x="0" y="57" width="21" height="7" rx="4" fill="#fff"/>
    <rect x="1" y="11" width="19" height="5" rx="2" fill="#28c940"/>
    <text x="10.5" y="15" text-anchor="middle" font-size="2.5" fill="#fff" font-family="sans-serif">Generate New Seed</text>
    <rect x="2" y="18" width="8" height="3.5" rx="1" fill="#fff" stroke="#bbb" stroke-width="0.5"/>
    <text x="6" y="21" text-anchor="middle" font-size="2.3" fill="#333" font-family="sans-serif">Undo</text>
    <rect x="11" y="18" width="8" height="3.5" rx="1" fill="#fff" stroke="#bbb" stroke-width="0.5"/>
    <text x="15" y="21" text-anchor="middle" font-size="2.3" fill="#333" font-family="sans-serif">Redo</text>
    <text x="2" y="27" font-size="2.3" fill="#999" font-family="sans-serif" font-weight="bold">STOCK DIMENSIONS</text>
    <text x="2" y="32" font-size="2.3" fill="#333" font-family="sans-serif">Width (X)  7</text>
    <text x="2" y="36.5" font-size="2.3" fill="#333" font-family="sans-serif">Height (Y)  9</text>
    <text x="2" y="41" font-size="2.3" fill="#333" font-family="sans-serif">Depth (Z)  1.5</text>
    <rect x="1" y="43" width="19" height="2.5" rx="1" fill="#eef"/>
    <rect x="1" y="43" width="6" height="2.5" rx="1" fill="#1a6aff" opacity="0.4"/>
    <text x="2" y="49" font-size="2.3" fill="#555" font-family="sans-serif">▶ SEED</text>
    <text x="2" y="53" font-size="2.3" fill="#555" font-family="sans-serif">▶ SKELETON</text>
    <text x="2" y="57" font-size="2.3" fill="#555" font-family="sans-serif">▶ FILTER</text>
    <!-- Gray 3D viewport — matches actual app: perspective terrain slab on gray bg -->
    <rect x="21" y="9" width="43" height="55" fill="#787878"/>
    <rect x="21" y="57" width="43" height="7" rx="4" fill="#787878"/>
    <!-- Grid floor lines -->
    <line x1="22" y1="54" x2="63" y2="54" stroke="#666" stroke-width="0.4"/>
    <line x1="26" y1="54" x2="48" y2="59" stroke="#666" stroke-width="0.3"/>
    <line x1="38" y1="54" x2="60" y2="59" stroke="#666" stroke-width="0.3"/>
    <line x1="50" y1="54" x2="63" y2="57" stroke="#666" stroke-width="0.3"/>
    <!-- Terrain slab base — parallelogram (near-bottom to far-top perspective) -->
    <polygon points="24,49 57,49 63,22 30,22" fill="#7a5822"/>
    <!-- Front edge of slab -->
    <polygon points="24,49 57,49 57,54 24,54" fill="#3a2008"/>
    <!-- Terrain surface — golden highlight lumps -->
    <polygon points="35,44 39,30 46,26 43,40" fill="#c88a28"/>
    <polygon points="43,42 47,32 53,28 51,38" fill="#d49a32"/>
    <polygon points="31,42 34,33 40,30 37,40" fill="#b07820"/>
    <polygon points="50,40 54,28 60,26 57,36" fill="#c08828"/>
    <polygon points="41,46 45,40 50,38 47,44" fill="#c89030"/>
    <polygon points="33,46 36,41 41,39 38,44" fill="#b07820"/>
    <!-- Shadow patches in the valleys -->
    <polygon points="37,43 41,36 45,35 42,42" fill="#2a1404" opacity="0.6"/>
    <polygon points="49,41 52,33 56,31 53,39" fill="#2a1404" opacity="0.5"/>
    <polygon points="31,45 33,40 37,38 35,44" fill="#2a1404" opacity="0.45"/>
    <!-- Highlight ridge lines across the terrain -->
    <path d="M33,39 C37,34 42,30 47,29 C52,28 57,27 62,24" fill="none" stroke="#f0d070" stroke-width="0.7" opacity="0.55"/>
    <path d="M33,45 C38,42 44,40 49,39" fill="none" stroke="#e0b850" stroke-width="0.6" opacity="0.4"/>
    <!-- Nav cube (top-right corner, like real app) -->
    <rect x="55" y="11" width="8" height="7" rx="1" fill="#d0d0d0" opacity="0.85"/>
    <text x="59" y="15.5" text-anchor="middle" font-size="2.5" fill="#333" font-family="sans-serif" font-weight="bold">TOP</text>
    <!-- Axis indicators: Z=blue up, X=red right, Y=green diagonal -->
    <line x1="59" y1="46" x2="59" y2="41" stroke="#3366ff" stroke-width="0.8"/>
    <line x1="59" y1="46" x2="63" y2="46" stroke="#e03030" stroke-width="0.8"/>
    <line x1="59" y1="46" x2="56" y2="49" stroke="#28c940" stroke-width="0.8"/>
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

  // 3D Outline System: left color toolbar + grid canvas with drawn colored strokes
  "mathieuconnery": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#fff"/>
    <rect width="64" height="9" rx="4" fill="#f8f8f8"/>
    <rect y="5" width="64" height="4" fill="#f8f8f8"/>
    <circle cx="5" cy="4.5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="4.5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="4.5" r="1.8" fill="#28c940"/>
    <text x="35" y="7" text-anchor="middle" font-size="3.5" fill="#555" font-family="sans-serif">3D Outline System</text>
    <!-- Top right buttons -->
    <rect x="33" y="10" width="9" height="4" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.5"/>
    <text x="37.5" y="13.5" text-anchor="middle" font-size="2.3" fill="#555" font-family="sans-serif">↑ Import</text>
    <rect x="43" y="10" width="9" height="4" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.5"/>
    <text x="47.5" y="13.5" text-anchor="middle" font-size="2.3" fill="#555" font-family="sans-serif">↓ Export</text>
    <rect x="53" y="10" width="10" height="4" rx="1" fill="#fff" stroke="#ddd" stroke-width="0.5"/>
    <text x="58" y="13.5" text-anchor="middle" font-size="2.3" fill="#e04040" font-family="sans-serif">Clear</text>
    <!-- Left toolbar -->
    <rect x="0" y="9" width="14" height="55" fill="#fff" stroke="#f0f0f0" stroke-width="0.5"/>
    <rect x="0" y="57" width="14" height="7" rx="4" fill="#fff"/>
    <rect x="1" y="11" width="12" height="7" rx="2" fill="#ffe8e8" stroke="#eee" stroke-width="0.4"/>
    <text x="7" y="16.5" text-anchor="middle" font-size="5" fill="#555">↖</text>
    <rect x="1" y="19" width="12" height="7" rx="2" fill="#fff" stroke="#eee" stroke-width="0.4"/>
    <text x="7" y="24.5" text-anchor="middle" font-size="5" fill="#555">✏</text>
    <rect x="1" y="27" width="12" height="7" rx="2" fill="#fff" stroke="#eee" stroke-width="0.4"/>
    <text x="7" y="32.5" text-anchor="middle" font-size="5" fill="#555">−</text>
    <!-- Color swatches -->
    <rect x="2" y="38" width="10" height="5" rx="1.5" fill="#3060e8"/>
    <rect x="2" y="44" width="5" height="5" rx="1" fill="#3060e8"/>
    <rect x="7" y="44" width="5" height="5" rx="1" fill="#e8d020"/>
    <rect x="2" y="50" width="10" height="3" rx="1" fill="#3060e8"/>
    <rect x="2" y="54" width="10" height="3" rx="1" fill="#e03030"/>
    <rect x="2" y="58" width="10" height="3" rx="1" fill="#e8a020"/>
    <!-- Main grid canvas -->
    <rect x="14" y="9" width="50" height="55" fill="#fff"/>
    <line x1="14" y1="17" x2="64" y2="17" stroke="#eee" stroke-width="0.4"/>
    <line x1="14" y1="25" x2="64" y2="25" stroke="#eee" stroke-width="0.4"/>
    <line x1="14" y1="33" x2="64" y2="33" stroke="#eee" stroke-width="0.4"/>
    <line x1="14" y1="41" x2="64" y2="41" stroke="#eee" stroke-width="0.4"/>
    <line x1="14" y1="49" x2="64" y2="49" stroke="#eee" stroke-width="0.4"/>
    <line x1="14" y1="57" x2="64" y2="57" stroke="#eee" stroke-width="0.4"/>
    <line x1="22" y1="9" x2="22" y2="64" stroke="#eee" stroke-width="0.4"/>
    <line x1="30" y1="9" x2="30" y2="64" stroke="#eee" stroke-width="0.4"/>
    <line x1="38" y1="9" x2="38" y2="64" stroke="#eee" stroke-width="0.4"/>
    <line x1="46" y1="9" x2="46" y2="64" stroke="#eee" stroke-width="0.4"/>
    <line x1="54" y1="9" x2="54" y2="64" stroke="#eee" stroke-width="0.4"/>
    <line x1="62" y1="9" x2="62" y2="64" stroke="#eee" stroke-width="0.4"/>
    <!-- 3D outline strokes drawn on canvas: isometric box outlines -->
    <!-- Blue stroke: front face outline -->
    <polyline points="28,44 28,26 44,18 44,36 28,44" fill="none" stroke="#3060e8" stroke-width="1.5" stroke-linejoin="round"/>
    <!-- Blue+yellow: top face -->
    <polyline points="28,26 44,18 58,24 42,32 28,26" fill="none" stroke="#3060e8" stroke-width="1.5" stroke-linejoin="round"/>
    <!-- Yellow: right face -->
    <polyline points="44,18 58,24 58,42 44,36" fill="none" stroke="#e8d020" stroke-width="1.5" stroke-linejoin="round"/>
    <!-- Red highlight edge -->
    <line x1="28" y1="26" x2="44" y2="18" stroke="#e03030" stroke-width="1" stroke-dasharray="2,1"/>
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
