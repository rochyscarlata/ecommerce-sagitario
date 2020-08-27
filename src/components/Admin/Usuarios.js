import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'
import axiosInstance from '../util/axiosInstance';

const Usuarios = () => {

  const [persona, setPersonas] = useState([])

  const traerUsuario = async() =>{
    const response = await axiosInstance.get("/personas")
    setPersonas(response.data.user)
    console.log(response.data.user)
  }
  useEffect(()=>{
    traerUsuario();
  }, [])



  return( <>
  <h3 className="text-center text-white">Usuarios Registrados</h3>
  <Table striped bordered hover responsive="sm" variant="dark" >
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Email</th>
      <th>Turno</th>
    
    </tr>
  </thead>
  <tbody>
    {persona.length === 0 ? null : persona.map((usuario, index)=>(
      <tr style={{color:"white"}} key={usuario._id}>
      <td>{index}</td>
      <td>{usuario.username}</td>
      <td>{usuario.email}</td>
      <td>{usuario.turn===undefined ? (<p>no tiene</p>) : usuario.turn}</td>
      </tr>
    ))}
  </tbody>
</Table>
</>
  )
}
export default Usuarios;