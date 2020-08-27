import React, { useState, Fragment, useEffect, useRef } from "react";
import cupones from "../1 DB/cupones";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./styles.css";

function CuponModal({ setDescuento, subtotal }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [validandoCupon, setValidandoCupon] = useState(false);
  const [cuponIngresado, setCuponIngresado] = useState({ codigo: "", pin: "" });
  const [cuponValido, setCuponValido] = useState();

  const { register, errors, handleSubmit } = useForm();

  function simularCargando() {
    return new Promise((resolve) => setTimeout(resolve, 1200));
  }

  useEffect(() => {
    cupones.map((cupon) =>
      cupon.codigo === parseInt(cuponIngresado.codigo) &&
      cupon.pin === parseInt(cuponIngresado.pin)
        ? setCuponValido(true) || setDescuento((cupon.descuento * subtotal) / 100) || setMostrarModal(false)
        : setCuponValido(false)
    );
  }, [validandoCupon]);

  useEffect(() => {
    if (validandoCupon) {
      simularCargando().then(() => {
        setValidandoCupon(false);
      });
    }
  }, [validandoCupon]);

  const onSubmit = (datos) => {
    console.log(datos);
    setCuponIngresado(datos);
  };


  return (
    <Fragment>
      <Button
        disabled={cuponValido}
        variant="outline-danger"
        className="cupon shadow-sm"
        onClick={() => setMostrarModal(true)}
        size="md"
      >
        {" "}
        <h6 className="mt-2">CANJEAR CUPÓN</h6>
      </Button>
      <Modal
        ref={Modal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}   
      >
        <Modal.Header closeButton={validandoCupon ? false : true}>
          <Modal.Title id="contained-modal-title-vcenter" className="mt-3">
            <h3 className="titulo-cupon">Cupón de descuento</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-block">
            <Col>
              <Row className="d-flex flex-column">
                <Col className="mb-2 mt-4">
                  <h5>Ingresar Datos:</h5>
                </Col>
                <Col>
                  <form>
                    <Row className="d-md-flex flex-md-row mr-sm-4 ml-sm-4">
                      <Col sm="8">
                        <Form.Control
                          disabled={validandoCupon}
                          className="mb-2 input-cupon"
                          type="text"
                          maxLength="10"
                          name="codigo"
                          placeholder="Código del cupón"
                          ref={register({
                            required: true,
                            minLength: 10,
                          })}
                        />
                        {errors.codigo && errors.codigo.type === "required" && (
                          <span className="input-error text-danger text-small d-block mb-2">
                            Campo requerido
                          </span>
                        )}
                        {errors.codigo &&
                          errors.codigo.type === "minLength" && (
                            <span className="input-error text-danger text-small d-block mb-2">
                              No menos de 10 caracteres
                            </span>
                          )}
                      </Col>

                      <Col xs="4" sm="4">
                        <Form.Control
                          disabled={validandoCupon}
                          type="text"
                          maxLength="4"
                          className="mb-2 input-cupon"
                          placeholder="PIN"
                          name="pin"
                          ref={register({
                            required: true,
                            minLength: 4,
                          })}
                        />
                        {errors.pin && errors.pin.type === "required" && (
                          <span className="input-error text-danger text-small d-block mb-2">
                            Campo requerido
                          </span>
                        )}
                        {errors.pin && errors.pin.type === "minLength" && (
                          <span className="input-error text-danger text-small d-block mb-2">
                            No menos de 4 caracteres
                          </span>
                        )}
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </Col>
            <Col className="mt-4">
              <p>
                - Recuerde revisar la fecha de caducidad de su cupón. <br />- Si
                posee algún problema no dude en{" "}
                <a href="http://localhost:3000/turn">Solicitar un Turno</a> en
                algunas de nuestras sucursales.
              </p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={validandoCupon}
            variant="outline-secondary"
            onClick={() => setMostrarModal(false)}
          >
            Cerrar
          </Button>
          <Button
            className="btn-cargando"
            variant="success"
            disabled={validandoCupon}
            onClick={handleSubmit(
              (data) => setValidandoCupon(true) || onSubmit(data)
            )}
          >
            {validandoCupon ? (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Canjear Cupón"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default CuponModal;
