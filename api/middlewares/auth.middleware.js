const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports.checkAuth = (req, res, next) => {
  // 1 - extract JWT from Authorization Header
  // 2 - verify JWT signature (jwt.verify)
  // 3 - extract "sub" from jwt payload
  // 4 - load user from databse
  // 5 - save user on request (req.user)
  // 6 - next
};
