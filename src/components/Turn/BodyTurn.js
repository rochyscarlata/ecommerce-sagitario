import React, { useState } from "react";
import ListTurn from "./ListTurn";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormTurn from "./FormTurn";


const BodyTurn = (userId) => {
  const [titleBtn, setTitleBtn] = useState(false);

  return (
    <Container fluid className="containerTurn">
      <Row style={{paddingRight:"0", marginRight:"0"}}>
        <Col className="tilteList" >
          <Button onClick={()=>{setTitleBtn(!titleBtn)}}  className="btnForm" >{titleBtn?"Ver Lista de Turnos":"Solicitar Turno"}</Button>
        </Col>
      </Row>
      <h2>{titleBtn ? "Turnos" : "Lista de Turnos"} </h2>

      {titleBtn ? <FormTurn userId={userId}/> : <ListTurn userId={userId} />}
    </Container>
  );
};

export default BodyTurn;
