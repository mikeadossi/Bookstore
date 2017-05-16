var express = require('express');
var router = express.Router();

var db = require('../database/queries');

router.get('/', ( request, response, next) => {
  response.sendFile('index.html')
})



router.get('/api/bookstore_db', db.getAllBooks);


module.exports = router;
