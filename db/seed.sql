\c books_dev;
INSERT INTO books (
        title,
        ISBN,
        author,
        genre,
        bookRating,
        hasRead,
        imageURL
    )
VALUES (
        'The Great Gatsby',
        '9780743273565',
        'F.Scott Fitzgerald',
        'Classic',
        4.3,
        TRUE,
        'https://m.media-amazon.com/images/I/61Hc2hsbeHL._SY522_.jpg'
    ),
    (
        'The Hobbit',
        '9780618260300',
        'J.R.R. Tolkien',
        'Fantasy',
        4.2,
        TRUE,
        'https://m.media-amazon.com/images/I/A1E+USP9f8L._AC_UF1000,1000_QL80_.jpg'
    ),
    (
        '1984',
        '9780451524935',
        'George Orwell',
        'Dystopian',
        4.7,
        TRUE,
        'https://m.media-amazon.com/images/I/41XsBZHZDML._SY445_SX342_.jpg'
    ),
    (
        'The Hitchhikers Guide to the Galaxy',
        '9780345391803',
        'Douglas Adams',
        'Science Fiction',
        4.3,
        FALSE,
        'https://m.media-amazon.com/images/I/71u2eAfes+S._SL1500_.jpg'
    ),
    (
        'The Kite Runner',
        '9781594480003',
        'Khaled Hosseini',
        'Contemporary Fiction',
        4.3,
        TRUE,
        'https://bbtheatricals.com/wp-content/uploads/2022/03/Kite-Runner-new-key-art_Mar2022.jpg'
    ),
    (
        'Sapiens: A Brief History of Humankind',
        '9780062316097',
        'Yuval Noah Harari',
        'Non-Fiction,History',
        4.5,
        TRUE,
        'https://m.media-amazon.com/images/I/713jIoMO3UL._SL1500_.jpg'
    ) ON CONFLICT (ISBN) DO
UPDATE
SET title = EXCLUDED.title,
    author = EXCLUDED.author,
    genre = EXCLUDED.genre,
    bookRating = EXCLUDED.bookRating,
    hasRead = EXCLUDED.hasRead,
    imageURL = EXCLUDED.imageURL;