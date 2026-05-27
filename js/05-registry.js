// Load the app registry.
//
// Source-of-truth chain (first hit wins):
//   1. Worker  ── GET {WORKER_URL}/loader/apps  (canonical, cross-device)
//   2. localStorage["fred.appsOverride"]        (legacy, this browser only)
//   3. /apps.json                               (bundled defaults / first-run seed)
//
// On first load on a new device, the worker returns {apps: []}. We then seed
// it from either the local override (preserving old layouts) or apps.json
// (truly fresh start) and push the result back to the worker.

Fred.WORKER_APPS_URL = function () {
  return Fred.WORKER_URL + Fred.WORKER_APPS_PATH;
};

Fred.fetchAppsFromWorker = async function () {
  const r = await fetch(Fred.WORKER_APPS_URL(), { cache: "no-store" });
  if (!r.ok) throw new Error("worker returned " + r.status);
  const data = await r.json();
  if (!data || !Array.isArray(data.apps)) throw new Error("worker payload missing apps[]");
  return data.apps;
};

Fred.saveAppsToWorker = async function (apps) {
  const r = await fetch(Fred.WORKER_APPS_URL(), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apps }),
  });
  if (!r.ok) throw new Error("worker returned " + r.status);
  return r.json();
};

Fred.fetchAppsFromLocalStorage = function () {
  const raw = localStorage.getItem(Fred.APPS_OVERRIDE_KEY);
  if (!raw) return null;
  try {
    const data = JSON.parse(raw);
    return data && Array.isArray(data.apps) ? data.apps : null;
  } catch (_) { return null; }
};

Fred.fetchAppsFromBundle = async function () {
  const tried = [];
  for (const url of ["/apps.json", "./apps.json", "apps.json"]) {
    try {
      const r = await fetch(url, { cache: "no-store" });
      if (!r.ok) { tried.push(url + " -> " + r.status); continue; }
      const data = await r.json();
      if (data && Array.isArray(data.apps)) return data.apps;
    } catch (e) {
      tried.push(url + " -> " + e.message);
    }
  }
  throw new Error("Couldn't find apps.json. Tried:\n" + tried.join("\n"));
};

Fred.loadApps = async function () {
  // 1. Worker (canonical source of truth)
  try {
    const apps = await Fred.fetchAppsFromWorker();
    Fred.state.hasServer = true;
    if (apps.length > 0) return apps;
    // Worker is reachable but empty — seed it from the best available source.
    const seed = Fred.fetchAppsFromLocalStorage() || await Fred.fetchAppsFromBundle();
    try {
      await Fred.saveAppsToWorker(seed);
      console.log("[loader] seeded worker with", seed.length, "apps");
    } catch (e) {
      console.warn("[loader] couldn't seed worker:", e.message);
    }
    return seed;
  } catch (workerErr) {
    console.warn("[loader] worker unreachable, falling back:", workerErr.message);
    Fred.state.hasServer = false;
  }

  // 2. localStorage (legacy, browser-local fallback)
  const local = Fred.fetchAppsFromLocalStorage();
  if (local) return local;

  // 3. apps.json (bundled defaults)
  try {
    return await Fred.fetchAppsFromBundle();
  } catch (e) {
    Fred.showWelcome(e.message);
    return [];
  }
};
