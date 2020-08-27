import React, { useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import CreditCard from "./card-credit";
import PaypalCard from "./card-paypal";
import "./styles.css";

const PaymentDetail = ({ sliderAnterior }) => {
  const [metodoSeleccionado, setMetodoSeleccioando] = useState("");
  const [datosTarjeta, setDatosTarjeta] = useState();

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (datos) => {
    if (metodoSeleccionado === "TarjetaCredito") {
      setDatosTarjeta(datos);
      console.log(datos);
    } else if (metodoSeleccionado === "Paypal") {
      console.log("paypal");
    }
  };

  return (
    <Container>
      <Row className="mt-5 d-flex flex-column">
        <Col className="d-flex align-items-end border-bottom">
          <h3>Forma de Pago</h3>
        </Col>
        <Col className="border-bottom mb-3 mt-3">
          <CreditCard
            onClick={() => setMetodoSeleccioando("TarjetaCredito")}
            seleccionado={
              metodoSeleccionado === "TarjetaCredito" ? true : false
            }
            datosTarjeta={datosTarjeta}
            setDatosTarjeta={setDatosTarjeta}
            register={register}
            errors={errors}
          />
        </Col>
        <Col className="border-bottom mb-3 mt-3">
          <PaypalCard
            onClick={() => setMetodoSeleccioando("Paypal")}
            seleccionado={metodoSeleccionado === "Paypal" ? true : false}
          />
        </Col>
        <Col className="mt-3 mb-4 d-flex justify-content-start align-items-center">
          <Button onClick={sliderAnterior} className="mr-2" variant="secondary">
            Anterior
          </Button>
          {metodoSeleccionado === "TarjetaCredito" ? (
            <Button
              onClick={handleSubmit(onSubmit)}
              className="mr-2"
              variant="success"
              type="submit"
            >
              Finalizar Compra
            </Button>
          ) : metodoSeleccionado === "" ? (
            <Button disabled="true" className="mr-2" variant="success">
              Finalizar Compra
            </Button>
          ) : metodoSeleccionado === "Paypal" ? (
            <Button
              onClick={() => console.log("paypal")}
              className="mr-2"
              variant="success"
              type="submit"
            >
              Finalizar Compra
            </Button>
          ) : null}

          <Button className="" variant="outline-danger">
            Cancelar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentDetail;
