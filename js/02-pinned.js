// Pinned set — which apps appear on the sidebar (per-PC, localStorage).
Fred.loadPinned = function () {
  try {
    const raw = localStorage.getItem(Fred.PINNED_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch { return new Set(); }
};
Fred.savePinned = function () {
  try { localStorage.setItem(Fred.PINNED_KEY, JSON.stringify([...Fred.state.pinned])); } catch {}
};
Fred.isPinned = function (id) { return Fred.state.pinned.has(id); };
