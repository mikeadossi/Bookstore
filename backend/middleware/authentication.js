const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const secret = process.env.SECRET;
function authenticateUser(req, res, next) {
  try {
    jwt.verify(req.headers.authorization, secret);
    next();
  } catch(e) {
    res.send(401).json({error: 'Unable to verify token!'});
  }
}

module.exports = authenticateUser;
