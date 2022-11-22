require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.Local_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("Db is connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
