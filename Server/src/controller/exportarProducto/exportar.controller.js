const stock = require("../../models/stock");
const { Parser } = require("json2csv");
const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");

// Función para exportar productos en formato CSV
const exportarCSV = async () => {
  try {
    const productos = await stock.findAll();

    // Define los campos que deseas exportar
    const fields = [
      "id",
      "nombre",
      "descripcion",
      "categoria",
      "precio",
      "cantidadEnStock",
      "estadoDelProducto",
      "marca",
    ];

    // Configura el parser CSV
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(productos);

    // Genera el nombre y la ruta del archivo CSV
    const filePath = path.join(
      __dirname,
      "../exportarProducto",
      "exports",
      "productos.csv"
    );

    // Escribe el archivo CSV
    fs.writeFileSync(filePath, csv);

    return filePath; // Retorna la ruta del archivo generado
  } catch (error) {
    console.error("Error al exportar productos como CSV:", error);
    throw error;
  }
};

// Función para exportar productos en formato Excel
const exportarExcel = async () => {
  try {
    const productos = await stock.findAll();

    // Crea un nuevo libro de Excel
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Productos");

    // Define las columnas del encabezado
    sheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Nombre", key: "nombre", width: 30 },
      { header: "Descripción", key: "descripcion", width: 40 },
      { header: "Categoría", key: "categoria", width: 20 },
      { header: "Precio", key: "precio", width: 15 },
      { header: "Cantidad en Stock", key: "cantidadEnStock", width: 20 },
      { header: "Estado del Producto", key: "estadoDelProducto", width: 20 },
      { header: "Marca", key: "marca", width: 20 },
    ];

    // Agrega los datos de los productos al libro de Excel
    productos.forEach((producto) => {
      sheet.addRow({
        id: producto.id,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        categoria: producto.categoria,
        precio: producto.precio,
        cantidadEnStock: producto.cantidadEnStock,
        estadoDelProducto: producto.estadoDelProducto,
        marca: producto.marca,
      });
    });

    // Genera el nombre y la ruta del archivo Excel
    const filePath = path.join(
      __dirname,
      "../exportarProducto",
      "exports",
      "productos.xlsx"
    );
    console.log("FILEPATH DEL CONTROLLER: ", filePath);
    // Guarda el libro de Excel
    await workbook.xlsx.writeFile(filePath);

    return filePath; // Retorna la ruta del archivo generado
  } catch (error) {
    console.error("Error al exportar productos como Excel:", error);
    throw error;
  }
};

module.exports = {
  exportarCSV,
  exportarExcel,
};
