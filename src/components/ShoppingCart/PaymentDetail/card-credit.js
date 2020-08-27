import React, { useState, Fragment} from "react";
import { Col, Row, Form, Container, Card } from "react-bootstrap";
import Cards from "react-credit-cards";
import "./styles.css";
import "react-credit-cards/es/styles-compiled.css";

const CreditCard = ({ onClick, seleccionado, register, errors }) => {
  const [numero, setNumero] = useState("");
  const [nombre, setNombre] = useState("");
  const [expiracion, setExpiracion] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <Fragment>
      <Card
        onClick={onClick}
        className={
          seleccionado
            ? "metodo-pago mb-3 shadow metodo-seleccionado"
            : "metodo-pago mb-3 shadow"
        }
      >
        <Container className="mb-3">
          <Row className="d-flex flex-column">
            {seleccionado ? (
              <Col className="mt-3 tarjeta-grafico">
                <div className="mt-3 mb-3">
                  <Cards
                    className="shadow"
                    cvc={cvc}
                    expiry={expiracion}
                    focused={focus}
                    name={nombre}
                    number={numero}
                  />
                </div>
              </Col>
            ) : null}

            <Col>
              <Row className="d-flex flex-column mt-3 mb-3">
                <Col>
                  <Row>
                    <Col className="mt-2" xs="auto">
                      <Form.Check
                        checked={seleccionado}
                        readOnly={true}
                        type="radio"
                      />
                    </Col>
                    <Col>
                      <Card.Title>
                        <Row className="d-flex flex-column">
                          <Col>
                            <h5>Tarjeta de Crédito</h5>
                          </Col>
                          <Col>
                            <h6>
                              Usar tarjeta de crédito como medio de pago (VISA,
                              MasterCard)
                            </h6>
                          </Col>
                        </Row>
                      </Card.Title>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Form>
                    <Row className="d-flex flex-column">
                      <Col className="mb-3 mt-2">
                        <Row className="">
                          <Col xs="8" sm="6" md="6" lg="8">
                            <Form.Control
                              className="d-flex justify-content-between small-placeholder"
                              type="tel"
                              name="numero"
                              maxLength="16"
                              placeholder="- - - -     - - - -     - - - -     - - - -"
                              disabled={seleccionado ? false : true}
                              onChange={(e) => setNumero(e.target.value)}
                              onFocus={(e) => setFocus(e.target.name)}
                              ref={register({
                                required: true,
                                minLength: 16,
                              })}
                            />
                            {errors.numero &&
                              errors.numero.type === "required" && (
                                <span className="input-error text-danger text-small d-block mb-2">
                                  {seleccionado && "Campo requerido"}
                                </span>
                              )}
                            {errors.numero &&
                              errors.numero.type === "minLength" && (
                                <span className="input-error text-danger text-small d-block mb-2">
                                  {seleccionado
                                    ? isNaN(numero)
                                      ? "Solo números"
                                      : "No menos de 16 caracteres"
                                    : null}
                                </span>
                              )}
                          </Col>
                          <Col xs="2" sm="3" md="3" lg="2">
                            <Form.Control
                              className="small-placeholder"
                              type="tel"
                              name="expiracion"
                              maxLength="4"
                              placeholder="M/A"
                              disabled={seleccionado ? false : true}
                              onChange={(e) => setExpiracion(e.target.value)}
                              onFocus={(e) => setFocus(e.target.name)}
                              ref={register({
                                required: true,
                                minLength: 4,
                              })}
                            />
                            {errors.expiracion &&
                              errors.expiracion.type === "required" && (
                                <span className="input-error text-danger text-small d-block mb-2">
                                  {seleccionado && "Campo requerido"}
                                </span>
                              )}
                            {errors.expiracion &&
                              errors.expiracion.type === "minLength" && (
                                <span className="input-error text-danger text-small d-block mb-2">
                                  {seleccionado
                                    ? isNaN(numero)
                                      ? "Solo números"
                                      : "No menos de 4 caracteres"
                                    : null}
                                </span>
                              )}
                          </Col>
                          <Col xs="2" sm="3" md="3" lg="2">
                            <Form.Control
                              className="small-placeholder"
                              type="tel"
                              maxLength="3"
                              name="cvc"
                              placeholder="CVC"
                              disabled={seleccionado ? false : true}
                              onChange={(e) => setCvc(e.target.value)}
                              onFocus={(e) => setFocus(e.target.name)}
                              ref={register({
                                required: true,
                                minLength: 3,
                              })}
                            />
                            {errors.cvc && errors.cvc.type === "required" && (
                              <span className="input-error text-danger text-small d-block mb-2">
                                {seleccionado && "Campo requerido"}
                              </span>
                            )}
                            {errors.cvc && errors.cvc.type === "minLength" && (
                              <span className="input-error text-danger text-small d-block mb-2">
                                {seleccionado
                                  ? isNaN(numero)
                                    ? "Solo números"
                                    : "No menos de 3 caracteres"
                                  : null}
                              </span>
                            )}
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Form.Control
                          className="small-placeholder"
                          type="text"
                          name="nombre"
                          placeholder="Nombre en la Tarjeta"
                          disabled={seleccionado ? false : true}
                          onChange={(e) => setNombre(e.target.value)}
                          onFocus={(e) => setFocus(e.target.name)}
                          ref={register({
                            required: true,
                          })}
                        />
                        {errors.nombre && errors.nombre.type === "required" && (
                          <span className="input-error text-danger text-small d-block mb-2">
                            {seleccionado && "Campo requerido"}
                          </span>
                        )}
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </Fragment>
  );
};

export default CreditCard;
