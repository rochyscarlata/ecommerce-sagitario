import React, { useState, Fragment } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import PaisesContainer from "./generador-paises";
import CardOpcion from "./card-opcionales";
import { useForm } from "react-hook-form";
import "./styles.css";

const ShippingDetail = ({ sliderSiguiente, sliderAnterior, setValorEnvio }) => {
  const { register, errors, handleSubmit } = useForm();
  const [metodoEnvio, setMetodoEnvio] = useState("EnvioGratis");
  const [datosEnvio, setDatosEnvio] = useState({
    nombre: "",
    apellido: "",
    direccion1: "",
    direccion2: "",
    pais: "",
    ciudad: "",
    postal: "",
    telefono: "",
    tipoEnvio: "",
  });

  const onSubmit = (data) => {
    sliderSiguiente();
    setDatosEnvio({
      nombre: data.nombre,
      apellido: data.apellido,
      direccion1: data.direccion1,
      direccion2: data.direccion2,
      pais: data.pais,
      ciudad: data.pais,
      postal: data.postal,
      telefono: data.telefono,
      tipoEnvio: metodoEnvio,
    });
  };

  const SeleccionarEnvio = (nombreMetodoEnvio, valor) => {
    setValorEnvio(valor);
    setMetodoEnvio(nombreMetodoEnvio);
  };

  return (
    <Fragment>
      <Container>
        <Row className="">
          <Col className="mt-5 d-flex flex-column">
            <Col className="d-flex align-items-end border-bottom">
              <h3>Detalles de Envío</h3>
            </Col>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Col className="border-bottom">
                <Row className="mt-3 mb-3">
                  <Col>
                    <Form.Control
                      className="shadow-sm"
                      placeholder="Nombre *"
                      name="nombre"
                      type="text"
                      ref={register({
                        required: {
                          value: true,
                          message: "Nombre obligatorio",
                        },
                      })}
                    />

                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.nombre?.message}
                    </span>
                  </Col>
                  <Col>
                    <Form.Control
                      className="shadow-sm"
                      placeholder="Apellido *"
                      name="apellido"
                      type="text"
                      ref={register({
                        required: {
                          value: true,
                          message: "Apellido obligatorio",
                        },
                      })}
                    />
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.apellido?.message}
                    </span>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      className="shadow-sm"
                      placeholder="Direccion *"
                      name="direccion1"
                      ref={register({
                        required: {
                          value: true,
                          message: "Dirección obligatoria",
                        },
                      })}
                    />
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.direccion1?.message}
                    </span>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      className="shadow-sm"
                      placeholder="Direccion 2 (opcional)"
                      name="direccion2"
                      ref={register({
                        required: {
                          value: false,
                          message: "Dirección obligatoria",
                        },
                      })}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      className="shadow-sm"
                      as="select"
                      name="pais"
                      custom
                      ref={register({
                        required: {
                          value: true,
                          message: "Seleccione un país",
                        },
                      })}
                    >
                      <option>Argentina</option>
                      <PaisesContainer />
                    </Form.Control>
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.pais?.message}
                    </span>
                  </Col>
                  <Col>
                    <Form.Control
                      className="shadow-sm"
                      placeholder="Ciudad *"
                      name="ciudad"
                      ref={register({
                        required: {
                          value: true,
                          message: "Ciudad obligatoria",
                        },
                      })}
                    />
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.ciudad?.message}
                    </span>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      className="shadow-sm"
                      placeholder="Codigo ZIP/Postal *"
                      name="postal"
                      type="number"
                      ref={register({
                        required: {
                          value: true,
                          message: "Codigo obligatorio",
                        },
                      })}
                    />
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.postal?.message}
                    </span>
                  </Col>
                  <Col>
                    <Form.Control
                      className="shadow-sm"
                      placeholder="N° Telefono *"
                      name="telefono"
                      type="number"
                      ref={register({
                        required: {
                          value: true,
                          message: "Telefono obligatorio",
                        },
                      })}
                    />
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.telefono?.message}
                    </span>
                  </Col>
                </Row>
              </Col>

              <Col className="mt-4 mb-5">
                <Row className="d-flex justify-content-between">
                  <Col>
                    <CardOpcion
                      onClick={() => SeleccionarEnvio("EnvioGratis", 0)}
                      seleccionado={
                        metodoEnvio === "EnvioGratis" ? true : false
                      }
                      titulo="Envío Gratis"
                      descripcion="Demora entre 2 y 5 días hábiles"
                    />
                  </Col>

                  <Col>
                    <CardOpcion
                      onClick={() => SeleccionarEnvio("EnvioNextDay", 450)}
                      seleccionado={
                        metodoEnvio === "EnvioNextDay" ? true : false
                      }
                      titulo='Envío "Next Day" - $450'
                      descripcion="Entrega en 24 horas"
                    />
                  </Col>
                </Row>
              </Col>

              <Col className="mb-4 d-flex justify-content-start align-items-center">
                <Button
                  onClick={sliderAnterior}
                  className="w-25 mr-2 d-flex justify-content-center"
                  variant="secondary"
                >
                  Anterior
                </Button>
                <Button
                  className="w-25 mr-2 d-flex justify-content-center"
                  variant="secondary"
                  type="submit"
                >
                  Siguiente
                </Button>
                <Button
                  className="w-25 d-flex justify-content-center"
                  variant="outline-danger"
                >
                  Cancelar
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ShippingDetail;
