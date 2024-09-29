const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
  try {
    // console.log(process.env.DB_URL)
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connect;
