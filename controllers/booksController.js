const express = require("express");

const {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../queries/books.js");

const book = express.Router();

book.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneBook = await getOneBook(id);
  if (oneBook) {
    res.json(oneBook);
  } else {
    res.status(404).json({ error: "Not Found!" });
  }
});

book.get("/", async (req, res) => {
  const allBooks = await getAllBooks();
  if (allBooks[0]) {
    res.status(200).json({ success: true, data: { payload: allBooks } });
  } else {
    res.status(500).json({ success: false, data: { error: "Server Error " } });
  }
});

book.post("/", async (req, res) => {
  try {
    const createdBook = await createBook(req.body);
    res.json(createdBook);
  } catch (error) {
    res.status(404).json({ error: "Oh no cannot create" });
  }
});

book.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await deleteBook(id);
    if (deletedBook) {
      res.status(200).json({ success: true, payload: { data: deletedBook } });
    } else {
      res.status(404).json("Book not found");
    }
  } catch (err) {
    res.send(err);
  }
});

book.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBook = await updateBook(id, req.body);
  if (updatedBook.id) {
    res.status(200).json(updatedBook);
  } else {
    res.status(404).json("no book found with that id");
  }
});
