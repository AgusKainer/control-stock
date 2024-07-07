const { Sequelize } = require("sequelize");
require("dotenv").config();
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const conexionDBStock = new Sequelize("stock", user, password, {
  host: "localhost",
  dialect: "mysql",
});

const conexionDBUser = new Sequelize("user", user, password, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { conexionDBStock, conexionDBUser };
