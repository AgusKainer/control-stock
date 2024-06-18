const { Sequelize } = require("sequelize");
require("dotenv").config();
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const conexionDB = new Sequelize("stock", user, password, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = conexionDB;
