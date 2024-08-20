// Packages NPM
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Modules natifs
const path = require("path");

// Modules locaux
require("./database");
const routes = require("./routes");

const app = express();

app.use(morgan("short"));
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen((PORT = 5000), () =>
  console.log(`Server is on http://localhost:${PORT}`)
);
