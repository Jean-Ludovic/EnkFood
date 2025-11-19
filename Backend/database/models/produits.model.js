
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const produitSchema = schema({
  name: {
    type: String,
    required: [true, "Le nom est requis !"],
    minLength: [2, "Le nom est trop court ! "],
  },
  note: {
    type: String,
    required: [true, "Les notes sont requises !"],
    minLength: [4, "Les notes sont trop courtes ! "],
  },
  image: {
    type: String,
    required: [true, "L'url de l'image est requise !"],
  },
});

const Produit = mongoose.model("Produit", produitSchema,"Produits");

module.exports = Produit;
