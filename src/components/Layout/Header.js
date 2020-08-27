import React, { useEffect } from "react";
import { Container, Row, Col, Nav, Button, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import Loguito from "../Images/logoSagitario.jpeg";
import { FaUser, FaShareSquare } from "react-icons/fa";
import BtnCart from "./BtnCart";
import axiosInstance from "../util/axiosInstance";
import HeaderStatic from "./HeaderStatic";

const Header = ({
  products,
  authen,
  setAuthen,
  usuario,
  setCarrito,
  userId,
  setProducts,
}) => {
  let history = useHistory();
  const cerrarSes = () => {
    localStorage.removeItem("Token");
    setAuthen(null);
    history.push("/");
  };
  const TraerCart = () => {
    useEffect(() => {
      let user;
      user = userId;
      fetchCarrito(user);
    }, []);
  };
  const fetchCarrito = async (user) => {
    const id = user;
    const response = await axiosInstance.get(`/cart/${id}`);
    setProducts(response.data.carrito[0].Productos);
  };
  if (userId === undefined) {
    return <HeaderStatic/>;
  } else {
    TraerCart();
  }
  return (
    <Container fluid className="Container_Header">
      <Row className="container_logo" style={{ padding: "0px", margin: "0px" }}>
        <Col xs={4} md={3} className="logo">
          <Image  rounded className="logo_imagen_header" />
          <br />
          <br />
        </Col>
        <Col xs={7} md={9} className="login_registro_header">
          {authen ? (
            <>
              <span>
                <FaUser className="icons_header" />
                Hola: {usuario.username}
              </span>

              <Button
                className="btnLogin_header_logout mr-2"
                style={{ border: "none" }}
                onClick={cerrarSes}
              >
                {" "}
                <FaShareSquare />
              </Button>
            </>
          ) : (
            <Button
              className="btnLogin_header mr-2"
              onClick={()=>{history.push("/")}}
            >
              {" "}
              <FaUser className="icons_header" />
              Iniciar sesion
            </Button>
          )}
        </Col>
      </Row>

      <BtnCart products={products} setCarrito={setCarrito} />

      <Nav className="justify-content-center nav_header">
        <Nav.Item className="nav_header">
          <Link to="/main" className="btnNav_header">
            Tienda
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/service" className="btnNav_header">
            Servicios
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/turn" className="btnNav_header">
            Turno
          </Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Header;
