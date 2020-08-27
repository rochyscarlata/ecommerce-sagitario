import React from "react";
import {Container ,Col , Modal , Row , Button} from "react-bootstrap"



const  MydModalWithGrid= ( props) => {
    return (
        
      <Modal {...props}  aria-labelledby=" contained-modal-title-vcenter " >
        <Modal.Header closeButton className="modalInfoTurno" style={{borderTopLeftRadius:"0px",borderTopRightRadius:"0px", borderBottom:"1px solid yellowgreen"}}>
          <Modal.Title id="contained-modal-title-vcenter" >
            {props.nombre}
          </Modal.Title>
        </Modal.Header >
        <Modal.Body className="show-grid modalInfoTurno" >
          <Container>
            <Row>
              <Col xs={12} md={8}>
                .col-xs-12 .col-md-8
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
  
            <Row>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="modalInfoTurno" style={{borderBottomLeftRadius:"0px", borderBottomRightRadius:"0px", borderTop:"1px solid yellowgreen"}}>
          <Button variant="dark" onClick={props.onHide}>cerrar</Button>
        </Modal.Footer>
      </Modal>
   
    );
  }
  export default  MydModalWithGrid;
  
  