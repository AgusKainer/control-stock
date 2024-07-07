const bcrypt = require("bcryptjs");
require("dotenv").config();

const saltRound = 5;

const encryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRound);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (error) {
    throw new Error("No se encripto el password: ", error);
  }
};

module.exports = encryptPassword;
