import Actualizar from "./views/Table/Actualizar";
import CrearProducto from "./views/Table/CrearProducto";
import Table from "./views/Table/Table";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/formulario" element={<CrearProducto />} />
        <Route path="/actualizar/:id" element={<Actualizar />} />
      </Routes>
    </>
  );
}

export default App;
