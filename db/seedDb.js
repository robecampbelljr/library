const pool = require(`./index.js`);

async function bookSeeds() {
  try {
    const bookQuery = `
    INSERT INTO library.book (title, author, illustrator, type, category, subject, weh_rotation_month)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const books = [{title: `test`, author: `Test Author`, illustrator: `Test Illustrator`, type: `Fiction`, category: `Fantasy`, subject: `Morality`, weh: `NOV`}];

    if (Array.isArray(books) && books.length > 0) {
      books.map((book, index) => console.log(pool.query(bookQuery, [book.title, book.author, book.illustrator, book.type, book.category, book.subject, book.weh])))
    }
  } catch (err) {
    console.error('Error fetching data', err);
  }
}

bookSeeds().catch((err) => console.error('Error in fetchData function', err));``