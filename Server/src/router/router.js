const { Router } = require("express");
const {
  getDBHandler,
  createProductoHandler,
  deleteProductoHanlder,
  updateProductoHandler,
  productoIdHanlder,
} = require("../handler/index.handler");

const router = Router();

router.get("/", getDBHandler);
router.get("/:id", productoIdHanlder);
router.post("/", createProductoHandler);
router.delete("/:id", deleteProductoHanlder);
router.put("/:id", updateProductoHandler);
module.exports = router;
