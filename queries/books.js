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

