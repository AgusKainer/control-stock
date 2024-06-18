const {
  ordenarPorNombre,
  ordenarPorCategoria,
  orderPorMarca,
} = require("../../controller/index.controller");

const orderPorNombreHandler = async (req, res) => {
  try {
    const producto = await ordenarPorNombre();

    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL SERVIDOR: ${error}` });
  }
};
const orderPorCategoriaHandler = async (req, res) => {
  try {
    const { categoria } = req.query;
    const producto = await ordenarPorCategoria({ categoria });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: `ERROR DEL SERVIDOR: ${error}` });
  }
};
const ordenarPorMarcaHandler = async (req, res) => {
  try {
    const { marca } = req.query;
    const producto = await orderPorMarca({ marca });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL SERVIDOR: ${error}` });
  }
};
module.exports = {
  orderPorNombreHandler,
  orderPorCategoriaHandler,
  ordenarPorMarcaHandler,
};
