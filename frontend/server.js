const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Where the frontend should find the backend.
// In Docker/K8s you’ll set BACKEND_URL to service DNS later.
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

app.use(express.static(path.join(__dirname, "public")));

app.get("/config", (_req, res) => {
  res.json({ backendUrl: BACKEND_URL, pid: process.pid, time: new Date().toISOString() });
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "frontend", pid: process.pid, time: new Date().toISOString() });
});

// Intentional crash endpoint for frontend server
app.post("/crash", (_req, res) => {
  res.json({ ok: true, action: "frontend will crash now", pid: process.pid });

  setTimeout(() => {
    console.error("💥 Frontend intentional crash triggered");
    process.exit(1);
  }, 100);
});

app.listen(PORT, () => {
  console.log(`✅ Frontend running on http://0.0.0.0:${PORT} (pid=${process.pid})`);
  console.log(`🔗 Backend URL = ${BACKEND_URL}`);
});
