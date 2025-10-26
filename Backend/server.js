// Packages NPM
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Modules natifs
const path = require("path");

// Modules locaux

require("./database");//Chargement DB
const routes = require("./routes");//Routes

const app = express();

app.use(morgan("short"));
app.use(cors());//pas nécessaire en prod

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Healthcheck
app.get("/health", (_req, res) => res.json({ ok: true }));

// ===== Servir le build Vite (Frontend/dist) =====
const clientDist = path.join(__dirname, "../Frontend/dist");
app.use(express.static(clientDist));
// Fallback SPA : toutes les routes non-API → index.html
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(clientDist, "index.html"));
});

// ===== Port =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));