const pool = require(`./index.js`);

pool.query(`DROP SCHEMA IF EXISTS library CASCADE`)
  .then(() => pool.query(`CREATE SCHEMA library`))
    .then(() => pool.query(`CREATE TABLE library.book (
      title VARCHAR NOT NULL,
      author VARCHAR,
      illustrator VARCHAR,
      type VARCHAR,
      category VARCHAR,
      subject VARCHAR,
      weh_rotation_month VARCHAR(3),
      date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`))
    .catch((err) => {console.log(`***Error CREATING DATABASE - Creating "book" table:\n${err}\nEnd Transmission***`)})