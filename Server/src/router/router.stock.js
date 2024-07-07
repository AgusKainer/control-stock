const { Router } = require("express");
const {
  getDBHandler,
  createProductoHandler,
  deleteProductoHanlder,
  updateProductoHandler,
  productoIdHanlder,
  orderPorNombreHandler,
  orderPorCategoriaHandler,
  ordenarPorMarcaHandler,
} = require("../handler/index.handler");
const {
  exportarCSVHanlder,
  exportarExcelHandler,
} = require("../handler/exportarProducto/exportarProducto.handler");

const routerStock = Router();
//DESCRAGAR ARCHIVOS
routerStock.get("/csv", exportarCSVHanlder);
routerStock.get("/exel", exportarExcelHandler);

// ordenamiento
routerStock.get("/nombre", orderPorNombreHandler);
routerStock.get("/categoria", orderPorCategoriaHandler);
routerStock.get("/marca", ordenarPorMarcaHandler);

routerStock.get("/", getDBHandler);
routerStock.get("/:id", productoIdHanlder);
routerStock.post("/", createProductoHandler);
routerStock.delete("/:id", deleteProductoHanlder);
routerStock.put("/:id", updateProductoHandler);

module.exports = routerStock;
