const stock = require("../../models/stock");

const getDB = async () => {
  try {
    const productos = await stock.findAll();
    return productos;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
  }
};
module.exports = getDB;
