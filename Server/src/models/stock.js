const { DataTypes } = require("sequelize");
const { conexionDBStock } = require("../database/conexionDB");
const { v4: uuid } = require("uuid");

const stock = conexionDBStock.define(
  "stock",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuid(),
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    categoria: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.INTEGER,
    },
    cantidadEnStock: {
      type: DataTypes.INTEGER,
    },
    estadoDelProducto: {
      type: DataTypes.STRING,
    },
    marca: {
      type: DataTypes.STRING,
    },
    imagenDelProducto: {
      type: DataTypes.STRING,
    },
    precioPorMayor: {
      type: DataTypes.INTEGER,
    },
    descuento: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = stock;
