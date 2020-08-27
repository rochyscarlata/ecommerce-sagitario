import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Rochy from "../Images/rochy.png";
import Sergio from "../Images/sergio.png";
import Nicole from "../Images/nicole1.jpeg";
import Mauricio from "../Images/mauricio.png";
import HeaderStatic from "../Layout/HeaderStatic";
import Footer from "../Layout/Fotter";
// stilos de register
import "./styles.css";

const PageService = ({ authen, setAuthen ,usuario}) => {
  return (
    <>
      <HeaderStatic authen={authen} setAuthen={setAuthen} usuario={usuario}/>
      <Container fluid className="bodyPadre">
        <Row>
          <Col xs={12} xl={6}>
            {" "}
            <h1
              className="text-center textos nuestro p-3 m-3"
              style={{ color: "yellowgreen" }}
            >
              {" "}
              NUESTROS SERVICIOS
            </h1>
            <Container fluid>
              {" "}
              <Row>
                <Col xs={12} className="nuestroServ">
                  {" "}
                  <h4 className="textos text-center">
                    {" "}
                    SOMOS SERVICIO OFICIAL de las principales marcas de audio y
                    video.
                  </h4>
                  <br></br>
                  <p className="p-3">
                    {" "}
                    Reparamos TV,LCD,LED , monitores,DVD,BLU,RAY,Camaras
                    digitales filmadoras, Equipos de audio- minicomponentes,home
                    cinema, PLAY STATION (PS),computadoras , microondas{" "}
                  </p>
                  <br></br>
                  <h3
                    className="text-center textos"
                    style={{ color: "yellowgreen" }}
                  >
                    QUIENES SOMOS
                  </h3>
                  <br></br>
                  <p className="p-3">
                    {" "}
                    Electronica Zero es un servicio técnico donde se realizan
                    reparaciones de productos electrónicos de todas las
                    marcas,tenemos técnicos especializados. Trabajamos con
                    repuestos originales y entregamos garantías escritas.
                    Financiamos con tarjetas, Recibimos débito y crédito.{" "}
                  </p>
                </Col>{" "}
              </Row>
            </Container>
          </Col>

          {/*COMINEZA SEGUNDA PARTE DE SERVICIOS*/}
          <Col>
            <Container>
              <Row>
                <Col xs={12} xl={6}>
                  {" "}
                  <h4 className="titulo m-3 p-3">Audio</h4>
                  <i
                    class="ml-5 fas fa-volume-up fa-5x"
                    style={{ color: "#19ED18" }}
                  ></i>
                  <br></br>
                  <span>
                    Reparamos equipos de audio con y sin garantía. Empleamos
                    repuestos originales.
                  </span>
                </Col>
                <Col className="m-3">
                  {" "}
                  <h4 className="titulo p-3">Tv Digital</h4>
                  <i
                    class="ml-5 fas fa-tv fa-5x"
                    style={{ color: "#19ED18" }}
                  ></i>
                  <br></br>
                  <span>
                    Se hacen reparaciones de tv led y lcd, monitores y
                    computadores.
                  </span>
                </Col>
              </Row>
              <Row>
                <Col xs={12} xl={6}>
                  {" "}
                  <h3 className="titulo p-3">Responsabilidad</h3>
                  <i
                    class="ml-5 far fa-clock fa-5x"
                    style={{ color: "#19ED18" }}
                  ></i>{" "}
                  <br></br>
                  <span>
                    Empleamos los mejores instrumentos de medición electrónica.
                    Repuestos originales.
                  </span>
                </Col>
                <Col className="m-3">
                  {" "}
                  <h4 className="titulo p-3">Soporte</h4>
                  <i
                    class="ml-5 fas fa-phone fa-5x"
                    style={{ color: "#19ED18" }}
                  ></i>
                  <br></br>
                  <span>Ofrecemos garantía escrita de nuestros trabajos.</span>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <hr></hr>
        <Row className="justify-content-xl-center contenedor-persona">
          <Col xs={12} xl={2} className="contenedorPersona">
            {" "}
            <div className="persona roundedCircle " style={{ padding: "5px" }}>
              {" "}
              <img
                style={{ height: "150px" }}
                src={Rochy}
                className="imagen-pers"
                alt="photo"
              />{" "}
              <div className="nombre-imagen">
                {" "}
                <p>Rosario Scarlata</p>
              </div>
            </div>{" "}
          </Col>

          <Col xs={12} xl={2}>
            {" "}
            <div className="persona roundedCircle ">
              {" "}
              <img
              alt="photo"
                style={{ height: "150px" }}
                src={Sergio}
                className="imagen-pers"
              />
              <div className="nombre-imagen">
                {" "}
                <p>Sergio Rosales</p>
              </div>
            </div>
          </Col>

          <Col xs={12} xl={2}>
            {" "}
            <div className="persona roundedCircle ">
              <img
              alt="photo"
                style={{ height: "150px" }}
                src={Nicole}
                className="imagen-pers"
              />
              <div className="nombre-imagen">
                {" "}
                <p>Nicole Romero</p>
              </div>
            </div>
          </Col>

          <Col xs={12} xl={2}>
            {" "}
            <div className="persona roundedCircle ">
              {" "}
              <img
              alt="photo"
                style={{ height: "150px" }}
                src={Mauricio}
                className="imagen-pers"
              />
              <div className="nombre-imagen">
                {" "}
                <p>Mauicio Dranizareck</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PageService;
