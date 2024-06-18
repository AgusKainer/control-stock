const getDB = require("./stock/allProductos.controller");
const createProducto = require("./stock/createProducto.controller");
const deleteProducto = require("./stock/deleteProducto.controller");
const productoID = require("./stock/productoId.controller");
const updateProducto = require("./stock/updateProducto.controller");

module.exports = {
  getDB,
  createProducto,
  deleteProducto,
  updateProducto,
  productoID,
};
