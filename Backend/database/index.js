const mongoose = require("mongoose");

mongoose
  .connect("mongodb://admin:password@127.0.0.1:27017/ProjetEnkFood")
  .then(() => console.log("Connexion DB établie !"))
  .catch((e) => console.log(e));
