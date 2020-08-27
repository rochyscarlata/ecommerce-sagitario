import React, { Fragment } from "react";
import HeaderStatic from "../Layout/HeaderStatic";
import Fotter from "../Layout/Fotter";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";

import Loguito from "../Images/Zero-Images/Zero-Black.svg";
import Label from "../Images/Zero-Images/Label1-Black-White.svg";

const MainTest = () => {
  return (
    <Fragment>
      <Container fluid classNAme="main-container ">
        <HeaderStatic />
        
        <Fotter />
      </Container>
    </Fragment>
  );
};

export default MainTest;
