import React , {useState, useEffect} from 'react';
import {Table, Container,Tooltip  , OverlayTrigger } from "react-bootstrap"
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import MydModalWithGrid from './modalInfoTurno';
import axiosInstance from '../util/axiosInstance';



const ListTurn = (userId) => {
const [turnos , setTurnos] = useState([])



const fetchTurnos = async() => {
//_id usuario
if(userId.userId.userId!=undefined){
  const _id=userId.userId.userId
  const response = await axiosInstance.get(`/turno/${_id}`);
  console.log(response)
  const {message,turnos } = response.data;
  if (message) {
    const msg=message
  setTurnos({msg})
  }else if (turnos) {
    setTurnos(turnos)
  }
}
}
useEffect(() => {
  fetchTurnos()
  return () => {
    //
  }
}, [])

const borrarTurno=  async(_id)=>{
 const response= await axiosInstance.delete(`/turno/${_id}`);
 console.log(response.data);
 fetchTurnos();
}

  const [modalShow, setModalShow] = useState(false);

    return ( 
        <Container >
          {console.log(turnos)}
          {turnos.msg ? <p>{turnos.msg}</p> : (
          <>
          <Table striped bordered hover variant="dark" style={{backgroundColor:"#212121"}} >
            <thead style={{color:"#19ed18"}}>
              <tr >
                <th >Fecha</th>
                <th>Hora</th>
                <th>Motivo</th>
                <th>Descripcion y mas ...</th>
                <th >Cancelar Turno<OverlayTrigger 
             
                 placement="top"
                 overlay={
                   <Tooltip id={`tooltip-top`}>
                    <strong>Los turnos solo se pueden cancelar 24hs antes</strong>.
                   </Tooltip>
                 }
                ><InfoTwoToneIcon  style={{marginLeft:"0.7rem" , fontSize:"1.2rem", opacity:"0.8"}} /></OverlayTrigger></th>
              </tr>
            </thead>
            <tbody style={{color:"#30cd68"}}>
              {turnos.map(turno=> (
              <>
              <tr key={turno._id}>
              <td>{turno.fecha}</td>
                <td>{turno.hora}</td>
                <td>Reparacion</td>
                <td><button className="btnForm" onClick={() => setModalShow(true)}><span style={{color:"#19ed18", fontSize:"14px", padding:"0px"}}>Ver mas...</span></button></td>
                <td><button className="btnFormCancel " onClick={()=>borrarTurno(turno._id)}><span style={{color:"#121212", fontSize:"14px", fontWeight:"800", padding:"0px"}}><b>Cancelar </b></span></button></td>
              </tr>
              <MydModalWithGrid show={modalShow}   onHide={() => setModalShow(false)} nombre="sergio"/>
              </>))}
              </tbody>
              </Table>
              
            </>
        
          )}
        
    </Container>
     );
}
 
export default ListTurn;