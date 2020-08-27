

// import React from 'react'
// import {Col, Row, Form, Button} from 'react-bootstrap';
// import "./styles.css";

// const AgregProd = () => {
//   return(
//     <>
//     <h3 className="text-center text-white">Agregar Nuevo Producto</h3>
//     <Row>
// <div className="col-4"></div>
// <div className="col-4">
// <Form >
  
    
//     <Col>
//       <Form.Control placeholder="Nombre producto" className="m-2 align-center tamanoInputPanel" />
//     </Col>
//     <Col>
//       <Form.Control placeholder="Descripción"className="m-2 tamanoInputPanel" />
//     </Col>
   
//     <Col>
//       <Form.Control placeholder="Precio" className="m-2 tamanoInputPanel" />
//     </Col>
//     <Col>
//       <Form.Control placeholder="Stock" className="m-2 tamanoInputPanel" />
//     </Col>
    
// <Col>
// <Button className="form-control bg-primary tamanoInputPanel m-1">Añadir</Button>
// </Col>
// </Form>
// </div>

// <div className="col-4"></div>
// </Row>
//     </>
//    )
// }
// export default AgregProd;

import React, { useState } from 'react';
import {Col, Row, Button, ButtonGroup, Form, InputGroup, FormControl, Container} from 'react-bootstrap';
import "./style.css";

import Swal from 'sweetalert2'
import Drag from './Drag';

const AgregProd = () => {

  
    return (<> 
    
    <Container fluid>
      <br/>
    <h1 className="text-center text-white">Nuevo Producto </h1>s
    
    <Form style={{marginLeft:"100px", marginRight:"100px"}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Nombre del producto</Form.Label>
    <Form.Control type="email" placeholder="nombre" />
    
  </Form.Group>

  <Row>
    <Col>
      <Form.Control placeholder="Categoria" />
    </Col>
    <Col>
      <Form.Control placeholder="Precio" />
    </Col>
  </Row>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Descripcion del producto</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Importe imagen del producto" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

  </Container>

</>  );
}
 
export default AgregProd;