const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
  try {
    // console.log(process.env.DB_URI)
    await mongoose.connect("mongodb+srv://demo_user:321321@todo.1uspd.mongodb.net/?retryWrites=true&w=majority&appName=todo");
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connect;
