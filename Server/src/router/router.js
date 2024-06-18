const { Router } = require("express");
const {
  getDBHandler,
  createProductoHandler,
  deleteProductoHanlder,
  updateProductoHandler,
} = require("../handler/index.handler");

const router = Router();

router.get("/", getDBHandler);
router.post("/", createProductoHandler);
router.delete("/:id", deleteProductoHanlder);
router.put("/:id", updateProductoHandler);
module.exports = router;
