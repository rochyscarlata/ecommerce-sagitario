import React from 'react'
import {Col, Row, Container, Button} from "react-bootstrap"
import "./style.css"

const PagoPendiente = () => {
  return(<>
  <div className="loading">
      <div>
        <Container >
          <Row className="conteniendo2">
            <Col  xl={7} lg={7} md={7}  className="volverApag">
              <h2 >El pago esta siendo procesado</h2>
              
              
            </Col>
            <Col className="contenedor-boton">
           
            </Col>
          </Row>
        </Container>
      </div>
    </div>
   </>)
}

export default PagoPendiente;