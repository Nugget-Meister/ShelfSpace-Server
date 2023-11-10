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
      "INSERT INTO books (title, ISBN, author, genre, bookRating, hasRead, imageURL) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        book.title,
        book.ISBN,
        book.author,
        book.genre,
        book.bookRating,
        book.hasRead,
        book.imageURL,
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
    const { title, ISBN, author, genre, bookRating, hasRead, imageURL } = book;
    const updatedBook = await db.one(
      "UPDATE books SET title=$1, ISBN=$2, author=$3, genre=$4, bookRating=$5, hasRead=$6, imageURL=$7 WHERE id=$8  RETURNING *",
      [title, ISBN, author, genre, bookRating, hasRead, imageURL]
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