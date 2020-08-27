import React from "react";
import { Col, Row, Card, FormCheck } from "react-bootstrap";
import "./styles.css";

const CardOpcion = ({name, onChange, onClick, seleccionado, value, titulo, descripcion}) => {
  return (
    <Card
      name={name}
      onChange={onChange}
      defaultValue={value}
      className={
        seleccionado
          ? "card-tipo-envio-seleccionado shadow"
          : "card-tipo-envio shadow"
      }
      onClick={onClick}
    >
      <Card.Body>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="auto" className="d-flex align-items-center mb-sm-2 ">
            <FormCheck
              className="card-envio-checkbox"
              type="radio"
              readOnly={true}
              checked={seleccionado}
            />
          </Col>
          <Col xs="12" md="9">
            <Card.Title className="titulo-card-envio">
              {titulo}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted detalle-card-envio">
              {descripcion}
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardOpcion;
