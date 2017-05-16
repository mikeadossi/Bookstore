var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var session = require('express-session');
var passport = require('passport');
var cors = require('cors');

var index = require('./routes/index');
// var users = require('./routes/users')
// var addBook = require('./routes/addBook');
// var redirect = require('./routes/redirect');

app.options('*', cors());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/test', function(req, res) {
  res.json({foo: 'bar'})
})

app.use('/', index);
// app.use('/users', users);
// app.use('*', redirect);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status( err.code || 500 )
    .json({
      status: 'error',
      message: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .json({
    status: 'error',
    message: err.message
  });
});

console.log("Listening on port 8080..")
app.listen(8080)

// module.exports = app;
