/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Loguito from "../Images/logoSagitario.jpeg";
import fbIcon2 from "../assets/icons/facebook2.svg";
import twIcon from "../assets/icons/twitter.svg";
import instaIcon from "../assets/icons/instagram.svg";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaPaypal,
  FaCcPaypal,
} from "react-icons/fa";
import "./styles.css";

const Fotter = () => {
  const ubicacion =
    "https://www.google.com/maps/dir/-26.8322264,-65.2026019/rolling+code+tucuman/@-26.8346764,-65.2067965,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94225d3ad7f30f1d:0xf8606cd659b8e3e4!2m2!1d-65.2072018!2d-26.8367009";

  return (
    <Container fluid className="container_footer">
      <Container className="d-flex flex-column justify-content-center">
        <Row className="d-flex flex-column justify-content-center">
          <Col className="d-flex justify-content-center">
            <Row className="footer-section d-flex justify-content-around align-items-center flex-column flex-md-row w-100">
              <Col className="footer-menu-link-container h-100">
                <Link
                  className="footer-menu-list-link h-100 text-justify text-center"
                  to="/main"
                >
                  NUESTRA TIENDA
                </Link>
              </Col>
              <Col className="footer-menu-link-container h-100">
                <a
                  className="footer-menu-list-link h-100 text-justify text-center"
                  href={ubicacion}
                  rel="noopener noreferrer"
                  target="_new"
                >
                  COMO LLEGAR
                </a>
              </Col>
              
             
              <Col className="footer-menu-link-container h-100">
                <Link
                  className="footer-menu-list-link h-100 text-justify text-center"
                  to="/service"
                >
                  CONTACTO
                </Link>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex justify-content-center mt-4">
            <Row className="footer-section d-flex align-items-center">
              <Image src={Loguito}  className="logo_imagen_header" />
            </Row>
          </Col>
          
          <Col className="d-flex justify-content-center mt-4">
            <Row className="footer-section d-flex justify-content-center align-items-center">
              <Col
                md="8"
                className="footer-disclaimer text-justify text-center"
              >
                Sagitario® ● Suipacha 681 ● S.M Tucuman  ● Tucuman ●
                Argentina ● www.sagitariomarket.com. Todos los derechos
                reservados.
              </Col>
            </Row>
          </Col>
          <Col className="d-flex justify-content-center">
            <Row className="footer-section d-flex justify-content-around justify-content-center align-items-start mt-3 w-50">
              <Col className="d-flex justify-content-center">
                <a className="footer-disclaimer-option" href="#">
                  Política de Privacidad
                </a>
              </Col>
              <Col className="d-flex justify-content-center">
                <a className="footer-disclaimer-option" href="#">
                  Términos de uso
                </a>
              </Col>
              <Col className="d-flex justify-content-center">
                <a className="footer-disclaimer-option" href="#">
                  Pólitica de cookies
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex justify-content-center mb-5">
            <Row className="footer-section d-flex justify-content-center align-items-center w-50 h-100">
              <Col
                xs="3"
                md="2"
                className="d-flex justify-content-center h-100"
              >
                <FaCcVisa className="footer-icono w-100 h-100 text-warning" />
              </Col>
              <Col
                xs="3"
                md="2"
                className="d-flex justify-content-center h-100"
              >
                <FaCcMastercard className="footer-icono w-100 h-100 text-danger" />
              </Col>
              <Col
                xs="3"
                md="2"
                className="d-flex justify-content-center h-100"
              >
                <FaCcAmex className="footer-icono w-100 h-100 text-info" />
              </Col>
              <Col
                xs="3"
                md="2"
                className="d-flex justify-content-center h-100"
              >
                <FaCcPaypal className="footer-icono w-100 h-100 text-primary" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Fotter;
