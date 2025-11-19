// Backend/seed/seedProducts.js

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const products = require("../data/products");
const Product = require("../database/models/Product");
const connectDB = require("../config/db");

dotenv.config();

const seedProducts = async () => {
  try {
    await connectDB(); // connexion à MongoDB

    // On vide la collection pour repartir propre
    await Product.deleteMany();
    console.log("Collection products vidée ✅");

    // On insère nos produits de base
    await Product.insertMany(products);
    console.log("Produits insérés avec succès ✅");

    process.exit(0);
  } catch (error) {
    console.error("Erreur lors du seed:", error);
    process.exit(1);
  }
};

seedProducts();
