var express = require('express');
var router = express.Router();

var db = require('../database/queries');

router.get('/api/bookstore_db', db.getAllBooks);

router.get('/api/bookstore_db/:id', db.getBooks);

router.post('/api/bookstore_db/', db.addBook);

// router.post('api/bookstore_db/:username/:password', db.addUser);

// router.post('api/bookstore_db', db.logIntoAccount);

module.exports = router;
