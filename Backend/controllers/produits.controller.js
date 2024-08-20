const {
  getProduits,
  postProduit,
  getProduit,
  deleteProduit,
  updateProduit,
} = require("../queries/produits.queries");

exports.listeProduits = async (req, res, next) => {
  try {
    const data = await getProduits();
    res.send(data);
  } catch (error) {
    next(error);
  }
};

exports.ajouterUnProduit = async (req, res, next) => {
  const body = req.body;
  try {
    res.send(await postProduit(body));
  } catch (err) {
    next(err);
  }
};

exports.supprimerUnProduit = async (req, res, next) => {
  const produitId = req.params.produitId;
  try {
    res.send(await deleteProduit(produitId));
  } catch (err) {
    next(err);
  }
};

exports.modifierUnProduit = async (req, res, next) => {
  const produitId = req.params.produitId;
  const produit = req.body;
  try {
    res.send(await updateProduit(produitId, produit));
  } catch (err) {
    next(err);
  }
};

exports.unProduit = async (req, res, next) => {
  const produitId = req.params.produitId;
  try {
    res.send(await getProduit(produitId));
  } catch (err) {
    next(err);
  }
};
