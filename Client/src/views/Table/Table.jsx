import React from "react";
import {
  useGetAllProductsQuery,
  useActualizarMutation,
  useBorrarMutation,
} from "../../redux/api/apiSlice";
import { Link } from "react-router-dom";

const Table = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Cargando...</div>;

  const [borrar] = useBorrarMutation();

  const borrarProducto = async (id) => {
    try {
      await borrar(id);
    } catch (error) {
      console.log("ERROR AL BORRAR: ", error);
    }
  };

  return (
    <div>
      <Link to="/formulario">Agregar Producto</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>CATEGORÍA</th>
            <th>PRECIO</th>
            <th>CANTIDAD EN STOCK</th>
            <th>ESTADO DEL PRODUCTO</th>
            <th>MARCA</th>
            <th>IMAGEN DEL PRODUCTO</th>
            <th>PRECIO POR MAYOR</th>
            <th>DESCUENTO</th>
            <th>BORRAR O ACTUALIZAR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pro) => (
            <tr key={pro.id}>
              <td>{pro.id}</td>
              <td>{pro.nombre}</td>
              <td>{pro.categoria}</td>
              <td>{pro.precio}</td>
              <td>{pro.cantidadEnStock}</td>
              <td>{pro.cantidadEnStock > 0 ? "En stock" : "Sin stock"}</td>
              <td>{pro.marca}</td>
              <td>
                <img src={pro.imagen} alt={pro.nombre} width="50" />
              </td>
              <td>{pro.precioPorMayor}</td>
              <td>{pro.descuento}</td>
              <td>
                <Link to={`/actualizar/${pro.id}`}>
                  <button>ACTUALIZAR</button>
                </Link>
                <button onClick={() => borrarProducto(pro.id)}>BORRAR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
