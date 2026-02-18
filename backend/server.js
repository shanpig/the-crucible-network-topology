const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());  // 👈 enable CORS for all origins

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "backend", pid: process.pid, time: new Date().toISOString() });
});

app.get("/api/hello", (_req, res) => {
  res.json({ msg: "Hello from backend!", pid: process.pid, time: new Date().toISOString() });
});

// Intentional crash endpoint
app.post("/crash", (_req, res) => {
  // Respond first so caller sees success, then crash.
  res.json({ ok: true, action: "backend will crash now", pid: process.pid });

  // Crash the process intentionally (more reliable than "divide by zero" in JS).
  setTimeout(() => {
    console.error("💥 Backend intentional crash triggered");
    process.exit(1);
  }, 100);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://0.0.0.0:${PORT} (pid=${process.pid})`);
});
