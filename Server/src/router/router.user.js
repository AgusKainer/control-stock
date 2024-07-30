const { Router } = require("express");
const {
  registroUserHandler,
  iniciarSesionHandler,
} = require("../handler/index.handler");
const routerUser = Router();

routerUser.post("/registro", registroUserHandler);
routerUser.post("/login", iniciarSesionHandler);

module.exports = routerUser;
