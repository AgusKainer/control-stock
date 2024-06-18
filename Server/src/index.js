const app = require("./app");

const server = async () => {
  try {
    app.listen(3000);
    console.log("Server funcionando en el puerto ", 3000);
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
server();
