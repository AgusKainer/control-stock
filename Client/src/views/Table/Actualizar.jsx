import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useProductoIDQuery,
  useActualizarMutation,
} from "../../redux/api/apiSlice";
import { formHook } from "../../CustomHooks/FormHooks";

const Actualizar = () => {
  const { id } = useParams();
  const { data: productoData, isLoading, isError } = useProductoIDQuery(id);
  const [actualizar] = useActualizarMutation(productoData);

  const { change, producto, setProducto } = formHook(
    productoData || {
      nombre: "",
      categoria: "",
      precio: 0,
      cantidadEnStock: 0,
      marca: "",
      imagenDelProducto: "",
      precioPorMayor: 0,
      descuento: 0,
    }
  );

  useEffect(() => {
    if (productoData) {
      setProducto(productoData);
    }
  }, [productoData, setProducto]);

  console.log("PRODUCTO: ", producto);

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error al cargar el producto</div>;
  const enviar = (e) => {
    e.preventDefault();
    actualizar(productoData);
  };

  return (
    <div>
      <Link to="/">Ver Lista</Link>
      <h1>Actualizar Producto</h1>
      <form onSubmit={enviar}>
        <label htmlFor="nombre">Nombre del producto</label>
        <input
          type="text"
          name="nombre"
          onChange={change}
          value={producto.nombre}
        />
        <label htmlFor="categoria">Categoria</label>
        <input
          type="text"
          name="categoria"
          onChange={change}
          value={producto.categoria}
        />
        <label htmlFor="precio">Precio</label>
        <input
          type="number"
          name="precio"
          onChange={change}
          value={producto.precio}
        />
        <label htmlFor="cantidadEnStock">Cantidad en stock</label>
        <input
          type="number"
          name="cantidadEnStock"
          onChange={change}
          value={producto.cantidadEnStock}
        />
        <label htmlFor="marca">Marca</label>
        <input
          type="text"
          name="marca"
          onChange={change}
          value={producto.marca}
        />
        <label htmlFor="imagenDelProducto">Imagen</label>
        <input
          type="text"
          name="imagenDelProducto"
          onChange={change}
          value={producto.imagenDelProducto}
        />
        <label htmlFor="precioPorMayor">Precio por mayor</label>
        <input
          type="number"
          name="precioPorMayor"
          onChange={change}
          value={producto.precioPorMayor}
        />
        <label htmlFor="descuento">Descuento</label>
        <input
          type="number"
          name="descuento"
          onChange={change}
          value={producto.descuento}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Actualizar;
