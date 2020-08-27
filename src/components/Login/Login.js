import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LoginContainer from "./LoginContainer";
import Sidebar from "./Sidebar";
import Register from "../Register/Register";

// estilos del componente
import "./styles.css";

const Login = () => {
  const [login, setLogin] = useState(true);

  const register = () => {
    if (login === true) {
      setLogin(false);
      return;
    } else {
      setLogin(true);
      return;
    }
  };

  return (
    <div className="bodylogin">
      <Container className="contenedor-inicio xs={10} md={10} lg={10}">
        <Row className="xs={10} md={10} lg={10}">
          <Col xs={6} className="sidebar-contenedor">
            <Sidebar />
          </Col>
          <Col className="login-contenedor">
            <div className="botones">
              <Button type="button" className="toggle" onClick={register}>
                {login ? "Registrarse" : "Iniciar Sesion"}
              </Button>
            </div>

            {login ? <LoginContainer /> : <Register />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
