const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const index = require('./routes/index');
// const users = require('./routes/users')
// const addBook = require('./routes/addBook');
// const redirect = require('./routes/redirect');

app.options('*', cors());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: "something there"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use( ( request, response, next ) => {

    if (request.method === "OPTIONS") {
      response.header('Access-Control-Allow-Origin', request.headers.origin)
    } else {
      response.header('Access-Control-Allow-Origin', '*')
    }

    next()
})

app.get('/test', function(req, res) {
  res.json({foo: 'bar'})
})

app.use('/', index);
// app.use('/users', users);
// app.use('*', redirect);

app.get('*', (req, res, next) => { // handle all routes with '*'
  res.sendFile(__dirname+'/public/index.html')
})

app.use(function(req, res, next) {
  const err = new Error('Not Found');
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



console.log("Listening on port 8888..")
app.listen(8888)

// module.exports = app;
