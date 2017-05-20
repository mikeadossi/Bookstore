var express = require('express');
var router = express.Router();

var db = require('../database/queries');

router.get('/api/bookstore_db', db.getAllBooks);

router.get('/api/bookstore_db/:id', db.getBooks);

router.post('/api/bookstore_db/', db.addBook);

router.put('/api/bookstore_db/:id/update', db.updateBook);

router.delete('/api/bookstore_db/:id', db.deleteBook);

module.exports = router;
