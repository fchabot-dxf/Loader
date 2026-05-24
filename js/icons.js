// SVG icon map — keyed by app id.
// Each icon is a self-contained 32×32 SVG with its own accent colour
// and dark background. Designed to render cleanly at 24–56 px.
Fred.ICONS = {};

Fred.ICONS["DDCS-Studio"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#2d1510"/>
  <line x1="5" y1="22" x2="27" y2="22" stroke="#ff6b4a" stroke-width="0.8" opacity="0.22"/>
  <line x1="16" y1="5" x2="16" y2="27" stroke="#ff6b4a" stroke-width="0.8" opacity="0.22"/>
  <path d="M6 22 L10 11 L16 18 L21 9 L26 13" stroke="#ff6b4a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="26" cy="13" r="3.2" fill="#ff6b4a"/>
  <circle cx="26" cy="13" r="1.4" fill="#2d1510"/>
</svg>`;

Fred.ICONS["b-spline-generator-web-addin"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#1a1530"/>
  <line x1="5" y1="23" x2="11" y2="9" stroke="#9b8ff5" stroke-width="1" opacity="0.35" stroke-dasharray="2 2"/>
  <line x1="21" y1="23" x2="27" y2="9" stroke="#9b8ff5" stroke-width="1" opacity="0.35" stroke-dasharray="2 2"/>
  <path d="M5 23 C11 9, 21 23, 27 9" stroke="#9b8ff5" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="5" cy="23" r="2.5" fill="#9b8ff5"/>
  <circle cx="27" cy="9" r="2.5" fill="#9b8ff5"/>
  <circle cx="16" cy="16" r="1.8" fill="#9b8ff5" opacity="0.5"/>
</svg>`;

Fred.ICONS["SVG creator"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#2d1f00"/>
  <path d="M7 25 C10 14, 22 18, 25 7" stroke="#f5a623" stroke-width="2" stroke-linecap="round"/>
  <path d="M21 10 L25 7 L28 10 L25 14 Z" fill="#f5a623"/>
  <path d="M25 14 L23 19 L20 16 Z" fill="#f5a623" opacity="0.6"/>
  <rect x="4.5" y="22.5" width="5" height="5" rx="1.5" fill="none" stroke="#f5a623" stroke-width="1.8"/>
</svg>`;

Fred.ICONS["geometric CALCULATOR"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#0d2a1e"/>
  <path d="M7 25 L16 7 L25 25 Z" stroke="#4ecba0" stroke-width="2" stroke-linejoin="round"/>
  <path d="M7 25 L25 25" stroke="#4ecba0" stroke-width="2" stroke-linecap="round"/>
  <path d="M10.5 25 A4.5 4.5 0 0 1 13 21" stroke="#4ecba0" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="16" y1="7" x2="16" y2="25" stroke="#4ecba0" stroke-width="1" opacity="0.35" stroke-dasharray="2 2"/>
</svg>`;

Fred.ICONS["calculator"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#2d2300"/>
  <path d="M8 25 C8 25 9 17 16 17 C23 17 24 25 24 25 Z" fill="#ffd54f"/>
  <rect x="5" y="23" width="22" height="4.5" rx="2.5" fill="#ffd54f"/>
  <line x1="16" y1="17" x2="16" y2="25" stroke="#2d2300" stroke-width="1.5" opacity="0.4"/>
  <line x1="9" y1="22" x2="23" y2="22" stroke="#2d2300" stroke-width="1" opacity="0.3"/>
</svg>`;

Fred.ICONS["step-editor"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#0d1a2d"/>
  <path d="M16 5 L26 11 L16 17 L6 11 Z" fill="#5b9bd5" opacity="0.75"/>
  <path d="M26 11 L26 21 L16 27 L16 17 Z" fill="#5b9bd5" opacity="0.38"/>
  <path d="M6 11 L16 17 L16 27 L6 21 Z" fill="#5b9bd5" opacity="0.55"/>
  <path d="M16 5 L26 11 L16 17 L6 11 Z" stroke="#5b9bd5" stroke-width="1.2" stroke-linejoin="round"/>
  <line x1="16" y1="17" x2="16" y2="27" stroke="#5b9bd5" stroke-width="1.2"/>
  <line x1="26" y1="11" x2="26" y2="21" stroke="#5b9bd5" stroke-width="1.2"/>
  <line x1="6"  y1="11" x2="6"  y2="21" stroke="#5b9bd5" stroke-width="1.2"/>
  <line x1="6"  y1="21" x2="16" y2="27" stroke="#5b9bd5" stroke-width="1.2"/>
  <line x1="26" y1="21" x2="16" y2="27" stroke="#5b9bd5" stroke-width="1.2"/>
</svg>`;

Fred.ICONS["unitconverter"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#002d30"/>
  <path d="M8 13 A9 9 0 0 1 24 13" stroke="#26c6da" stroke-width="2.2" stroke-linecap="round"/>
  <polyline points="22,9 24,13 20,13" stroke="#26c6da" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24 19 A9 9 0 0 1 8 19" stroke="#26c6da" stroke-width="2.2" stroke-linecap="round"/>
  <polyline points="10,23 8,19 12,19" stroke="#26c6da" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

Fred.ICONS["pen-plotter"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#2d0a1a"/>
  <circle cx="7"  cy="21" r="2"   fill="#f06292"/>
  <circle cx="13" cy="14" r="2"   fill="#f06292"/>
  <circle cx="20" cy="18" r="2"   fill="#f06292"/>
  <circle cx="25" cy="11" r="2"   fill="#f06292"/>
  <path d="M7 21 L13 14 L20 18 L25 11" stroke="#f06292" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.45"/>
  <rect x="23" y="6"  width="4" height="9" rx="1.5" fill="#f06292"/>
  <path d="M23 15 L25 19 L27 15 Z" fill="#f06292"/>
</svg>`;

Fred.ICONS["calendar"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#1a2430"/>
  <rect x="5" y="9" width="22" height="18" rx="3" stroke="#90a4ae" stroke-width="2"/>
  <rect x="5" y="9" width="22" height="9"  rx="3" fill="#90a4ae" opacity="0.22"/>
  <rect x="5" y="15" width="22" height="3"       fill="#90a4ae" opacity="0.22"/>
  <rect x="10" y="5" width="3" height="7" rx="1.5" fill="#90a4ae"/>
  <rect x="19" y="5" width="3" height="7" rx="1.5" fill="#90a4ae"/>
  <rect x="9"    y="21" width="3" height="3" rx="1" fill="#90a4ae" opacity="0.7"/>
  <rect x="14.5" y="21" width="3" height="3" rx="1" fill="#90a4ae" opacity="0.7"/>
  <rect x="20"   y="21" width="3" height="3" rx="1" fill="#90a4ae" opacity="0.7"/>
</svg>`;

Fred.ICONS["speed-o-meter"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#2d1400"/>
  <path d="M6 23 A11 11 0 0 1 26 23" stroke="#ff7043" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="6"  y1="23" x2="7.5"  y2="19.5" stroke="#ff7043" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
  <line x1="16" y1="12" x2="16"   y2="14"   stroke="#ff7043" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
  <line x1="26" y1="23" x2="24.5" y2="19.5" stroke="#ff7043" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
  <line x1="16" y1="23" x2="22"   y2="14"   stroke="#ff7043" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="16" cy="23" r="2.5" fill="#ff7043"/>
</svg>`;

Fred.ICONS["sketch-studio"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#1e0d2d"/>
  <rect x="6"  y="13" width="16" height="6" rx="2.5" fill="#ba68c8"/>
  <rect x="6"  y="13" width="5"  height="6" rx="2.5" fill="#ce93d8"/>
  <path d="M22 13 L26 16 L22 19 Z" fill="#ffd54f"/>
  <line x1="10" y1="23" x2="22" y2="23" stroke="#ba68c8" stroke-width="1.5" stroke-linecap="round" opacity="0.55"/>
  <line x1="8"  y1="26" x2="24" y2="26" stroke="#ba68c8" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
</svg>`;

Fred.ICONS["quiz-francais"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#001a33"/>
  <path d="M5 7 H27 A2 2 0 0 1 29 9 V19 A2 2 0 0 1 27 21 H17 L12 27 L12 21 H5 A2 2 0 0 1 3 19 V9 A2 2 0 0 1 5 7 Z" fill="#42a5f5" opacity="0.18" stroke="#42a5f5" stroke-width="1.8"/>
  <text x="16" y="18" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#42a5f5" text-anchor="middle">FR</text>
</svg>`;

Fred.ICONS["mathieuconnery"] = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#0d2010"/>
  <line x1="6" y1="11" x2="22" y2="11" stroke="#66bb6a" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="6" y1="16" x2="19" y2="16" stroke="#66bb6a" stroke-width="2.2" stroke-linecap="round" opacity="0.7"/>
  <line x1="6" y1="21" x2="24" y2="21" stroke="#66bb6a" stroke-width="2.2" stroke-linecap="round" opacity="0.5"/>
  <path d="M25 6 L26.2 9.8 L30 11 L26.2 12.2 L25 16 L23.8 12.2 L20 11 L23.8 9.8 Z" fill="#66bb6a"/>
</svg>`;

Fred.ICONS._default = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#2a2a2a"/>
  <text x="16" y="21" font-family="system-ui,sans-serif" font-size="14" fill="#888" text-anchor="middle">★</text>
</svg>`;

Fred.getIcon = function (id) {
  return Fred.ICONS[id] || Fred.ICONS._default;
};
