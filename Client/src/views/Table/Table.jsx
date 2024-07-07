import React from "react";
import {
  useGetAllProductsQuery,
  useBorrarMutation,
} from "../../redux/api/apiSlice";
import { Link } from "react-router-dom";
import style from "../../css/tabla.module.css";

const Table = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [borrar] = useBorrarMutation();

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Cargando...</div>;
  console.log(data);

  const borrarProducto = async (id) => {
    try {
      await borrar(id);
    } catch (error) {
      console.log("ERROR AL BORRAR: ", error);
    }
  };

  return (
    <div>
      <Link className={style.btnAgregar} to="/formulario">
        Agregar Producto
      </Link>
      <table className={style.table}>
        <thead>
          <tr className={style.tableHead}>
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
                  <button className={style.btn}>ACTUALIZAR</button>
                </Link>
                <button
                  className={style.btn}
                  onClick={() => borrarProducto(pro.id)}
                >
                  BORRAR
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
