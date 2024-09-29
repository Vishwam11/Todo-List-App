const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connect = require("./src/config/connect");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

connect();

app.use("/todo", require("./src/routes/todoRoutes"));

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});
