const db = require("../db/dbConfig");

const getAllBooks = async () => {
  try {
    const allBooks = await db.any("SELECT * FROM books");
    return allBooks;
  } catch (err) {
    return err;
  }
};
const getOneBook = async (id) => {
  try {
    const oneBook = await db.one("SELECT * FROM books WHERE id=$1", id);
    return oneBook;
  } catch (error) {
    return error;
  }
};
const createBook = async (book) => {
  try {
    const createdBook = await db.one(
      "INSERT INTO books (title, isbn, author, genre, bookrating, hasRead, imageurl) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        book.title,
        book.isbn,
        book.author,
        book.genre,
        book.bookrating,
        book.hasRead,
        book.imageurl,
      ]
    );
    return createdBook;
  } catch (error) {
    return error;
  }
};
const deleteBook = async (id) => {
  try {
    const deletedBook = await db.one(
      "DELETE from books WHERE id = $1 RETURNING *",
      id
    );
    return deletedBook;
  } catch (error) {
    return error;
  }
};
const updateBook = async (id, book) => {

  try {
    const { title, isbn, author, genre, bookrating, hasRead, imageurl } = book;
    const updatedBook = await db.one(
      "UPDATE books SET title=$1, isbn=$2, author=$3, genre=$4, bookrating=$5, hasRead=$6, imageurl=$7 WHERE id=$8 RETURNING *",
      [title, isbn, author, genre, bookrating, hasRead, imageurl, id]
    );
    return updatedBook;
  } catch (error) {
    return error;
  }
};


module.exports = {
    getAllBooks,
    getOneBook,
    createBook,
    deleteBook,
    updateBook,
}