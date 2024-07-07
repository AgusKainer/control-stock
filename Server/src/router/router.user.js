const { Router } = require("express");
const { registroUserHandler } = require("../handler/index.handler");
const routerUser = Router();

routerUser.post("/registro", registroUserHandler);

module.exports = routerUser;
