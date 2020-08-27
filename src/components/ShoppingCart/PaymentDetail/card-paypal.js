import React from "react";
import { Col, Form, Row, Container, Card } from "react-bootstrap";
import paypalLogo from "../../assets/paypal-logo.svg";
import "./styles.css";

const PaypalCard = (props) => {
  return (
    <Card
      onChange={props.onChange}
      className={
        props.seleccionado
          ? "metodo-pago mb-3 shadow metodo-seleccionado"
          : "metodo-pago mb-3 shadow"
      }
      onClick={props.onClick}
    >
      <Container className="mb-2 mt-4">
        <Row className="d-flex justify-content-between">
          <Col className="mt-2" xs="auto">
            <Form.Check
              readOnly={true}
              checked={props.seleccionado}
              type="radio"
            />
          </Col>
          <Col>
            <Card.Title>
              <Row className="d-flex flex-column">
                <Col>
                  <h5>Paypal</h5>
                </Col>
                <Col>
                  <h6>
                    Utilizar PayPal como forma de pago (requiere inicio de
                    sesion)
                  </h6>
                </Col>
              </Row>
            </Card.Title>
          </Col>
          <Col className="d-flex align-items-start mt-2 ">
            <Card.Img src={paypalLogo} height="45" />
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default PaypalCard;
