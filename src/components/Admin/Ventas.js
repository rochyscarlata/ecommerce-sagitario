import React from 'react';
import {Table} from 'react-bootstrap'


const Ventas = () => {
    return ( <> 

        <br/>
    <h1 className="text-center text-white">Ventas realizadas</h1>
    <br/>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Nombre producto</th>
      <th>Total V</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>mouse gammer</td>
      <td>$2.000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Monitor Lg</td>
      <td>5.823,69</td>
    </tr>
    <tr>
      <td>3</td>
      <td >Larry the Bird</td>
      <td>Auriculares logitech</td>
      <td>1.760</td>
    </tr>
  </tbody>
</Table>
    
    
    </> );
}
 
export default Ventas;