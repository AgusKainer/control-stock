const { Router } = require("express");
const {
  getDBHandler,
  createProductoHandler,
  deleteProductoHanlder,
} = require("../handler/index.handler");

const router = Router();

router.get("/", getDBHandler);
router.post("/", createProductoHandler);
router.delete("/:id", deleteProductoHanlder);
module.exports = router;
