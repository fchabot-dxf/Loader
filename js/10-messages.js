// Inbound postMessage router — handles every message from app iframes.
window.addEventListener("message", (ev) => {
  const data = ev.data;
  if (!data || data.protocol !== Fred.PROTOCOL) return;

  switch (data.type) {
    case "hello-ack":
      if (Fred.state.pendingAck) {
        clearTimeout(Fred.state.pendingAck.timer);
        Fred.state.pendingAck = null;
      }
      console.log("[loader] app connected:", data.app);
      break;
    case "project-set":
      Fred.state.project = data.project || {};
      Fred.saveProject(); Fred.renderProjectName();
      break;
    case "project-merge":
      Fred.state.project = { ...Fred.state.project, ...(data.patch || {}) };
      Fred.saveProject(); Fred.renderProjectName(); Fred.broadcastProject();
      break;
    case "open-app":
      if (data.appId && Fred.state.apps.find(a => a.id === data.appId)) {
        Fred.openApp(data.appId);
      }
      break;
    case "go-home":
      Fred.goHome();
      break;
  }
});
