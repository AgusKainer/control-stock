const bcrypt = require("bcryptjs");
const User = require("../models/user");
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

const comparePassword = async (password, userPassword) => {
  try {
    return await bcrypt.compare(password, userPassword);
  } catch (error) {
    throw new Error("CONTRASEÑA INCORRECTA");
  }
};

module.exports = { encryptPassword, comparePassword };
