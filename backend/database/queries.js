const promise = require('bluebird');
const bcrypt = require('bcrypt');

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
    console.log('************ query => ',query);
  } else {
    result = db.any('SELECT * FROM books')
    console.log('********** no query!!!');
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

function getBook(req, res, next) {
  const bookId = parseInt(req.params.id)
  db.one('select * from books where id = $1', bookId)
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved book'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function addBook(req, res, next){
  const {title, author_name, genre, image_url, description, isbn, list_price, publisher} = req.body;
  db.any('INSERT INTO books (title, author_name, genre, image_url, description, isbn, list_price, publisher) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [ title, author_name, genre, image_url, description, isbn, list_price, publisher ])
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
  const {
    title,
    author_name,
    genre,
    image_url,
    description,
    isbn,
    list_price,
    publisher
  } = req.body;
  const id = req.params.id;
  db.any('UPDATE books SET title = $2, author_name = $3, genre = $4, image_url = $5, description = $6, isbn = $7, list_price = $8, publisher = $9 WHERE id = $1', [
    id,
    title,
    author_name,
    genre,
    image_url,
    description,
    isbn,
    list_price,
    publisher
  ])
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
  console.log(req,' <======= req');
  const id = req.params.id;
  // const id = req.query.id
  db.none('DELETE from books WHERE id = $1', [id])
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

function getUser(req, res){
  const name = req.params.name;
  db.any('SELECT * FROM users WHERE username = $1', [name])
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function logIn(req, res, next){
  const {username, password} = req.body;
  // console.log(username,password,'<========');
  db.one('SELECT * FROM users WHERE username = $1', [username])
  .then(function (data) {
    console.log(data,'<-data');

    bcrypt.compare(password, data.password).then(function(matched) {
        // res == true
        console.log('res: ',res);
      if(matched){
        res.status(200)
        .json({
          status: 'successful log in'
        });
        console.log('-----------> successful log in !!!!! <---------------');
      } else {
        res.status(401)
        .json({
          status: 'not matching'
        });
        console.log('-----------> not matching !!!!! <---------------');
      }
    });
  })
  .catch(function (err) {
    console.log('err --> ',err); // pass error back to react ...
    return next(err);
  });
}

function signUp(req, res, next){
  const {username, password} = req.body;
  bcrypt.hash(password, 10, function(err, password) {
    console.log(password,'<-- password');
    // Store hash in your password DB.
    db.any('INSERT INTO users (username, password) VALUES ($1, $2)', [
      username,
      password
    ])
    .then(function (data) {
      res.status(200)
      .json({
        status: 'success',
        message: 'Successfully created user profile'
      });
    })
    .catch(function (err) {
      return next(err);
    });
  })
}


module.exports = {
  getAllBooks: getAllBooks,
  getBook: getBook,
  addBook: addBook,
  updateBook: updateBook,
  deleteBook: deleteBook,
  getUser: getUser,
  signUp: signUp,
  logIn: logIn,
  db: db
};
