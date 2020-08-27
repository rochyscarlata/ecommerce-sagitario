import React from "react";
import { Container,  Button, Row, Col } from "react-bootstrap";

import "./styles.css";

const Error404 = () => {
  return (
    <div className="fondo">
      <div>
        <Container >
          <Row className="conteniendo2">
            <Col  xl={7} lg={7} md={7}  className="volverApag">
              <h2 className="letraFriki ">Page not found</h2>
              <h4  >Are you sure the website URL is correct?</h4>
              
            </Col>
            <Col className="contenedor-boton">
            <Button 

                className="ingreso"
                type="button"
                size="sm"
                variant="info"
                href="../Main"
              >
                Back to home
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Error404;
