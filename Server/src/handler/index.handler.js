const getDBHandler = require("./stock/getProductos.handler");
const createProductoHandler = require("./stock/createProducto.handler");
const deleteProductoHanlder = require("./stock/deleteProductoHanlder");
const updateProductoHandler = require("./stock/updateProducto.hanlder");
const productoIdHanlder = require("./stock/productoId.handlee");
const {
  orderPorNombreHandler,
  orderPorCategoriaHandler,
  ordenarPorMarcaHandler,
} = require("./stock/orderProducto.handler");
//USER
const registroUserHandler = require("./user/createUserHandler");
const iniciarSesionHandler = require("./user/iniciarSesionHandler");

module.exports = {
  getDBHandler,
  createProductoHandler,
  deleteProductoHanlder,
  updateProductoHandler,
  productoIdHanlder,
  orderPorNombreHandler,
  orderPorCategoriaHandler,
  ordenarPorMarcaHandler,
  //USER
  registroUserHandler,
  iniciarSesionHandler,
};
