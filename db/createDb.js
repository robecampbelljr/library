const pool = require(`./index.js`);

pool.query(`DROP SCHEMA IF EXISTS library CASCADE`)
  .then(() => pool.query(`CREATE SCHEMA library`))
  .then(() => pool.query(`CREATE TABLE library.authors (
    author_id SERIAL PRIMARY KEY,
    author_name VARCHAR
  )`))
  .catch((err) => {console.log(`***Error CREATING DATABASE - Creating "authors" table:\n${err}\nEnd Transmission***`)})
  .then(() => pool.query(`CREATE TABLE library.illustrators (
    illustrator_id SERIAL PRIMARY KEY,
    illustrator_name VARCHAR
  )`))
  .catch((err) => {console.log(`***Error CREATING DATABASE - Creating "illustrators" table:\n${err}\nEnd Transmission***`)})
  .then(() => pool.query(`CREATE TABLE library.types (
    type_id SERIAL PRIMARY KEY,
    type_name VARCHAR
  )`))
  .catch((err) => {console.log(`***Error CREATING DATABASE - Creating "types" table:\n${err}\nEnd Transmission***`)})
  .then(() => pool.query(`CREATE TABLE library.categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR
  )`))
  .catch((err) => {console.log(`***Error CREATING DATABASE - Creating "categories" table:\n${err}\nEnd Transmission***`)})
  .then(() => pool.query(`CREATE TABLE library.subjects (
    subject_id SERIAL PRIMARY KEY,
    subject_name VARCHAR
  )`))
  .catch((err) => {console.log(`***Error CREATING DATABASE - Creating "subjects" table:\n${err}\nEnd Transmission***`)})
  .then(() => pool.query(`CREATE TABLE library.books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    illustrator_id INTEGER,
    type_id INTEGER,
    category_id INTEGER,
    subject_id INTEGER,
    status VARCHAR DEFAULT 'In Stock',
    weh_rotation_month VARCHAR(3),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (illustrator_id) REFERENCES library.illustrators(illustrator_id) ON DELETE RESTRICT,
    FOREIGN KEY (type_id) REFERENCES library.types(type_id) ON DELETE RESTRICT,
    FOREIGN KEY (category_id) REFERENCES library.categories(category_id) ON DELETE RESTRICT,
    FOREIGN KEY (subject_id) REFERENCES library.subjects(subject_id) ON DELETE RESTRICT
  )`))
  .catch((err) => {console.log(`***Error CREATING DATABASE - Creating "books" table:\n${err}\nEnd Transmission***`)})
  .then(() => pool.query(`CREATE TABLE library.book_authors (
    book_id INTEGER,
    author_id INTEGER,
    PRIMARY KEY (book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES library.books(book_id) ON DELETE RESTRICT,
    FOREIGN KEY (author_id) REFERENCES library.authors(author_id) ON DELETE RESTRICT
  )`))
  .catch((err) => {console.log(`***Error CREATING DATABASE - Creating "book_authors" table:\n${err}\nEnd Transmission***`)})