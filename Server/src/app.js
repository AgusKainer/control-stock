const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { routerStock, routerUser } = require("./router/index.router");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/stock", routerStock);
app.use("/api/user", routerUser);
module.exports = app;
