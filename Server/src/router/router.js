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

const router = Router();
router.get("/nombre", orderPorNombreHandler);
router.get("/categoria", orderPorCategoriaHandler);
router.get("/marca", ordenarPorMarcaHandler);

router.get("/", getDBHandler);
router.get("/:id", productoIdHanlder);
router.post("/", createProductoHandler);
router.delete("/:id", deleteProductoHanlder);
router.put("/:id", updateProductoHandler);
// ordenamiento
module.exports = router;
