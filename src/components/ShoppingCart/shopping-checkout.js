import React, { Fragment, useState, useRef, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";
import ShippingDetail from "./ShippingDetail/ShippingDetail";
import ShoppingCart from "./CartDetail/ShoppingCart";
import Fotter from "../Layout/Fotter";
import HeaderStatic from "../Layout/HeaderStatic";
import ResumenCompra from "./resumen-compra";
import PaymentDetail from "./PaymentDetail/payment-detail";
import productos from "../Main/basedatos";

import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShoppingCheckout = () => {
  //Carrito
  const [carrito, setCarrito] = useState(() => {
    let carro = productos;
    carro.map((producto) => (producto.cantidad = 1));
    return carro;
  });

  //Para resumen-compra
  const [subtotal, setSubtotal] = useState(() => {
    let subtotal = 0;
    carrito.map(
      (producto) => (subtotal += producto.precio * producto.cantidad)
    );
    return subtotal;
  });
  const [valorEnvio, setValorEnvio] = useState(0);
  const [valorImpuestos, setValorImpuestos] = useState(subtotal * 0.21);
  const [valorDescuento, setDescuento] = useState(0);

  const CalcularSubtotal = () => {
    let subtotal = 0;
    carrito.map(
      (producto) => (subtotal += producto.precio * producto.cantidad)
    );
    setSubtotal(subtotal);
    setValorImpuestos(subtotal * 0.21);
  };

  useEffect(() => {
    CalcularSubtotal();
  }, [carrito]);

  //Slider
  const sliderSettings = {
    swipe: false,
    draggable: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const SliderContainer = useRef();

  const SliderSiguiente = () => {
    SliderContainer.current.slickNext();
  };

  const SliderAnterior = () => {
    SliderContainer.current.slickPrev();
  };

  return (
    <Fragment>
      <Container fluid className="background-checkout">
      <HeaderStatic />
      
        <Container className="shopping-detail-container rounded mt-5 mb-5">
          <Row className="shopping-detail-panel d-sm-flex flex-md-row flex-column-reverse">
            <Col>
              <Slider ref={SliderContainer} {...sliderSettings}>
                <ShoppingCart
                  carrito={carrito}
                  setCarrito={setCarrito}
                  calcularSubtotal={CalcularSubtotal}
                  sliderSiguiente={SliderSiguiente}
                />
                <ShippingDetail
                  sliderSiguiente={SliderSiguiente}
                  sliderAnterior={SliderAnterior}
                  setValorEnvio={setValorEnvio}
                />
                <PaymentDetail sliderAnterior={SliderAnterior} />
              </Slider>
            </Col>

            <Col md="5" lg="4" className="mb-md-5">
              <ResumenCompra
                subtotal={subtotal}
                valorEnvio={valorEnvio}
                valorImpuestos={valorImpuestos}
                setDescuento={setDescuento}
                valorDescuento={valorDescuento}
              />
            </Col>
          </Row>
        </Container>

      <Fotter />
      </Container>
    </Fragment>
  );
};

export default ShoppingCheckout;
