// Send the "hello" postMessage to a freshly-loaded app iframe.
// fred-host.js inside the app responds with "hello-ack" if it's loader-aware.
Fred.sendHandshake = function (app) {
  const frame = document.getElementById("app-frame");
  const win = frame.contentWindow;
  if (!win) return;
  if (Fred.state.pendingAck) clearTimeout(Fred.state.pendingAck.timer);
  try {
    win.postMessage({
      protocol: Fred.PROTOCOL, type: "hello",
      app: { id: app.id, name: app.name },
      project: Fred.state.project,
    }, "*");
  } catch (e) { console.warn("[loader] handshake failed:", e); }
  Fred.state.pendingAck = {
    id: app.id,
    timer: setTimeout(() => { Fred.state.pendingAck = null; }, Fred.HANDSHAKE_TIMEOUT_MS),
  };
};
