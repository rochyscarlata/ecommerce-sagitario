import React, { useState } from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "./styles.css";

const ProductCard = ({
  producto,
  carrito,
  setCarrito,
  calcularSubtotal,
  setCartValido,
}) => {
  const { id, img, nombre, descripcion, precio, cantidad } = producto;

  const [inputValido, setInputValido] = useState(true);

  const CambiarCantidad = (e) => {
    const nuevaCantidad = e.target.value;

    setCarrito(
      carrito.map((producto) =>
        producto.id === id ? { ...producto, cantidad: nuevaCantidad } : producto
      )
    );
  };

  const EliminarProducto = () => {
    Swal.fire({
      title: "Eliminar Producto?",
      text: "No podrás deshacer esta acción",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#E74C3C",
      cancelButtonColor: "#ABB2B8",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.value) {
        const productos = carrito.filter((producto) => producto.id !== id);
        setCarrito(productos);
      }
    });
  };

  return (
    <Container className="mt-2 mb-3 product-card border">
      <Row className="mt-2 mb-sm-2">
        <Col
          md="4"
          sm="6"
          className="d-flex justify-content-center align-items-center"
        >
          <Image className="imagen-card" src={img} rounded fluid />
        </Col>
        <Col sm="6" md="8" className="mb-sm-1 producto-descripcion">
          <Row className="mt-2 d-flex flex-column align-items-baseline">
            <Col className="mb-2">
              <Row className="d-flex justify-content-between">
                <Col xs="6" md="8">
                  <h4>{nombre}</h4>
                </Col>
                <Col>
                  <Button onClick={EliminarProducto} className="close">
                    <FaRegTrashAlt className="trash-icono" />
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col className="mb-2 mb-md-5">
              <h6>{descripcion}</h6>
            </Col>
            <Col className="d-flex justify-content-end">
              {inputValido ? null : (
                <span className="input-error text-danger d-block ">
                  <p>Ingrese una cantidad válida!</p>
                </span>
              )}
            </Col>
            <Col>
              <Row>
                <Col className="d-flex justify-content-start">
                  <h5>{"$" + precio}</h5>
                </Col>
                <Col className="d-flex justify-content-end">
                  <Row className="d-block">
                    <Col>
                      <input
                        className="text-center input-cantidad w-100"
                        defaultValue={cantidad}
                        onChange={(e) =>
                          e.target.value < 1
                            ? setInputValido(false) || setCartValido(false)
                            : CambiarCantidad(e) ||
                              setInputValido(true) ||
                              setCartValido(true)
                        }
                        type="number"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCard;
