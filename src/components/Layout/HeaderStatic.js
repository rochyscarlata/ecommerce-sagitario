import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Image,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import Loguito from "../Images/logoSagitario.jpeg";
import { FaUser, FaShareSquare } from "react-icons/fa";

const HeaderStatic = ({ authen, setAuthen, usuario }) => {
  let history = useHistory();
  const cerrarSes = () => {
    localStorage.removeItem("Token");
    setAuthen(null);
    history.push("/");
  };

  return (
    <Fragment>
      <Container fluid className="Container_Header">
        {/* <Navbar collapseOnSelect expand="lg"  variant="dark">
          <Navbar.Brand href="/main" className="">
            <Image fluid src={Loguito} className="logo_imagen_header" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="d-flex flex-column-reverse flex-lg-row justify-content-center">
              
              <Nav.Link href="/main" className="btnNav_header d-flex justify-content-center align-items-center">
                Tienda
              </Nav.Link>

              <Nav.Link href="/service" className="btnNav_header d-flex justify-content-center align-items-center">
                Servicios
              </Nav.Link>

              <Nav.Link href="/turn" className="btnNav_header d-flex justify-content-center align-items-center">
                Turno
              </Nav.Link>

       

          <Button
            className="btnLogin_header btnLogin-out mr-3 shadow"
            onClick={() => {
              history.push("/");
            }}
          >
            INICIAR SESIÓN
          </Button>
        </Navbar> */}
        {/* <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Sagitario</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Contacto</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
        
        </Nav> */}
        <Navbar bg="light" expand="lg" className="text-danger" >
        <Navbar.Brand href="/main" className="">
            <Image fluid src={Loguito} className="logo_imagen_header" />
          </Navbar.Brand>
          <Navbar.Brand href="#home" className="navbarnuevo" > Sagitario Minimarket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav" className="navbarnuevo">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="navbarnuevo">Home</Nav.Link>
              <Nav.Link href="#link" className="navbarnuevo">Contacto</Nav.Link>
              <NavDropdown title="Categoria" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Bebidas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                 Limpieza
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Comestible
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
           
          </Navbar.Collapse>
          <Button
            className="btnLogin_header btnLogin-out mr-3 shadow"
            onClick={() => {
              history.push("/");
            }}
          >
            INICIAR SESIÓN
          </Button>
        </Navbar>
      </Container>
    </Fragment>
  );
};

export default HeaderStatic;
