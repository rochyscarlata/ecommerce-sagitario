import React, { useState, useEffect } from "react";

import {
  Row,
  Col,
  Card,
  Button,
  Container,
  CardColumns,
  Dropdown,
  Accordion,
} from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import axiosInstance from "../util/axiosInstance";

import { CardText } from "react-bootstrap/Card";
import swal from "sweetalert";

const Mostrador = ({ setProducts, products }) => {
  //Traer productos de base de datos

  const getProductos = async () => {
    const response = await axiosInstance.get("/producto");

    setProductos(response.data.productos);
  };
  useEffect(() => {
    getProductos();
  }, []);

  // Estados
  const [productos, setProductos] = useState([]);

  const [categorias, setCategorias] = useState([]);

  // Funcion mostrar Imagen derecha
  const mostrarImg = ({ nombre, id, precio, descripcion, imagen }) => {
    swal({
      title: nombre,
      imageUrl: imagen[0],
      titleText: descripcion,
      text: ` $ ${precio}`,
      imageHeight: 300,
      imageAlt: "A tall image",
    });
  };

  // const filtrarCategorias = ({productos,categoria}) => {
  //   console.log(productos)
  //     const newCategorias = productos.filter(element => element.tipo != categoria )
  //     console.log(newCategorias)

  //  }
  //  const handleCategoria = (e) => {
  //   const categoria = e
  //   console.log(productos)
  //   filtrarCategorias(productos,categoria)
  // }

  //agregar al carrito
  const botonAlerta = (product) => {
    console.log(product);

    setProducts([...products, product]);

    swal({
      icon: "success",
      title: "Producto agregado correctamente",
      timer: 2000,
    });
  };

  return (
    <>
      <p className="titulo_product_main">Productos</p>
      <Container fluid className="contenedor-mostrador">
        <Row style={{ background: "white", margin: "0px" }}>
          <Col sm={2} style={{ backgroundColor: "white" }}>
            <h3 style={{ color: "black" }}>Filtrar por: </h3>
            <br />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#212121" }}
              >
                Categoria
              </Dropdown.Toggle>

              <Dropdown.Menu>
                
                <Dropdown.Item eventKey="Monitores">Bebidas</Dropdown.Item>
                <Dropdown.Item eventKey="Mouse">Limpieza</Dropdown.Item>
                <Dropdown.Item eventKey="Sillas">Comestible</Dropdown.Item>
               
              </Dropdown.Menu>
            </Dropdown>

            <br />
            <br />
            {/* <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#212121", outlineColor: "black" }}
              >
                Precio
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Menor a mayor</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Mayor a menor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Col>
          <Col
            sm={8}
            className="columnitax"
            style={{ backgroundColor: "white" }}
          >
            <CardColumns className="cardColumns">
              {productos.map((producto) => (
                <Card key={producto.id} sm={12} className="cardProduct">
                  <Card.Img
                    variant="top"
                    src={producto.imagen[0]}
                    rounded
                    style={{ height: "250px" }}
                  />
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>${producto.precio}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Row className="rowroto">
                      <Col className="p-0">
                        <Button
                          border="danger"
                          className="btnroto"
                          style={{
                            border: "3px solid #060606",
                            color: "#19ED18",
                            backgroundColor: "#060606",
                            fontSize: "0.9rem",
                          }}
                          onClick={() => mostrarImg(producto)}
                        >
                          Ver mas
                        </Button>
                      </Col>
                      <Col className="p-0">
                        <Button
                          variant="success"
                          className="btnroto"
                          style={{
                            border: "2px solid #19ED18",
                            fontSize: "0.9rem",
                            backgroundColor: "#19ED18",
                            color: "black",
                          }}
                          onClick={() => botonAlerta(producto)}
                        >
                          <FaCartPlus /> Agregar
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              ))}
            </CardColumns>
          </Col>
          <Col sm={2} style={{ backgroundColor: "white" }}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Mostrador;
