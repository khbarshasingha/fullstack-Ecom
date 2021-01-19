const express = require("express");
const products = require("../backend/products");

const app = express(); //instantiate

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product.name);
});

app.listen(5000, console.log("server running on port 5000"));
