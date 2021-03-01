import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import dBConnect from "./config/db.js";
import products from "../backend/products.js";
import productRoutes from "./Routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js ";

dotenv.config();
dBConnect();
const PORT = process.env.PORT;

const app = express(); //instantiate

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.use("/api/products", productRoutes);
app.use(notFound);

app.use(errorHandler);
app.listen(PORT, console.log("server running on port 5000".yellow));
