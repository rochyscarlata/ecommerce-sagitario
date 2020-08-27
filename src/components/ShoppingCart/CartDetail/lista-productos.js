import React, { useState, Fragment } from "react";
import ProductCard from "./product-card";
import "./styles.css";

export const ListaProductos = ({ carrito, calcularSubtotal, setCarrito, setCartValido}) => {

  return (
    <Fragment>
      <div className="scrollable">
        {carrito.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            carrito={carrito}
            setCarrito={setCarrito}
            calcularSubtotal={calcularSubtotal}
            setCartValido={setCartValido}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ListaProductos;
