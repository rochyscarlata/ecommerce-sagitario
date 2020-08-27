import React from 'react'
import { Button, Card, Col, Row, Container } from 'react-bootstrap'

const PagoExitoso = () => {
  return (<>

    <div className="container-fluid fondooexit">
      <div>

        <Container className="cartaexit">
          <Row>

            <Col xl={12} lg={12} md={12} >

              <Card className="text-center m-5 cardmadreExit">
                <Card.Header className="card-exit text-white"><h5>¡ Pago exitoso !</h5></Card.Header>

                <Card.Body>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHBCJMWW3a1baV8vzC1NaYFhhzmmbcpoK6jjfoj8SmIA&usqp=CAU&ec=45675148"
                    style={{ height: '150px' }}></img>

                 
                  <Card.Text>
                    <h5>  <strong>¡Su pago fue procesado exitosamente!</strong></h5>
                  </Card.Text>
                  <Button variant="primary">Volver</Button>
                </Card.Body>
                <Card.Footer className="card-exit text-white">2 days ago</Card.Footer>
              </Card>


            </Col>
          </Row>
        </Container>
      </div>
    </div>

  </>
  )
}

export default PagoExitoso;