import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import Users from "./data/Users.js";
import products from "./products.js";
import User from "./models/UserModel.js";
import Orders from "./models/OrderModel.js";
import Product from "./models/ProductModel.js";
import dBConnect from "./config/db.js";
import Order from "./models/OrderModel.js";

dotenv.config();

dBConnect();
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //create an array of users and stores it in createdUSers var
    const createdUsers = await User.insertMany(Users);
    //extracts the admin details into adminUser var
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data imported ".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed !".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
