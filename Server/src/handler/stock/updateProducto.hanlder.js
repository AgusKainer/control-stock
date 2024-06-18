const { updateProducto } = require("../../controller/index.controller");

const updateProductoHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      precio,
      cantidadEnStock,
      estadoDelProducto,
      precioPorMayor,
      descuento,
    } = req.body;
    const producto = await updateProducto({
      id,
      precio,
      cantidadEnStock,
      estadoDelProducto,
      precioPorMayor,
      descuento,
    });
    res.status(200).json(`PRODUCTO ACTUALIZADO`);
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL SERVIDOR: ${error}` });
  }
};
module.exports = updateProductoHandler;
