const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI manquante. Configure-la dans Render.");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ Connexion MongoDB OK"))
  .catch((e) => {
    console.error("❌ Connexion MongoDB échouée:", e.message);
    process.exit(1);
  });
