const getDBHandler = require("./stock/getProductos.handler");
const createProductoHandler = require("./stock/createProducto.handler");
const deleteProductoHanlder = require("./stock/deleteProductoHanlder");
const updateProductoHandler = require("./stock/updateProducto.hanlder");

module.exports = {
  getDBHandler,
  createProductoHandler,
  deleteProductoHanlder,
  updateProductoHandler,
};
