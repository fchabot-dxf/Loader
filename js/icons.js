// SVG icon registry — individual icons in js/icons/*.js
Fred.ICONS = Fred.ICONS || {};

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
