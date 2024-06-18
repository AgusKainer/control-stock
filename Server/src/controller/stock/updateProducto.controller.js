const stock = require("../../models/stock");

const updateProducto = async ({
  id,
  precio,
  cantidadEnStock,
  estadoDelProducto,
  precioPorMayor,
  descuento,
}) => {
  try {
    const producto = await stock.findByPk(id);
    producto.precio = precio;
    producto.cantidadEnStock = cantidadEnStock;
    producto.estadoDelProducto = estadoDelProducto;
    producto.precioPorMayor = precioPorMayor;
    producto.descuento = descuento;

    await producto.save();
    return producto;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
  }
};

module.exports = updateProducto;
