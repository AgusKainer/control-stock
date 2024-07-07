const { DataTypes } = require("sequelize");
const { conexionDBUser } = require("../database/conexionDB");
const { v4: uuid } = require("uuid");

const user = conexionDBUser.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuid(),
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = user;
