const express = require("express");
const cors = require("cors");
const app = express();
const bookController = require("./controllers/booksController");

app.use(cors());
app.use(express.json());


app.get("/books", async (req, res) => {
  try {

    const books = await bookController.fetchBooksFromDatabase();

    
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to ShelfSpace");
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.use((req, res) => {
  res
    .status(404)
    .json({ status: "BAD", data: { error: "(app.js) No book to read" } });
});

module.exports = app;
