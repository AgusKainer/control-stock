const stock = require("../../models/stock");

const createProducto = async ({
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
}) => {
  try {
    const producto = await stock.create({
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
    return producto;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
  }
};

module.exports = createProducto;
