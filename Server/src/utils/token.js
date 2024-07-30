const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;

const generateToken = (data) => {
  return jwt.sign(data, secret);
};

const verifyToken = (dataToken) => {
  return jwt.verify(dataToken, secret);
};

module.exports = {
  generateToken,
  verifyToken,
};
