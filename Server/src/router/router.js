const { Router } = require("express");
const getDBHandler = require("../handler/index.handler");

const router = Router();

router.get("/", getDBHandler);

module.exports = router;
