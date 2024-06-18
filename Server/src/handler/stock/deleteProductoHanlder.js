const { deleteProducto } = require("../../controller/index.controller");

const deleteProductoHanlder = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await deleteProducto({ id });
    res.status(200).json({ message: `Se borro el producto: ${producto}` });
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL SERVIDOR: ${error}` });
  }
};
module.exports = deleteProductoHanlder;
