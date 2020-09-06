import React , { useState} from 'react';
import {Modal,Button} from 'react-bootstrap';


 const Example = () =>{




    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="p-1" variant="danger" onClick={handleShow}>
        Ver datos de envío
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Envíos de 08:00 a 13:00 hs y 17:20.30 hs</Modal.Title>
          </Modal.Header>
          <Modal.Body>  <br>
          </br>
          <ul>
            <li>zona 1 : $80</li>
            <li> zona 2 : $100</li>
            <li>zona 3</li>
            <li>zona 4</li>
            <li> zona 5</li>
          </ul>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
 
  
 
}
 export default Example;