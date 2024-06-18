const { Router } = require("express");
const {
  getDBHandler,
  createProductoHandler,
} = require("../handler/index.handler");

const router = Router();

router.get("/", getDBHandler);
router.post("/", createProductoHandler);
module.exports = router;
