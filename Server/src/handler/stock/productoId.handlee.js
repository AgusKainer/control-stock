const { productoID } = require("../../controller/index.controller");

const productoIdHanlder = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await productoID({ id });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL SERVIDOR: ${error}` });
  }
};
module.exports = productoIdHanlder;
