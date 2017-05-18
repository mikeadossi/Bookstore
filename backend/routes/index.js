var express = require('express');
var router = express.Router();

var db = require('../database/queries');

router.get('/api/bookstore_db', db.getAllBooks);

router.get('/api/bookstore_db/:id', db.getBooks);

module.exports = router;
