import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import CuponModal from "./CartDetail/cupon-modal";
import "./styles.css";

const ResumenCompra = ({
  subtotal,
  valorEnvio,
  valorImpuestos,
  valorDescuento,
  setDescuento,
}) => {
  const [valorTotal, setValorTotal] = useState(
    (
      parseFloat(subtotal) +
      parseFloat(valorImpuestos) +
      parseFloat(valorEnvio)
    ).toFixed(2)
  );

  useEffect(() => {
    setValorTotal(
      (
        parseFloat(subtotal) +
        parseFloat(valorImpuestos) +
        parseFloat(valorEnvio)
      ).toFixed(2)
    );
  }, [subtotal, valorImpuestos, valorEnvio, valorDescuento]);

  return (
    <Container>
      <Row className="mt-5 d-flex flex-column">
        <Col className="d-flex align-items-end border-bottom">
          <h3>Resumen</h3>
        </Col>
        <Col className="mb-3 border-bottom">
          <div className="mt-3 mb-3 d-flex justify-content-center">
            <CuponModal setDescuento={setDescuento} subtotal={subtotal} />
          </div>
        </Col>
        <Col className="">
          <Row className="d-flex flex-column border-bottom">
            <Col className="mb-2">
              <Row className="d-block">
                <Col className="d-flex justify-content-between">
                  <h5>SUBTOTAL</h5>
                  <h5>${subtotal.toFixed(2)}</h5>
                </Col>
                {valorDescuento === 0 ? null : (
                  <Col>
                    <Card
                      body
                      className="card-descuento"
                    >
                      <Row className="d-flex justify-content-between">
                        <Col xs="auto">Cupón</Col>
                        <Col xs="auto">-${valorDescuento}</Col>
                      </Row>
                    </Card>
                  </Col>
                )}
              </Row>
            </Col>
            <Col className="mb-2 d-flex justify-content-between">
              <h5>Impuestos</h5>
              <h5>${valorImpuestos.toFixed(2)}</h5>
            </Col>
            <Col className="mb-3 d-flex justify-content-between">
              <h5>Envío</h5>
              <h5>${valorEnvio.toFixed(2)} </h5>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="d-flex justify-content-between">
              <h4>TOTAL</h4>
              <h4>${valorTotal}</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumenCompra;
