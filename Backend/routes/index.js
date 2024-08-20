const router = require("express").Router();
const routerProduits = require("./produits.routes");

router.get("/", (req, res) => {
  res.end("Coucou !");
});

router.use("/produits", routerProduits);

module.exports = router;
