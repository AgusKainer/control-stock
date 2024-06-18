const app = require("./app");
const conexionDB = require("./database/conexionDB");

const server = async () => {
  try {
    await conexionDB.authenticate();
    console.log("Conexion a la db");
    app.listen(3000);
    console.log("Server funcionando en el puerto ", 3000);
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
server();
