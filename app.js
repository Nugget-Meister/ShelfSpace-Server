const express = require("express");
const cors = require("cors");
const app = express();
const bookController = require("./controllers/booksController.js");

app.use(cors());
app.use(express.json());

app.use("/books", bookController);

app.get("/", (req, res) => {
  res.send("Welcome to Shelf Space");
});

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});
module.exports = app;
