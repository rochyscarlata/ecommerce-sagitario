import React, { useState, useEffect, Fragment } from "react";
import ListaProductos from "./lista-productos";
import { Col, Row, Container, Button } from "react-bootstrap";
import Swal from "sweetalert2";

// stilos de register
import "./styles.css";

const ShoppingCart = ({
  carrito,
  setCarrito,
  calcularSubtotal,
  sliderSiguiente,
}) => {
  const [cartValido, setCartValido] = useState(true);

  useEffect(() => {
    if (carrito.length === 0) {
      setCartValido(false);
    }
  }, [carrito]);

  const VolverATienda = () => {
    Swal.fire({
      title: "Volver a la Tienda?",
      text: "Tu carrito no se perderá.",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#ABB2B8",
      confirmButtonText: "Llevame!",
    }).then((result) => {
      if (result.value) {
        window.location.href = "main";
      }
    });
  };

  return (
    <Fragment>
      <Container>
        <Row className="mt-5 d-flex flex-column">
          <Col className="d-flex align-items-end border-bottom">
            <h3>Carrito de Compras</h3>
          </Col>
          <Col className="border-bottom mb-3 mt-3">
            <ListaProductos
              carrito={carrito}
              setCarrito={setCarrito}
              calcularSubtotal={calcularSubtotal}
              setCartValido={setCartValido}
            />
          </Col>
          <Col className="mt-3 mb-4 d-flex align-items-center">
            <Button
              className="w-25 d-flex justify-content-center mr-2 btn-irTienda"
              variant="outline-secondary"
              onClick={() => VolverATienda()}
            >
              Tienda!
            </Button>
            <Button
              onClick={cartValido ? sliderSiguiente : null}
              className="w-25 d-flex justify-content-center"
              variant="secondary"
              disabled={cartValido ? false : true}
              type="submit"
            >
              Siguiente
            </Button>
            <Button
              className="w-25 d-flex justify-content-center ml-2"
              variant="outline-danger"
            >
              Cancelar
            </Button>
          </Col>
        </Row>
        {cartValido ? null : (
          <span className=" text-danger d-block">
            <p>
              {carrito.length === 0
                ? "Su carrito está vacío! Vuelva a la Tienda!"
                : "Error!  Hay un problema con uno o mas productos de su carrito!"}
            </p>
          </span>
        )}
      </Container>
    </Fragment>
  );
};

export default ShoppingCart;
