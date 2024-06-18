const getDB = require("./stock/allProductos.controller");
const createProducto = require("./stock/createProducto.controller");
const deleteProducto = require("./stock/deleteProducto.controller");

module.exports = { getDB, createProducto, deleteProducto };
