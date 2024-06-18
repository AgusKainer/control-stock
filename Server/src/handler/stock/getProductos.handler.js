const getDB = require("../../controller/index.controller");

const getDBHandler = async (req, res) => {
  try {
    const productos = await getDB();
    !productos
      ? res.status(400).json({ message: "Esta vacio" })
      : res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL SERVIDOR: ${error}` });
  }
};

module.exports = getDBHandler;
