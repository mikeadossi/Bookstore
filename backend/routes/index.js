const express = require('express');
const router = express.Router();

const db = require('../database/queries');
// 1: create user controller (login/register)
// 2: create login & register routes
router.get('/api/bookstore_db', db.getAllBooks);

router.get('/api/bookstore_db/:id', db.getBooks);

router.post('/api/bookstore_db/', db.addBook);

router.put('/api/bookstore_db/:id/update', db.updateBook);

router.delete('/api/bookstore_db/:id', db.deleteBook);

router.post('/api/bookstore_db/user/', db.getUser);

//router.post('/api/login', db.getUser);

module.exports = router;
