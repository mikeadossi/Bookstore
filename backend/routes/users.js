const express = require("express");
const router = express.Router();
const db = require('../database/queries');
const bcrypt = require("bcrypt");

const passport = require("passport");
const passport_local = require("passport-local");
//passport setup
// passport.use(new passport_local.Strategy({
//   usernameField : "username",
//   passwordField : "password",
//   session : true
// },
//   function(username, password, done){
//
//     db.any('SELECT * FROM users WHERE username = $1', [username])
//     .then(function (data) {
//       console.log(data,'<-data');
//       if(data.length === 1){
//         bcrypt.compare(password, data[0].password).then(function(matched) {
//             // res == true
//             console.log('res: ',res);
//           if(matched){
//             done(null,data[0]);
//           } else {
//             done(null, false);
//           }
//         });
//       } else {
//         done(null, false)
//       }
//     })
// }));
//
// passport.serializeUser(function(user, callback){
//   callback(null, user.username)
// })
//
// passport.deserializeUser(function(name, callback){
//   db.getUser(name).then(function(result){
//     callback(null, result[0])
//   })
// })
