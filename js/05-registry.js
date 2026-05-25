// Load the app registry — localStorage override first, then apps.json.
Fred.loadApps = async function () {
  // User-saved layout (from edit mode) takes priority over the bundled file.
  const override = localStorage.getItem(Fred.APPS_OVERRIDE_KEY);
  if (override) {
    try {
      const data = JSON.parse(override);
      if (data && Array.isArray(data.apps)) return data.apps;
    } catch (_) { /* bad JSON, fall through */ }
  }

  const tried = [];
  for (const url of ["/apps.json", "./apps.json", "apps.json"]) {
    try {
      const r = await fetch(url, { cache: "no-store" });
      if (!r.ok) { tried.push(url + " -> " + r.status); continue; }
      const data = await r.json();
      if (data && Array.isArray(data.apps)) {
        Fred.state.hasServer = false; // Cloudflare Pages is read-only; saves go to localStorage
        return data.apps;
      }
    } catch (e) {
      tried.push(url + " -> " + e.message);
    }
  }
  Fred.showWelcome("Couldn't find apps.json. Tried:\n" + tried.join("\n"));
  return [];
};
