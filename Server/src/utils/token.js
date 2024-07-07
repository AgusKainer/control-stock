const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;

const generateToken = (data) => {
  return jwt.sign(data, secret);
};

const verifyToken = (dataToken) => {
  try {
    const token = jwt.verify(dataToken, secret);
    return token;
  } catch (error) {
    throw new Error("TOKEN INVALIDO");
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
