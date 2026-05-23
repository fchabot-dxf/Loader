// Load the app registry. Three sources, in order:
//   1. /apps.json     (serve.py or deployed CDN)
//   2. ./apps.json    (same file, relative path)
//   3. <script id="apps-inline">  (file:// double-click fallback)
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
  const inline = document.getElementById("apps-inline");
  if (inline) {
    try {
      const data = JSON.parse(inline.textContent);
      if (data && Array.isArray(data.apps)) return data.apps;
    } catch (e) { tried.push("inline -> " + e.message); }
  }
  Fred.showWelcome("Couldn't find apps.json. Tried:\n" + tried.join("\n"));
  return [];
};
