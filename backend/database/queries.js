const promise = require('bluebird');

const options = {
  promiseLib: promise
};

let pgp = require('pg-promise')(options);
let connectionString = `postgres://${process.env.USER}@localhost:5432/bookstore_db`;
let db = pgp(connectionString);


function getAllBooks(req, res, next) {
  let result,
        query = req.query.query;

  if (query) {
    result = db.any("SELECT * FROM books WHERE title = $1 OR genre = $1 OR isbn = $1 OR author_name = $1", [query])
  } else {
    result = db.any('select * from books')
  }

  result.then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved ALL books'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function getBooks(req, res, next) {
  const bookId = parseInt(req.params.id)
  db.one('select * from books where id = $1', bookId)
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved ALL books'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function addBook(req, res, next){
  const {title, author_name} = req.body;
  db.any('INSERT INTO books (title, author_name) VALUES ($1, $2)', [title, author_name])
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Successfully inserted book'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function updateBook(req, res, next){
  const {title, author_name} = req.body;
  const id = req.params.id;
  db.any('UPDATE books SET title = $2, author_name = $3 WHERE id = $1', [id, title, author_name])
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Successfully updated book'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function deleteBook(req, res, next){
  const id = req.params.id;
  db.any('DELETE from books WHERE id = $1', [id])
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Successfully deleted book'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

module.exports = {
  getAllBooks: getAllBooks,
  getBooks: getBooks,
  addBook: addBook,
  updateBook: updateBook,
  deleteBook: deleteBook
};
