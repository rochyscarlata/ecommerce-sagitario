import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import "./style.css";



const Grafico = () => {

    const [chartData, setChartData] = useState({})
    
    const chart = ()=>{
        setChartData({
            labels:['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], 
            datasets:[{
                label:'Numero de visitas en la página',
                data:[30, 42, 27, 50, 40],
                backgroundColor: ['#354C75'],
                opacity:['1'],
                borderWidht: 4,
                color:['#fff']
            }]
        })
    }

    useEffect(() =>{
        chart()
    }, [])

    return (
        <div className="container">
         <h1 style={{color:'#fff', textAlign:'center'}}>Estadisticas</h1> 
         <Card className="cardChart">
             <Card.Header>Hola</Card.Header>
             <Card.Body>
             <Line data={chartData}/>
             </Card.Body>
         </Card>
             
        
         </div>
         );
}
 
export default Grafico;