import React from "react";
import { Card,  Button } from "react-bootstrap";
import "./style.css";

const TurnosPanel = () => {
  return (
    <>
      <div className="container text-center text-white">
        <h2>
          Turnos asignados
        </h2>
        <div className="row">
          {" "}
          <Card className="turnoAsignado"
            style={{
              width: "18rem",
              backgroundColor: "#2B2C2B",
              color: "white",
              margin:"20px"
            }}
          >
            <Card.Body>
              <Card.Title>Nombre: </Card.Title>
              <Card.Text>
                <ul>
                  <li> Tipo de consulta:</li>
                  <li>Hora:</li>
                </ul>
              </Card.Text>
              <Button variant="success">Eliminar Turno</Button>
            </Card.Body>
          </Card>
          <Card className="turnoAsignado"
            style={{
              width: "18rem",
              backgroundColor: "#2B2C2B",
              color: "white",
              margin:"20px"
            }}
          >
            <Card.Body>
              <Card.Title>Nombre: </Card.Title>
              <Card.Text>
                <ul>
                  <li>Tipo de Consulta:</li>
                  <li>Hora:</li>
                </ul>
              </Card.Text>
              <Button variant="success">Eliminar Turno</Button>
            </Card.Body>
          </Card>
          <Card className="turnoAsignado"
            style={{
              width: "18rem",
              backgroundColor: "#2B2C2B",
              color: "white",
              margin:"20px"
            }}
          >
            <Card.Body>
              <Card.Title>Nombre: </Card.Title>
              <Card.Text>
                <ul>
                  <li>Tipo de Consulta:</li>
                  <li>Hora:</li>
                </ul>
              </Card.Text>
              <Button variant="success">Eliminar Turno</Button>
            </Card.Body>
          </Card>
          <Card className="turnoAsignado"
            style={{
              width: "18rem",
              backgroundColor: "#2B2C2B",
              color: "white",
              margin:"20px"
            }}
          >
            <Card.Body>
              <Card.Title>Nombre: </Card.Title>
              <Card.Text>
                <ul>
                  <li>Clase:</li>
                  <li>Hora:</li>
                </ul>
              </Card.Text>
              <Button variant="success">Eliminar Turno</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TurnosPanel;
