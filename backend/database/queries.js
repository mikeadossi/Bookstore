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

// function addUser(req, res, next) {
//   const username = req.params.username
//   const password = req.params.password
//
//   if (username, password){
//     result = db.any('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
//   } else {
//     console.log('username or password not given');
//     return;
//   }
//
//   result.then(function (data) {
//     res.status(200)
//       .json({
//         status: 'success',
//         data: data,
//         message: 'added user'
//       });
//   })
//   .catch(function (err) {
//     return next(err);
//   });
// }

module.exports = { getAllBooks: getAllBooks, getBooks: getBooks};
