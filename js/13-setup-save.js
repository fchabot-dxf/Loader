// Setup view: dirty detection, save (to server or localStorage), discard.
Fred.updateSetupDirty = function () {
  const d = document.getElementById("setup-dirty");
  if (!d) return;
  d.textContent = Fred.setupIsDirty() ? "unsaved changes" : "";
};

Fred.setupIsDirty = function () {
  if (!Fred.state.setupDraft) return false;
  if (Fred.state.apps.length !== Fred.state.setupDraft.apps.length) return true;
  for (let i = 0; i < Fred.state.apps.length; i++) {
    if (JSON.stringify(Fred.state.apps[i]) !== JSON.stringify(Fred.state.setupDraft.apps[i])) {
      return true;
    }
  }
  return false;
};

Fred.saveSetup = async function () {
  if (!Fred.state.setupDraft) return;
  const payload = { apps: Fred.state.setupDraft.apps };

  if (Fred.state.hasServer) {
    try {
      const r = await fetch("/apps.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error("server returned " + r.status);
      const updated = await r.json();
      Fred.state.apps = updated.apps || Fred.state.setupDraft.apps;
    } catch (e) {
      alert("Couldn't save to server: " + e.message + "\nKept your edits in-browser.");
      Fred.state.apps = Fred.state.setupDraft.apps;
      localStorage.setItem(Fred.APPS_OVERRIDE_KEY, JSON.stringify(payload));
    }
  } else {
    Fred.state.apps = Fred.state.setupDraft.apps;
    localStorage.setItem(Fred.APPS_OVERRIDE_KEY, JSON.stringify(payload));
  }

  Fred.renderSidebar();
  Fred.renderSetup();
  Fred.updateSetupDirty();
};

Fred.discardSetup = function () {
  if (Fred.setupIsDirty() && !confirm("Discard unsaved changes?")) return;
  Fred.closeSetup();
};
