const getDBHandler = require("./stock/getProductos.handler");
const createProductoHandler = require("./stock/createProducto.handler");
const deleteProductoHanlder = require("./stock/deleteProductoHanlder");
const updateProductoHandler = require("./stock/updateProducto.hanlder");
const productoIdHanlder = require("./stock/productoId.handlee");

module.exports = {
  getDBHandler,
  createProductoHandler,
  deleteProductoHanlder,
  updateProductoHandler,
  productoIdHanlder,
};
