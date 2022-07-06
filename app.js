const express = require("express");
const mongoose = require("mongoose");
const connectToDb = require("./db.js");
const router = require("./routes/book.routes.js");
require("dotenv").config();
var app = express();
//a function to connect to database
connectToDb();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",

    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", function (request, response) {
  response.send("Hello World!");
});
app.use("/books", router);
app.listen(process.env.PORT, function () {
  console.log("Started application on port %d", process.env.PORT);
});
