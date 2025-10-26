const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

// Chargement base de données
require("./database");

const app = express();
app.use(morgan("short"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======== ROUTES API ========
const routes = require("./routes");
app.use("/api", routes);

// ======== SERVIR LE FRONTEND (Vite build) ========
const clientDist = path.join(__dirname, "../Frontend/dist");
app.use(express.static(clientDist));

// Catch-all pour les routes SPA React
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next(); // ne pas interférer avec l’API
  res.sendFile(path.join(clientDist, "index.html"));
});

// ======== DÉMARRAGE DU SERVEUR ========
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
