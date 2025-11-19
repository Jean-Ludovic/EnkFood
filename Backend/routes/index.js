const router = require("express").Router();
const routerProduits = require("./produits.routes");
const Produit = require("../models/produits.model"); 

router.get("/", (req, res) => {
  res.end("Coucou !");
});

router.get("/produits", async (req, res) => {
  try {
    const produits = await Produit.find().lean();
    // ✅ envoie un wrapper standard pour le front
    res.json({ data: produits });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});
module.exports = router;
