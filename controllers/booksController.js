const express = require("express");

const {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../queries/books.js");

const books = express.Router();

books.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`GET Rest for item ${id} received.`)
  const oneBook = await getOneBook(id);
  if (oneBook) {
    res.json(oneBook);
  } else {
    res.status(404).json({ error: "Not Found!" });
  }
});

books.get("/", async (req, res) => {
  console.log("GET Request received for all items.")
  const allBooks = await getAllBooks();
  if (allBooks[0]) {
    res.status(200).json({ success: true, data: { payload: allBooks } });
  } else {
    res.status(500).json({ success: false, data: { error: "Server Error " } });
  }
});

books.post("/", async (req, res) => {
  console.log("POST request for item received.")
  try {
    const createdBook = await createBook(req.body);
    res.json(createdBook);
  } catch (error) {
    res.status(404).json({ error: "Oh no cannot create" });
  }
});

books.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`DELETE request for item at id ${id} recieved.`)
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

books.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`PUT request for item at id ${id} received.`)
  // console.log(id, req.body)
  const updatedBook = await updateBook(id, req.body);
  console.log(updatedBook)
  if (updatedBook.id) {
    res.status(200).json(updatedBook);
  } else {
    res.status(404).json("no books found with that id");
  }
});


module.exports = books;
