import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAgregarProductoMutation } from "../../redux/api/apiSlice";
import { formHook } from "../../CustomHooks/FormHooks";

const CrearProducto = () => {
  const initialProducto = {
    nombre: "",
    categoria: "",
    precio: 0,
    cantidadEnStock: 0,
    marca: "",
    imagenDelProducto: "",
    precioPorMayor: 0,
    descuento: 0,
  };
  const { producto, change } = formHook(initialProducto);
  const [agregar] = useAgregarProductoMutation();

  const enviar = async (e) => {
    e.preventDefault();
    await agregar(producto);
  };
  return (
    <div>
      CrearProducto
      <Link to="/">Inventario</Link>
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

export default CrearProducto;
