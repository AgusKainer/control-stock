const {
  exportarCSV,
  exportarExcel,
} = require("../../controller/exportarProducto/exportar.controller");

const exportarCSVHanlder = async (req, res) => {
  try {
    const filePath = await exportarCSV();
    res.download(filePath);
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL SERVIDOR: ${error}` });
  }
};
const exportarExcelHandler = async (req, res) => {
  try {
    const filePath = await exportarExcel();
    res.download(filePath);
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL SERVER: ${error}` });
  }
};

module.exports = { exportarCSVHanlder, exportarExcelHandler };
