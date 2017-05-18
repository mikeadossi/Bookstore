var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = `postgres://${process.env.USER}@localhost:5432/bookstore_db`;
var db = pgp(connectionString);


function getAllBooks(req, res, next) {
  db.any('select * from books')
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

function getBooks(req, res, next, id) {
  db.any('select * from books where id = $1',[id])
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



module.exports = { getAllBooks: getAllBooks };
