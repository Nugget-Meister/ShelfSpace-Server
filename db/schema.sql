DROP DATABASE IF EXISTS books_dev;

CREATE DATABASE books_dev;

\c books_dev;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    ISBN CHAR(13) UNIQUE,
    author VARCHAR(255),
    genre VARCHAR(255),
    bookRating NUMERIC(3,2),
    hasRead BOOLEAN,
    imageURL TEXT
);
