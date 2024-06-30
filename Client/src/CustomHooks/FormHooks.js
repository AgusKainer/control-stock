import { useState } from "react";

export const formHook = (initialProducto = {}) => {
  const [producto, setProducto] = useState(initialProducto);

  const change = ({ target }) => {
    const { name, value } = target;
    setProducto({
      ...producto,
      [name]: value,
    });
  };
  return {
    producto,
    change,
    setProducto,
  };
};
