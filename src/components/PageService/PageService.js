import React from "react";
import { Container, Row, Col, Form, Button  } from "react-bootstrap";

import Rochy from "../Images/rochy.png";
import Sergio from "../Images/sergio.png";
import Nicole from "../Images/nicole1.jpeg";
import Mauricio from "../Images/mauricio.png";
import HeaderStatic from "../Layout/HeaderStatic";
import Footer from "../Layout/Fotter";
// stilos de register
import "./styles.css";

const PageService = () => {
 
  return (
    <>
      <HeaderStatic />
      <Container  >
        <div className="">    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.32432891947!2d-65.20752588529632!3d-26.82963479620568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225da02794f3e7%3A0xc7e81a8b37332c27!2sSan%20Miguel%20De%20Tucuman!5e0!3m2!1ses!2sar!4v1598904470249!5m2!1ses!2sar" ></iframe>
        </div>

      <Form>
      <Form.Group controlId="">
    <Form.Label>Telefono: </Form.Label>
   
   <a href="tel:943 555 999"></a>

    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
    </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Container>
      <Footer />
    </>
  );
};

export default PageService;
