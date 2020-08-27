import React from 'react';
import BodyTurn from './BodyTurn';
import HeaderStatic from '../Layout/HeaderStatic';
import Fotter from '../Layout/Fotter';
import "./styles.css";
// eslint-disable-next-line
const Turn = ({authen,setAuthen,usuario,userId}) => {
    return ( 
        <>
        <HeaderStatic 
        usuario={usuario}
         authen={authen}
         setAuthen={setAuthen}/>
        <BodyTurn userId={userId}/> 
        <Fotter/>
       </>         
     );
}
 
export default Turn;