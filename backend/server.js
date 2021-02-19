import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import dBConnect from "./config/db.js";
import products from "../backend/products.js";
dotenv.config();
dBConnect();
const PORT = process.env.PORT;

const app = express(); //instantiate

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, console.log("server running on port 5000".yellow));
