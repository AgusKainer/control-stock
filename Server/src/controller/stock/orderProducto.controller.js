const stock = require("../../models/stock");

const ordenarPorNombre = async () => {
  try {
    const producto = await stock.findAll({
      order: [["nombre", "DESC"]],
    });

    return producto;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
  }
};
const ordenarPorCategoria = async ({ categoria }) => {
  try {
    const producto = await stock.findAll({
      where: {
        categoria: categoria,
      },
    });
    return producto;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
  }
};

const orderPorMarca = async ({ marca }) => {
  try {
    const producto = await stock.findAll({
      where: {
        marca: marca,
      },
    });
    return producto;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
    throw error;
  }
};
module.exports = { ordenarPorNombre, ordenarPorCategoria, orderPorMarca };
