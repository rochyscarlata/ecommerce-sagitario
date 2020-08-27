import React from 'react'
import {Card, Row, Col, Button, Container} from 'react-bootstrap'

const PagoRechazado = () => {
  return(<>
  <div className="container-fluid fondoo">
    <div>

  <Container className="cartaRachaz">
<Row>
   
<Col  xl={12} lg={12} md={12} >

 <Card className="text-center m-5 cardmadre">
   <Card.Header className="text-white card-rech"><h5>¡ Pago Rechazado !</h5></Card.Header>
 
 <Card.Body>
 {/* <i class="fas fa-exclamation-triangle text-danger fa-4x"></i> */}
 <img className="imgrech" src="https://www.paraserbella.com/wp-content/uploads/2016/08/dedo.png"></img>
 
   <Card.Text>
   <h5> <strong>Hubo un error al procesar tu pago</strong> </h5>
   </Card.Text>

   <Button variant="primary">Volver</Button>
 </Card.Body>
 <Card.Footer className="card-rech text-white"></Card.Footer>
</Card>
</Col>
</Row>
</Container> 
</div>
</div>
   </>)
}

export default PagoRechazado;