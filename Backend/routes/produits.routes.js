const {
  listeProduits,
  unProduit,
  ajouterUnProduit,
  supprimerUnProduit,
  modifierUnProduit,
} = require("../controllers/produits.controller");
const Produit = require("../database/models/produits.model");

const router = require("express").Router();

router.get("/", listeProduits);
router.get("/:produitId", unProduit);
router.post("/", ajouterUnProduit);
router.delete("/:produitId", supprimerUnProduit);
router.patch("/:produitId", modifierUnProduit);

module.exports = router;
