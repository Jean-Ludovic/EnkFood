const Produit = require("../database/models/produits.model");

exports.getProduits = () => {
  return Produit.find().sort({ _id: -1 });
};

exports.getProduit = (produitId) => {
  return Produit.findById(produitId);
};

exports.postProduit = (body) => {
  const newProduit = new Produit(body);
  return newProduit.save();
};

exports.deleteProduit = (produitId) => {
  return Produit.findByIdAndDelete(produitId).exec();
};

exports.updateProduit = (produitId, produit) => {
  return Produit.findByIdAndUpdate(produitId, { $set: produit });
};
