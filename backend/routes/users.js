const express = require("express");
const router = express.Router();
const db = require('../database/queries');

const passport = require("passport");
const passport_local = require("passport-local");
//passport setup
passport.use(new passport_local.Strategy({
  usernameField : "username",
  passwordField : "password",
  session : true
},
  function(username, password, callback){
    db.getUser(username).then(function(result){
      console.log('result: ',result)
      if(result.length === 0){
        return callback(null,false,{message:'no such user'})
      }
      const user = result[0];
      if(user.password !== password){
        return callback(null, false, {message:'wrong password'})
      }
      return callback(null, user, {message:'success'})
    })
}));

passport.serializeUser(function(user, callback){
  callback(null, user.username)
})

passport.deserializeUser(function(name, callback){
  db.getUser(name).then(function(result){
    callback(null, result[0])
  })
})
