require("dotenv").config();
require("./4Utils/db");
const express = require("express");

const port = process.env.Port || 5000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Blogger API</p>");
});

app.listen(port, () => {
  console.log(`port is running on http://localhost:${port}`);
});
