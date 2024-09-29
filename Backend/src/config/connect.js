const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
  try {
    // console.log(process.env.DB_URI)
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connect;
