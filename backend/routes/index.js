var express = require('express');
var router = express.Router();

var db = require('./backend/database/queries');


router.get('/api/bookstore_db', db.getAllTasks);


module.exports = router;
