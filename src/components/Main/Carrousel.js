import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Mercadopa from "../Images/mercadopa.png";
import Carrito from "../Images/carrito.png";
import Dobleverdu from "../Images/dobleverdu.png";
import Barbijo from "../Images/barbijo.png";

const Carrousel = () => {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <img className="w-100" src={Dobleverdu} alt="First slide" />
          <div class="carousel-caption d-none d-md-block ">
            {" "}
            <h1 className="text-light animate__animated animate__bounce titulitos">Realiza tus compras online</h1>{" "}
            
          </div>
        </Carousel.Item>
        <Carousel.Item>
         
          <img
            className="d-block w-100"
            src={Barbijo}
            alt="Third slide"
            style={{
              maxHeight: "80vh",
            }}
            
          />
           <div class="carousel-caption d-none d-md-block ">
            {" "}
            <h1 className="text-light animate__animated animate__bounce titulitos">Rapido, simple, y seguro</h1>{" "}
            
          </div>
        </Carousel.Item>
        <Carousel.Item>
          
          <img
            className="d-block w-100"
            src={Mercadopa}
            alt="Third slide"
            style={{
              maxHeight: "80vh",
            }}
          />
          <div class="carousel-caption d-none d-md-block ">
            {" "}
            <h1 className="text-light animate__animated animate__bounce titulitos">Con sólo un click sin moverte de tu casa</h1>{" "}
            
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carrousel;
