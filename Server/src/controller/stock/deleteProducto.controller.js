const stock = require("../../models/stock");

const deleteProducto = async ({ id }) => {
  try {
    const producto = await stock.destroy({
      where: {
        id,
      },
    });
    return producto;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
  }
};

module.exports = deleteProducto;
