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

const router = Router();
//DESCRAGAR ARCHIVOS
router.get("/csv", exportarCSVHanlder);
router.get("/exel", exportarExcelHandler);

// ordenamiento
router.get("/nombre", orderPorNombreHandler);
router.get("/categoria", orderPorCategoriaHandler);
router.get("/marca", ordenarPorMarcaHandler);

router.get("/", getDBHandler);
router.get("/:id", productoIdHanlder);
router.post("/", createProductoHandler);
router.delete("/:id", deleteProductoHanlder);
router.put("/:id", updateProductoHandler);
module.exports = router;
