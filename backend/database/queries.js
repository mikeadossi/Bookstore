var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = `postgres://${process.env.USER}@localhost:5432/bookstore_db`;
var db = pgp(connectionString);


function getAllBooks(req, res, next) {
  var result,
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
  var bookId = parseInt(req.params.id)
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

module.exports = { getAllBooks: getAllBooks, getBooks: getBooks };
