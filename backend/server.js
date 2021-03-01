import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import dBConnect from "./config/db.js";
import products from "../backend/products.js";
import productRoutes from "./Routes/productRoutes.js";
dotenv.config();
dBConnect();
const PORT = process.env.PORT;

const app = express(); //instantiate

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.use("/api/products", productRoutes);
app.use((err, req, res, next) => {
  const error = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  });
});
app.listen(PORT, console.log("server running on port 5000".yellow));
