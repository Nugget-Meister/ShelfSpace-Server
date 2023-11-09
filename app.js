const express = require("express");
const cors = require("cors");
const app = express();
const bookController = require("./controllers/booksController");

app.use(cors());
app.use(express.json());

app.use("/books", bookController);

app.get("/", (req, res) => {
  res.send("welcome to shelfSpace ");
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.use((req, res) => {
  res
    .status(404)
    .json({ status: "BAD", data: { error: "(app.js) No book t read" } });
});

module.exports = app;
