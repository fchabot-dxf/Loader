// App-specific window-chrome thumbnail icons — 64×64 SVG each.
// Each icon simulates a shrunken screenshot of the real app window:
//   • thin title bar with traffic-light dots + app name
//   • body area reproducing the app's main layout at miniature scale
// Keyed by exact app id from apps.json.

Fred.ICONS = {

  "DDCS-Studio": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#1a1a2e"/>
    <rect width="64" height="10" rx="4" fill="#16213e"/>
    <rect y="6" width="64" height="4" fill="#16213e"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="4" fill="#8899aa" font-family="monospace">DDCS Studio</text>
    <text x="4" y="17" font-size="3.5" fill="#00ff88" font-family="monospace">G21 G90 G94</text>
    <text x="4" y="22" font-size="3.5" fill="#7ec8e3" font-family="monospace">T1 M6</text>
    <text x="4" y="27" font-size="3.5" fill="#00ff88" font-family="monospace">G0 X0 Y0 Z5</text>
    <text x="4" y="32" font-size="3.5" fill="#ffcc44" font-family="monospace">S18000 M3</text>
    <text x="4" y="37" font-size="3.5" fill="#00ff88" font-family="monospace">G1 Z-2 F800</text>
    <text x="4" y="42" font-size="3.5" fill="#7ec8e3" font-family="monospace">X50 Y30 F2400</text>
    <text x="4" y="47" font-size="3.5" fill="#00ff88" font-family="monospace">G2 X60 I10 J0</text>
    <rect x="2" y="51" width="60" height="11" rx="2" fill="#0f3460"/>
    <text x="5" y="57.5" font-size="3.5" fill="#00ff88" font-family="monospace">X:125.3 Y:48.2 Z:-2.0</text>
  </svg>`,

  "b-spline-generator-web-addin": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#f8f9ff"/>
    <rect width="64" height="10" rx="4" fill="#4361ee"/>
    <rect y="6" width="64" height="4" fill="#4361ee"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="4" fill="white" font-family="sans-serif">B-Spline Gen</text>
    <line x1="4" y1="18" x2="60" y2="18" stroke="#dde3ff" stroke-width="0.5"/>
    <line x1="4" y1="28" x2="60" y2="28" stroke="#dde3ff" stroke-width="0.5"/>
    <line x1="4" y1="38" x2="60" y2="38" stroke="#dde3ff" stroke-width="0.5"/>
    <line x1="4" y1="48" x2="60" y2="48" stroke="#dde3ff" stroke-width="0.5"/>
    <line x1="4" y1="58" x2="60" y2="58" stroke="#dde3ff" stroke-width="0.5"/>
    <line x1="14" y1="12" x2="14" y2="62" stroke="#dde3ff" stroke-width="0.5"/>
    <line x1="28" y1="12" x2="28" y2="62" stroke="#dde3ff" stroke-width="0.5"/>
    <line x1="42" y1="12" x2="42" y2="62" stroke="#dde3ff" stroke-width="0.5"/>
    <line x1="56" y1="12" x2="56" y2="62" stroke="#dde3ff" stroke-width="0.5"/>
    <path d="M8,56 C14,44 16,18 28,22 C40,26 36,44 48,30 C54,22 58,16 62,14"
          fill="none" stroke="#4361ee" stroke-width="2" stroke-linecap="round"/>
    <polyline points="8,56 16,14 36,28 62,14" fill="none" stroke="#aabbff" stroke-width="0.8" stroke-dasharray="2,2"/>
    <circle cx="8" cy="56" r="2.2" fill="white" stroke="#4361ee" stroke-width="1.2"/>
    <circle cx="16" cy="14" r="2.2" fill="white" stroke="#4361ee" stroke-width="1.2"/>
    <circle cx="36" cy="28" r="2.2" fill="white" stroke="#4361ee" stroke-width="1.2"/>
    <circle cx="62" cy="14" r="2.2" fill="white" stroke="#4361ee" stroke-width="1.2"/>
  </svg>`,

  "SVG creator": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#fff"/>
    <rect width="64" height="10" rx="4" fill="#e63946"/>
    <rect y="6" width="64" height="4" fill="#e63946"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="4" fill="white" font-family="sans-serif">SVG Creator</text>
    <rect x="2" y="11" width="10" height="52" rx="2" fill="#f1f3f5"/>
    <rect x="4" y="14" width="6" height="5" rx="1" fill="#e63946"/>
    <rect x="4" y="21" width="6" height="5" rx="1" fill="#4cc9f0"/>
    <circle cx="7" cy="32" r="3" fill="#f8961e" opacity="0.6"/>
    <line x1="4" y1="39" x2="10" y2="45" stroke="#555" stroke-width="1"/>
    <line x1="10" y1="39" x2="4" y2="45" stroke="#555" stroke-width="1"/>
    <rect x="4" y="49" width="6" height="5" rx="1" fill="none" stroke="#555" stroke-width="0.8"/>
    <rect x="14" y="11" width="49" height="52" fill="#fafafa" stroke="#eee" stroke-width="0.5"/>
    <rect x="20" y="20" width="18" height="11" rx="1" fill="none" stroke="#e63946" stroke-width="1.2"/>
    <rect x="19" y="19" width="2" height="2" fill="#e63946"/>
    <rect x="36" y="19" width="2" height="2" fill="#e63946"/>
    <rect x="19" y="30" width="2" height="2" fill="#e63946"/>
    <rect x="36" y="30" width="2" height="2" fill="#e63946"/>
    <circle cx="51" cy="32" r="9" fill="rgba(76,201,240,0.25)" stroke="#4cc9f0" stroke-width="1.2"/>
    <path d="M18,56 L30,38 L42,56 Z" fill="rgba(248,150,30,0.25)" stroke="#f8961e" stroke-width="1.2"/>
    <line x1="44" y1="16" x2="60" y2="24" stroke="#888" stroke-width="1"/>
  </svg>`,

  "geometric CALCULATOR": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#0a0a1a"/>
    <rect width="64" height="10" rx="4" fill="#1a1a3e"/>
    <rect y="6" width="64" height="4" fill="#1a1a3e"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="4" fill="#9999ff" font-family="sans-serif">Geo Calc</text>
    <line x1="4" y1="22" x2="60" y2="22" stroke="#1a1a44" stroke-width="0.6"/>
    <line x1="4" y1="34" x2="60" y2="34" stroke="#1a1a44" stroke-width="0.6"/>
    <line x1="4" y1="46" x2="60" y2="46" stroke="#1a1a44" stroke-width="0.6"/>
    <polygon points="10,56 32,16 56,56" fill="rgba(99,102,241,0.18)" stroke="#6366f1" stroke-width="1.2"/>
    <path d="M18,56 A10,10 0 0,1 24,46" fill="none" stroke="#f0c040" stroke-width="0.9"/>
    <text x="14" y="55" font-size="3" fill="#f0c040" font-family="monospace">38°</text>
    <line x1="10" y1="59" x2="56" y2="59" stroke="#6366f1" stroke-width="0.8"/>
    <line x1="10" y1="57" x2="10" y2="61" stroke="#6366f1" stroke-width="0.8"/>
    <line x1="56" y1="57" x2="56" y2="61" stroke="#6366f1" stroke-width="0.8"/>
    <text x="33" y="63.5" text-anchor="middle" font-size="3" fill="#9999ff" font-family="monospace">46.0 mm</text>
    <rect x="36" y="12" width="25" height="30" rx="2" fill="#0d0d2e"/>
    <text x="38" y="18" font-size="3" fill="#555588" font-family="monospace">Area</text>
    <text x="38" y="23" font-size="3.5" fill="#00ddaa" font-family="monospace">576mm²</text>
    <text x="38" y="29" font-size="3" fill="#555588" font-family="monospace">Perim</text>
    <text x="38" y="34" font-size="3.5" fill="#00ddaa" font-family="monospace">98.5mm</text>
    <text x="38" y="39" font-size="3" fill="#555588" font-family="monospace">Angle A</text>
    <text x="38" y="44" font-size="3.5" fill="#ffcc44" font-family="monospace">38.0°</text>
  </svg>`,

  "calculator": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#1c1c1c"/>
    <rect width="64" height="10" rx="4" fill="#2d2d2d"/>
    <rect y="6" width="64" height="4" fill="#2d2d2d"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="3.8" fill="#aaa" font-family="sans-serif">Constr. Calc</text>
    <rect x="4" y="11" width="56" height="14" rx="2" fill="#0a0a0a"/>
    <text x="58" y="20" text-anchor="end" font-size="5.5" fill="#ff9f43" font-family="monospace">3,456.78</text>
    <text x="58" y="24.5" text-anchor="end" font-size="3" fill="#666" font-family="monospace">+ 1,234.56</text>
    <rect x="4" y="27" width="12" height="7" rx="1.5" fill="#3a3a3a"/>
    <text x="10" y="33" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">C</text>
    <rect x="18" y="27" width="12" height="7" rx="1.5" fill="#3a3a3a"/>
    <text x="24" y="33" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">±</text>
    <rect x="32" y="27" width="12" height="7" rx="1.5" fill="#3a3a3a"/>
    <text x="38" y="33" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">%</text>
    <rect x="46" y="27" width="14" height="7" rx="1.5" fill="#ff9f43"/>
    <text x="53" y="33" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">÷</text>
    <rect x="4" y="36" width="12" height="7" rx="1.5" fill="#505050"/>
    <text x="10" y="42" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">7</text>
    <rect x="18" y="36" width="12" height="7" rx="1.5" fill="#505050"/>
    <text x="24" y="42" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">8</text>
    <rect x="32" y="36" width="12" height="7" rx="1.5" fill="#505050"/>
    <text x="38" y="42" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">9</text>
    <rect x="46" y="36" width="14" height="7" rx="1.5" fill="#ff9f43"/>
    <text x="53" y="42" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">×</text>
    <rect x="4" y="45" width="12" height="7" rx="1.5" fill="#505050"/>
    <text x="10" y="51" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">4</text>
    <rect x="18" y="45" width="12" height="7" rx="1.5" fill="#505050"/>
    <text x="24" y="51" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">5</text>
    <rect x="32" y="45" width="12" height="7" rx="1.5" fill="#505050"/>
    <text x="38" y="51" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">6</text>
    <rect x="46" y="45" width="14" height="7" rx="1.5" fill="#ff9f43"/>
    <text x="53" y="51" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">−</text>
    <rect x="4" y="54" width="12" height="8" rx="1.5" fill="#505050"/>
    <text x="10" y="60" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">1</text>
    <rect x="18" y="54" width="12" height="8" rx="1.5" fill="#505050"/>
    <text x="24" y="60" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">2</text>
    <rect x="32" y="54" width="12" height="8" rx="1.5" fill="#505050"/>
    <text x="38" y="60" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">3</text>
    <rect x="46" y="54" width="14" height="8" rx="1.5" fill="#ff9f43"/>
    <text x="53" y="60" text-anchor="middle" font-size="4.5" fill="#fff" font-family="monospace">+</text>
  </svg>`,

  "step-editor": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#1e2230"/>
    <rect width="64" height="10" rx="4" fill="#252d3d"/>
    <rect y="6" width="64" height="4" fill="#252d3d"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="4" fill="#8899bb" font-family="sans-serif">STEP Editor</text>
    <rect x="2" y="11" width="14" height="52" rx="2" fill="#1a2130"/>
    <text x="9" y="17" text-anchor="middle" font-size="2.8" fill="#556" font-family="sans-serif">Tree</text>
    <text x="5" y="23" font-size="2.5" fill="#7788aa" font-family="monospace">▶ Part</text>
    <text x="5" y="28" font-size="2.5" fill="#7788aa" font-family="monospace">  Body</text>
    <text x="5" y="33" font-size="2.5" fill="#aabbcc" font-family="monospace">  Face</text>
    <text x="5" y="38" font-size="2.5" fill="#7788aa" font-family="monospace">  Edge</text>
    <line x1="10" y1="54" x2="10" y2="56" stroke="#334" stroke-width="0.5"/>
    <line x1="5" y1="54" x2="60" y2="54" stroke="#334" stroke-width="0.5"/>
    <line x1="5" y1="40" x2="60" y2="40" stroke="#334" stroke-width="0.5"/>
    <line x1="5" y1="54" x2="16" y2="44" stroke="#334" stroke-width="0.4"/>
    <line x1="32" y1="54" x2="44" y2="44" stroke="#334" stroke-width="0.4"/>
    <line x1="60" y1="54" x2="60" y2="40" stroke="#334" stroke-width="0.4"/>
    <polygon points="18,26 38,18 54,26 34,34" fill="#2a3a5a" stroke="#4a6aaa" stroke-width="0.8"/>
    <polygon points="18,26 18,48 34,56 34,34" fill="#1a2840" stroke="#4a6aaa" stroke-width="0.8"/>
    <polygon points="38,18 54,26 54,48 38,40" fill="#223050" stroke="#4a6aaa" stroke-width="0.8"/>
    <ellipse cx="36" cy="26" rx="5" ry="3" fill="#111825" stroke="#6a8acc" stroke-width="0.8"/>
    <line x1="18" y1="60" x2="26" y2="60" stroke="#ff4444" stroke-width="1.2"/>
    <text x="27" y="61.5" font-size="3.5" fill="#ff4444">X</text>
    <line x1="18" y1="60" x2="18" y2="52" stroke="#44ff44" stroke-width="1.2"/>
    <text x="19" y="51.5" font-size="3.5" fill="#44ff44">Y</text>
  </svg>`,

  "unitconverter": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#f0f4ff"/>
    <rect width="64" height="10" rx="4" fill="#7c3aed"/>
    <rect y="6" width="64" height="4" fill="#7c3aed"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="4" fill="white" font-family="sans-serif">Unit Converter</text>
    <rect x="3" y="12" width="13" height="5" rx="2" fill="#7c3aed"/>
    <text x="9.5" y="16" text-anchor="middle" font-size="3" fill="white" font-family="sans-serif">Length</text>
    <rect x="17" y="12" width="13" height="5" rx="2" fill="#e0e7ff"/>
    <text x="23.5" y="16" text-anchor="middle" font-size="3" fill="#7c3aed" font-family="sans-serif">Mass</text>
    <rect x="31" y="12" width="13" height="5" rx="2" fill="#e0e7ff"/>
    <text x="37.5" y="16" text-anchor="middle" font-size="3" fill="#7c3aed" font-family="sans-serif">Temp</text>
    <rect x="45" y="12" width="16" height="5" rx="2" fill="#e0e7ff"/>
    <text x="53" y="16" text-anchor="middle" font-size="3" fill="#7c3aed" font-family="sans-serif">Speed</text>
    <rect x="3" y="20" width="58" height="10" rx="2" fill="white" stroke="#c4b5fd" stroke-width="1"/>
    <text x="6" y="24" font-size="3" fill="#999" font-family="sans-serif">From</text>
    <text x="6" y="29" font-size="4.5" fill="#1a1a2e" font-family="monospace">25.400</text>
    <rect x="42" y="21.5" width="17" height="6" rx="1.5" fill="#e0e7ff"/>
    <text x="50.5" y="26" text-anchor="middle" font-size="3.5" fill="#7c3aed" font-family="sans-serif">mm</text>
    <text x="32" y="39" text-anchor="middle" font-size="9" fill="#7c3aed">⇅</text>
    <rect x="3" y="42" width="58" height="10" rx="2" fill="white" stroke="#c4b5fd" stroke-width="1"/>
    <text x="6" y="46" font-size="3" fill="#999" font-family="sans-serif">To</text>
    <text x="6" y="51" font-size="4.5" fill="#7c3aed" font-family="monospace">1.0000</text>
    <rect x="42" y="43.5" width="17" height="6" rx="1.5" fill="#e0e7ff"/>
    <text x="50.5" y="48" text-anchor="middle" font-size="3.5" fill="#7c3aed" font-family="sans-serif">inch</text>
    <rect x="3" y="54" width="58" height="8" rx="2" fill="#f5f3ff"/>
    <text x="5" y="59.5" font-size="2.8" fill="#555" font-family="sans-serif">1 mm = 0.03937 in  ·  1 in = 25.4 mm</text>
  </svg>`,

  "pen-plotter": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#fffef5"/>
    <rect width="64" height="10" rx="4" fill="#2d6a4f"/>
    <rect y="6" width="64" height="4" fill="#2d6a4f"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="4" fill="white" font-family="sans-serif">Pen Plotter</text>
    <rect x="4" y="11" width="56" height="51" fill="white" stroke="#e0e0d0" stroke-width="0.5"/>
    <circle cx="32" cy="37" r="21" fill="none" stroke="#2d6a4f" stroke-width="0.7"/>
    <circle cx="32" cy="37" r="15" fill="none" stroke="#40916c" stroke-width="0.5"/>
    <circle cx="32" cy="37" r="9" fill="none" stroke="#52b788" stroke-width="0.5"/>
    <line x1="32" y1="16" x2="32" y2="58" stroke="#2d6a4f" stroke-width="0.5"/>
    <line x1="11" y1="37" x2="53" y2="37" stroke="#2d6a4f" stroke-width="0.5"/>
    <line x1="17" y1="22" x2="47" y2="52" stroke="#40916c" stroke-width="0.4"/>
    <line x1="47" y1="22" x2="17" y2="52" stroke="#40916c" stroke-width="0.4"/>
    <path d="M32,16 Q44,26 32,37 Q20,26 32,16" fill="none" stroke="#1b4332" stroke-width="0.7"/>
    <path d="M32,58 Q20,48 32,37 Q44,48 32,58" fill="none" stroke="#1b4332" stroke-width="0.7"/>
    <path d="M11,37 Q21,25 32,37 Q21,49 11,37" fill="none" stroke="#1b4332" stroke-width="0.7"/>
    <path d="M53,37 Q43,49 32,37 Q43,25 53,37" fill="none" stroke="#1b4332" stroke-width="0.7"/>
    <circle cx="32" cy="37" r="1.5" fill="#2d6a4f"/>
  </svg>`,

  "calendar": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#fff"/>
    <rect width="64" height="10" rx="4" fill="#ef476f"/>
    <rect y="6" width="64" height="4" fill="#ef476f"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="4" fill="white" font-family="sans-serif">Calendrier</text>
    <rect x="0" y="10" width="64" height="8" fill="#c9184a"/>
    <text x="32" y="16" text-anchor="middle" font-size="4.5" fill="white" font-family="sans-serif">Mai 2026</text>
    <text x="5" y="24" font-size="3" fill="#ef476f" font-family="sans-serif">L</text>
    <text x="13" y="24" font-size="3" fill="#ef476f" font-family="sans-serif">M</text>
    <text x="21" y="24" font-size="3" fill="#ef476f" font-family="sans-serif">M</text>
    <text x="29" y="24" font-size="3" fill="#ef476f" font-family="sans-serif">J</text>
    <text x="37" y="24" font-size="3" fill="#ef476f" font-family="sans-serif">V</text>
    <text x="45" y="24" font-size="3" fill="#aaa" font-family="sans-serif">S</text>
    <text x="53" y="24" font-size="3" fill="#aaa" font-family="sans-serif">D</text>
    <text x="5" y="31" font-size="3.5" fill="#333" font-family="sans-serif">1</text>
    <text x="13" y="31" font-size="3.5" fill="#333" font-family="sans-serif">2</text>
    <text x="21" y="31" font-size="3.5" fill="#333" font-family="sans-serif">3</text>
    <text x="29" y="31" font-size="3.5" fill="#333" font-family="sans-serif">4</text>
    <rect x="34" y="27" width="14" height="4.5" rx="1" fill="#ffd6e7"/>
    <text x="36" y="30.5" font-size="2.8" fill="#c9184a" font-family="sans-serif">Livraison</text>
    <text x="53" y="31" font-size="3.5" fill="#bbb" font-family="sans-serif">7</text>
    <text x="5" y="38" font-size="3.5" fill="#333" font-family="sans-serif">8</text>
    <text x="13" y="38" font-size="3.5" fill="#333" font-family="sans-serif">9</text>
    <circle cx="21" cy="36.5" r="4" fill="#ef476f"/>
    <text x="21" y="38" text-anchor="middle" font-size="3.5" fill="white" font-family="sans-serif">10</text>
    <text x="29" y="38" font-size="3.5" fill="#333" font-family="sans-serif">11</text>
    <rect x="34" y="34" width="14" height="4.5" rx="1" fill="#ffefc4"/>
    <text x="36" y="37.5" font-size="2.8" fill="#c9184a" font-family="sans-serif">Usinage</text>
    <text x="53" y="38" font-size="3.5" fill="#bbb" font-family="sans-serif">14</text>
    <text x="5" y="45" font-size="3.5" fill="#333" font-family="sans-serif">15</text>
    <text x="13" y="45" font-size="3.5" fill="#333" font-family="sans-serif">16</text>
    <text x="21" y="45" font-size="3.5" fill="#333" font-family="sans-serif">17</text>
    <text x="29" y="45" font-size="3.5" fill="#333" font-family="sans-serif">18</text>
    <rect x="34" y="41" width="22" height="4.5" rx="1" fill="#d0f4de"/>
    <text x="36" y="44.5" font-size="2.8" fill="#2d6a4f" font-family="sans-serif">Assemblage</text>
    <text x="5" y="52" font-size="3.5" fill="#333" font-family="sans-serif">22</text>
    <text x="13" y="52" font-size="3.5" fill="#333" font-family="sans-serif">23</text>
    <text x="21" y="52" font-size="3.5" fill="#333" font-family="sans-serif">24</text>
    <text x="29" y="52" font-size="3.5" fill="#333" font-family="sans-serif">25</text>
    <text x="37" y="52" font-size="3.5" fill="#333" font-family="sans-serif">26</text>
    <text x="5" y="59" font-size="3.5" fill="#333" font-family="sans-serif">29</text>
    <text x="13" y="59" font-size="3.5" fill="#333" font-family="sans-serif">30</text>
    <text x="21" y="59" font-size="3.5" fill="#333" font-family="sans-serif">31</text>
  </svg>`,

  "speed-o-meter": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#0d1117"/>
    <rect width="64" height="10" rx="4" fill="#161b22"/>
    <rect y="6" width="64" height="4" fill="#161b22"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="4" fill="#8b949e" font-family="sans-serif">Speed-O-Meter</text>
    <path d="M10,46 A24,24 0 0,1 54,46" fill="none" stroke="#21262d" stroke-width="5" stroke-linecap="round"/>
    <path d="M10,46 A24,24 0 0,1 23,22" fill="none" stroke="#238636" stroke-width="5" stroke-linecap="butt" opacity="0.8"/>
    <path d="M23,22 A24,24 0 0,1 41,16" fill="none" stroke="#e3b341" stroke-width="5" stroke-linecap="butt" opacity="0.8"/>
    <path d="M41,16 A24,24 0 0,1 54,46" fill="none" stroke="#f85149" stroke-width="5" stroke-linecap="butt" opacity="0.8"/>
    <line x1="10" y1="46" x2="13.5" y2="42.5" stroke="#8b949e" stroke-width="0.8"/>
    <line x1="17" y1="26" x2="19.5" y2="29" stroke="#8b949e" stroke-width="0.8"/>
    <line x1="32" y1="16" x2="32" y2="20" stroke="#8b949e" stroke-width="0.8"/>
    <line x1="47" y1="26" x2="44.5" y2="29" stroke="#8b949e" stroke-width="0.8"/>
    <line x1="54" y1="46" x2="50.5" y2="42.5" stroke="#8b949e" stroke-width="0.8"/>
    <line x1="32" y1="44" x2="45" y2="23" stroke="#f0f6fc" stroke-width="1.4" stroke-linecap="round"/>
    <circle cx="32" cy="44" r="3.5" fill="#21262d" stroke="#58a6ff" stroke-width="1.2"/>
    <text x="32" y="57" text-anchor="middle" font-size="7" fill="#58a6ff" font-family="monospace">3600</text>
    <text x="32" y="62.5" text-anchor="middle" font-size="3" fill="#8b949e" font-family="sans-serif">mm/min</text>
  </svg>`,

  "sketch-studio": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#fafafa"/>
    <rect width="64" height="10" rx="4" fill="#f97316"/>
    <rect y="6" width="64" height="4" fill="#f97316"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="4" fill="white" font-family="sans-serif">Sketch Studio</text>
    <rect x="2" y="11" width="9" height="52" fill="#f1f5f9"/>
    <line x1="4" y1="16" x2="9" y2="21" stroke="#f97316" stroke-width="1.5"/>
    <circle cx="4" cy="16" r="1.2" fill="#f97316"/>
    <rect x="4" y="25" width="5" height="4" fill="none" stroke="#64748b" stroke-width="0.8"/>
    <circle cx="6.5" cy="33" r="2.5" fill="none" stroke="#64748b" stroke-width="0.8"/>
    <line x1="4" y1="39" x2="9" y2="39" stroke="#64748b" stroke-width="0.8"/>
    <circle cx="6.5" cy="45" r="1.5" fill="#64748b" opacity="0.4"/>
    <rect x="12" y="11" width="51" height="52" fill="white" stroke="#e2e8f0" stroke-width="0.5"/>
    <circle cx="18" cy="19" r="0.5" fill="#cbd5e1"/>
    <circle cx="25" cy="19" r="0.5" fill="#cbd5e1"/>
    <circle cx="32" cy="19" r="0.5" fill="#cbd5e1"/>
    <circle cx="39" cy="19" r="0.5" fill="#cbd5e1"/>
    <circle cx="46" cy="19" r="0.5" fill="#cbd5e1"/>
    <circle cx="53" cy="19" r="0.5" fill="#cbd5e1"/>
    <circle cx="18" cy="26" r="0.5" fill="#cbd5e1"/>
    <circle cx="25" cy="26" r="0.5" fill="#cbd5e1"/>
    <circle cx="32" cy="26" r="0.5" fill="#cbd5e1"/>
    <circle cx="39" cy="26" r="0.5" fill="#cbd5e1"/>
    <circle cx="46" cy="26" r="0.5" fill="#cbd5e1"/>
    <circle cx="53" cy="26" r="0.5" fill="#cbd5e1"/>
    <rect x="19" y="29" width="30" height="20" fill="none" stroke="#1e293b" stroke-width="1"/>
    <line x1="34" y1="24" x2="34" y2="54" stroke="#ef4444" stroke-width="0.6" stroke-dasharray="2,1.5"/>
    <line x1="14" y1="39" x2="56" y2="39" stroke="#ef4444" stroke-width="0.6" stroke-dasharray="2,1.5"/>
    <circle cx="34" cy="39" r="6" fill="none" stroke="#1e293b" stroke-width="1"/>
    <line x1="19" y1="55" x2="49" y2="55" stroke="#3b82f6" stroke-width="0.7"/>
    <line x1="19" y1="53.5" x2="19" y2="56.5" stroke="#3b82f6" stroke-width="0.7"/>
    <line x1="49" y1="53.5" x2="49" y2="56.5" stroke="#3b82f6" stroke-width="0.7"/>
    <text x="34" y="61" text-anchor="middle" font-size="3" fill="#3b82f6" font-family="monospace">30.0</text>
  </svg>`,

  "quiz-francais": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#f8fafc"/>
    <rect width="64" height="10" rx="4" fill="#002395"/>
    <rect y="6" width="64" height="4" fill="#002395"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <rect x="44" y="1" width="8" height="9" rx="0" fill="white"/>
    <rect x="52" y="1" width="12" height="9" rx="0" fill="#ed2939"/>
    <rect x="56" y="1" width="8" height="9" rx="4" fill="#ed2939"/>
    <text x="28" y="7.5" text-anchor="middle" font-size="4" fill="white" font-family="sans-serif">Quiz Français</text>
    <rect x="4" y="12" width="56" height="3" rx="1.5" fill="#e2e8f0"/>
    <rect x="4" y="12" width="35" height="3" rx="1.5" fill="#002395"/>
    <text x="60" y="15" text-anchor="end" font-size="2.8" fill="#64748b" font-family="sans-serif">7/12</text>
    <rect x="4" y="17" width="56" height="18" rx="2" fill="#eff6ff" stroke="#bfdbfe" stroke-width="0.8"/>
    <text x="32" y="23" text-anchor="middle" font-size="3.5" fill="#1e40af" font-family="sans-serif">Conjuguez au passé composé :</text>
    <text x="32" y="30" text-anchor="middle" font-size="5.5" fill="#1e3a8a" font-family="sans-serif">« partir »</text>
    <rect x="4" y="37" width="56" height="6.5" rx="2" fill="#dcfce7" stroke="#86efac" stroke-width="0.8"/>
    <text x="8" y="42" font-size="3.5" fill="#166534" font-family="sans-serif">✓  je suis parti(e)</text>
    <rect x="4" y="45" width="56" height="6.5" rx="2" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="0.8"/>
    <text x="8" y="50" font-size="3.5" fill="#475569" font-family="sans-serif">    j'ai parti</text>
    <rect x="4" y="53" width="56" height="6.5" rx="2" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="0.8"/>
    <text x="8" y="58" font-size="3.5" fill="#475569" font-family="sans-serif">    j'allais parti</text>
    <text x="60" y="63" text-anchor="end" font-size="2.8" fill="#64748b" font-family="sans-serif">Score: 6/7</text>
  </svg>`,

  "mathieuconnery": `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#0f0f23"/>
    <rect width="64" height="10" rx="4" fill="#1a1a3e"/>
    <rect y="6" width="64" height="4" fill="#1a1a3e"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="39" y="7.5" text-anchor="middle" font-size="3.8" fill="#9999cc" font-family="sans-serif">mathieuconnery</text>
    <circle cx="14" cy="20" r="0.6" fill="#fff" opacity="0.7"/>
    <circle cx="28" cy="15" r="0.5" fill="#fff" opacity="0.5"/>
    <circle cx="48" cy="17" r="0.7" fill="#fff" opacity="0.9"/>
    <circle cx="56" cy="22" r="0.4" fill="#fff" opacity="0.5"/>
    <circle cx="7" cy="30" r="0.5" fill="#fff" opacity="0.6"/>
    <circle cx="60" cy="32" r="0.6" fill="#fff" opacity="0.5"/>
    <circle cx="32" cy="29" r="11" fill="#1a1a4e" stroke="#6366f1" stroke-width="1.2"/>
    <circle cx="32" cy="27" r="4.5" fill="#4a4a8a"/>
    <path d="M22,40 Q32,34 42,40" fill="#4a4a8a"/>
    <text x="32" y="47" text-anchor="middle" font-size="4" fill="#e0e0ff" font-family="sans-serif">Mathieu C.</text>
    <text x="32" y="52" text-anchor="middle" font-size="3" fill="#9999cc" font-family="sans-serif">Dev &amp; Maker</text>
    <line x1="8" y1="55" x2="56" y2="55" stroke="#333366" stroke-width="0.6"/>
    <text x="13" y="60" text-anchor="middle" font-size="3" fill="#6366f1" font-family="sans-serif">About</text>
    <text x="27" y="60" text-anchor="middle" font-size="3" fill="#6366f1" font-family="sans-serif">Work</text>
    <text x="41" y="60" text-anchor="middle" font-size="3" fill="#6366f1" font-family="sans-serif">Blog</text>
    <text x="55" y="60" text-anchor="middle" font-size="3" fill="#6366f1" font-family="sans-serif">Contact</text>
  </svg>`,
};

Fred.getIcon = function (id) {
  return Fred.ICONS[id] || `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="4" fill="#334155"/>
    <rect width="64" height="10" rx="4" fill="#1e293b"/>
    <rect y="6" width="64" height="4" fill="#1e293b"/>
    <circle cx="5" cy="5" r="1.8" fill="#ff5f57"/>
    <circle cx="10" cy="5" r="1.8" fill="#ffbd2e"/>
    <circle cx="15" cy="5" r="1.8" fill="#28c940"/>
    <text x="32" y="40" text-anchor="middle" font-size="18" fill="#94a3b8" font-family="sans-serif">${(id[0]||'?').toUpperCase()}</text>
  </svg>`;
};
