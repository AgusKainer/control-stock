const stock = require("../../models/stock");

const productoID = async ({ id }) => {
  try {
    const producto = await stock.findByPk(id);
    return producto;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
  }
};

module.exports = productoID;
