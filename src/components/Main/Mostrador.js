import React, { useState, useEffect } from "react";

import {
  Row,
  Col,
  Card,
  CardDeck,
  Button,
  Container,
  CardColumns,
  Dropdown,
  Accordion,
} from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import axiosInstance from "../util/axiosInstance";

import { CardText } from "react-bootstrap/Card";
import swal from "sweetalert";

// const Mostrador = ({ setProducts, products }) => {
//   //Traer productos de base de datos

//   const getProductos = async () => {
//     const response = await axiosInstance.get("/producto");

//     setProductos(response.data.productos);
//   };
//   useEffect(() => {
//     getProductos();
//   }, []);

//   // Estados
//   const [productos, setProductos] = useState([]);

//   const [categorias, setCategorias] = useState([]);

//   // Funcion mostrar Imagen derecha
//   const mostrarImg = ({ nombre, id, precio, descripcion, imagen }) => {
//     swal({
//       title: nombre,
//       imageUrl: imagen[0],
//       titleText: descripcion,
//       text: ` $ ${precio}`,
//       imageHeight: 300,
//       imageAlt: "A tall image",
//     });
//   };

//   // const filtrarCategorias = ({productos,categoria}) => {
//   //   console.log(productos)
//   //     const newCategorias = productos.filter(element => element.tipo != categoria )
//   //     console.log(newCategorias)

//   //  }
//   //  const handleCategoria = (e) => {
//   //   const categoria = e
//   //   console.log(productos)
//   //   filtrarCategorias(productos,categoria)
//   // }

//   //agregar al carrito
//   const botonAlerta = (product) => {
//     console.log(product);

//     setProducts([...products, product]);

//     swal({
//       icon: "success",
//       title: "Producto agregado correctamente",
//       timer: 2000,
//     });
//   };

//   return (
//     <>
//       <p className="titulo_product_main">Productos</p>
//       <Container fluid className="contenedor-mostrador">
//         <Row style={{ background: "white", margin: "0px" }}>
//           <Col sm={2} style={{ backgroundColor: "white" }}>
//             <h3 style={{ color: "black" }}>Filtrar por: </h3>
//             <br />
//             <Dropdown>
//               <Dropdown.Toggle
//                 id="dropdown-basic"
//                 style={{ backgroundColor: "#212121" }}
//               >
//                 Categoria
//               </Dropdown.Toggle>

//               <Dropdown.Menu>

//                 <Dropdown.Item eventKey="Monitores">Bebidas</Dropdown.Item>
//                 <Dropdown.Item eventKey="Mouse">Limpieza</Dropdown.Item>
//                 <Dropdown.Item eventKey="Sillas">Comestible</Dropdown.Item>

//               </Dropdown.Menu>
//             </Dropdown>

//             <br />
//             <br />
//             {/* <Dropdown>
//               <Dropdown.Toggle
//                 id="dropdown-basic"
//                 style={{ backgroundColor: "#212121", outlineColor: "black" }}
//               >
//                 Precio
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">Menor a mayor</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Mayor a menor</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown> */}
//           </Col>
//           <Col
//             sm={8}
//             className="columnitax"
//             style={{ backgroundColor: "white" }}
//           >
//             <CardColumns className="cardColumns">
//               {productos.map((producto) => (
//                 <Card key={producto.id} sm={12} className="cardProduct">
//                   <Card.Img
//                     variant="top"
//                     src={'data:image/jpeg;base64,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'}
//                     rounded
//                     style={{ height: "250px" }}
//                   />
//                   <Card.Body>
//                     <Card.Title><h5>gaseosa coca cola</h5></Card.Title>
//                     <Card.Text> <p>$150</p></Card.Text>
//                   </Card.Body>
//                   <Card.Footer>
//                     <Row className="rowroto">
//                       <Col className="p-0">
//                         <Button
//                           border="danger"
//                           className="btnroto"
//                           style={{
//                             border: "3px solid #060606",
//                             color: "#19ED18",
//                             backgroundColor: "#060606",
//                             fontSize: "0.9rem",
//                           }}
//                           onClick={() => mostrarImg(producto)}
//                         >
//                           Ver mas
//                         </Button>
//                       </Col>
//                       <Col className="p-0">
//                         <Button
//                           variant="success"
//                           className="btnroto"
//                           style={{
//                             border: "2px solid #19ED18",
//                             fontSize: "0.9rem",
//                             backgroundColor: "#19ED18",
//                             color: "black",
//                           }}
//                           onClick={() => botonAlerta(producto)}
//                         >
//                           <FaCartPlus /> Agregar
//                         </Button>
//                       </Col>
//                     </Row>
//                   </Card.Footer>
//                 </Card>
//               ))}
//             </CardColumns>
//           </Col>
//           <Col sm={2} style={{ backgroundColor: "white" }}></Col>
//         </Row>
//       </Container>
//     </>
//   );
// };
const Mostrador = () => {
  return (
    <>
    {/* <Container>
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
        <h1>productos</h1>
      <CardDeck>
  <Card class="imgProduc">
    <Card.Img variant="top" src="https://http2.mlstatic.com/coca-cola-225-lt-mayorista-D_NQ_NP_865216-MLA42892084799_072020-O.webp"class="imgProduc" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://http2.mlstatic.com/coca-cola-225-lt-mayorista-D_NQ_NP_865216-MLA42892084799_072020-O.webp"class="imgProduc" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://http2.mlstatic.com/coca-cola-225-lt-mayorista-D_NQ_NP_865216-MLA42892084799_072020-O.webp"class="imgProduc" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
        </Col>
        <Col sm={2}></Col>
      </Row>
    </Container> */}
     

     <p className="titulo_product_main">Productos</p>
    
     <Container fluid className="contenedor-mostrador">
       <Row style={{ background: "white", margin: "0px" }}>
        <Col sm={2} style={{ backgroundColor: "white" }}>
          <h3 style={{ color: "black" }}>Filtrar por: </h3>
          <br />
           <Dropdown>
             <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#212121" }}
              >
                Categoria
              </Dropdown.Toggle>

              <Dropdown.Menu>

                <Dropdown.Item eventKey="Monitores">Bebidas</Dropdown.Item>
                <Dropdown.Item eventKey="Mouse">Limpieza</Dropdown.Item>
                <Dropdown.Item eventKey="Sillas">Comestible</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            <br />
            <br />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#212121", outlineColor: "black" }}
              >
                Precio
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Menor a mayor</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Mayor a menor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col
            sm={8}
            className="columnitax"
            style={{ backgroundColor: "white" }}
          >
            <CardColumns className="cardColumns">
             
                <Card  sm={12} className="cardProduct">
                  <Card.Img
                    variant="top"
                    src={'data:image/jpeg;base64,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'}
                    rounded
                    style={{ height: "250px" }}
                  />
                  <Card.Body>
                    <Card.Title><h5>gaseosa coca cola</h5></Card.Title>
                    <Card.Text> <p>$150</p></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Row className="rowroto">
                      <Col className="p-0">
                        <Button
                          border="primary"
                          className="btnroto"
                          style={{
                            border: "2px solid blue",
                            color: "#19ED18",
                            fontSize: "0.9rem",
                          }}
                         
                        >
                          Ver mas
                        </Button>
                      </Col>
                      <Col className="p-0">
                        <Button
                          variant="danger"
                          className="btnroto"
                          style={{
                            border: "2px solid red",
                            fontSize: "0.9rem",
                            color: "black",
                          }}
                         
                        >
                          <FaCartPlus /> Agregar
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              
            </CardColumns>
          </Col>
          <Col sm={2} style={{ backgroundColor: "white" }}></Col>
        </Row>
      </Container>

      <Container fluid className="contenedor-mostrador">
       <Row style={{ background: "white", margin: "0px" }}>
        <Col sm={2} style={{ backgroundColor: "white" }}>
          <h3 style={{ color: "black" }}>Filtrar por: </h3>
          <br />
           <Dropdown>
             <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#212121" }}
              >
                Categoria
              </Dropdown.Toggle>

              <Dropdown.Menu>

                <Dropdown.Item eventKey="Monitores">Bebidas</Dropdown.Item>
                <Dropdown.Item eventKey="Mouse">Limpieza</Dropdown.Item>
                <Dropdown.Item eventKey="Sillas">Comestible</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            <br />
            <br />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#212121", outlineColor: "black" }}
              >
                Precio
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Menor a mayor</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Mayor a menor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col
            sm={8}
            className="columnitax"
            style={{ backgroundColor: "white" }}
          >
            <CardColumns className="cardColumns">
             
                <Card  sm={12} className="cardProduct">
                  <Card.Img
                    variant="top"
                    src={'data:image/jpeg;base64,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'}
                    rounded
                    style={{ height: "250px" }}
                  />
                  <Card.Body>
                    <Card.Title><h5>gaseosa coca cola</h5></Card.Title>
                    <Card.Text> <p>$150</p></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Row className="rowroto">
                      <Col className="p-0">
                        <Button
                        variant="success"
                          className="btnroto"
                          style={{
                            border: "2px solid green",
                            color: "black",
                            fontSize: "0.9rem",
                          }}
                         
                        >
                          Ver mas
                        </Button>
                      </Col>
                      <Col className="p-0">
                        <Button
                          variant="danger"
                          className="btnroto"
                          style={{
                            border: "2px solid red",
                            fontSize: "0.9rem",
                            color: "black",
                          }}
                         
                        >
                          <FaCartPlus /> Agregar
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              
            </CardColumns>
          </Col>
          <Col sm={2} style={{ backgroundColor: "white" }}></Col>
        </Row>
      </Container>
   
    
      
    




    </>
  );
};

export default Mostrador;
