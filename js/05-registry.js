// Load the app registry from apps.json (three URL variants for local/CDN/file).
Fred.loadApps = async function () {
  const tried = [];
  for (const url of ["/apps.json", "./apps.json", "apps.json"]) {
    try {
      const r = await fetch(url, { cache: "no-store" });
      if (!r.ok) { tried.push(url + " -> " + r.status); continue; }
      const data = await r.json();
      if (data && Array.isArray(data.apps)) {
        Fred.state.hasServer = url === "/apps.json";
        return data.apps;
      }
    } catch (e) {
      tried.push(url + " -> " + e.message);
    }
  }
  Fred.showWelcome("Couldn't find apps.json. Tried:\n" + tried.join("\n"));
  return [];
};
