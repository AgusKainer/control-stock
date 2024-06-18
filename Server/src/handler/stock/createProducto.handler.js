const { createProducto } = require("../../controller/index.controller");

const createProductoHandler = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      categoria,
      precio,
      cantidadEnStock,
      estadoDelProducto,
      marca,
      imagenDelProducto,
      precioPorMayor,
      descuento,
    } = req.body;
    const producto = await createProducto({
      nombre,
      descripcion,
      categoria,
      precio,
      cantidadEnStock,
      estadoDelProducto,
      marca,
      imagenDelProducto,
      precioPorMayor,
      descuento,
    });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: `ERROE EN EL SERVIDOR: ${error}` });
  }
};

module.exports = createProductoHandler;
