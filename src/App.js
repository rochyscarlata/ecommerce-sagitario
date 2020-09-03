import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import PageService from "./components/PageService/PageService";
import Payment from "./components/Payment/Payment";
import ShoppingCheckout from "./components/ShoppingCart/shopping-checkout"
import Register from "./components/Register/Register";
import Error404 from "./components/Error404/Error404";
import Turn from "./components/Turn/Turn";
import Admin from "./components/Admin/Admin";
import MainTest from "./components/Test/Main-Test";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from './components/util/axiosInstance'
import AgregProd from "./components/Admin/AgregProd";
import TurnosPanel from "./components/Admin/TurnosPanel";
import Graficos from "./components/Admin/Graficos";
import Drag from "./components/Admin/Drag"
import Usuarios from "./components/Admin/Usuarios"
import PagoExitoso from "./components/PaginaDePago/PagoExitoso"
import PagoRechazado from "./components/PaginaDePago/PagoRechazado"
import PagoPendiente from "./components/PaginaDePago/PagoPendiente"

import "./App.css";



function App() {
  const token = localStorage.getItem("Token");
  const [authen, setAuthen] = useState(token);
  const [usuario ,setUsuario] = useState({})
  const [userId , setUserId ] = useState();
  const [products, setProducts] = useState([]);
  //Prueba Carrito
  const [carrito, setCarrito] = useState([])

const cargarUserId = (usuario) => {
  setUserId(usuario._id)
  
}

const autenticar = async () => {
  try {
    const response = await axiosInstance.get("/private",{ headers: {"Authorization" : `Bearer ${authen}`} })
    setUsuario(response.data.user)
    cargarUserId(response.data.user)
    
  } catch (error) {
    console.log(error)
  }
 
}

  useEffect(() => {
    autenticar()
  }, [authen])
  
  return (
    <Router>
      <Switch>

        <Route exact path="/main-test">
          <MainTest />
        </Route>

        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/main">
          <Main authen={authen} setAuthen={setAuthen} usuario={usuario} setCarrito={setCarrito} userId={userId} products={products} setProducts={setProducts}/>
        </Route>
        <Route exact path="/shopping-checkout" render={(props) => <ShoppingCheckout {...props} carrito={carrito} />} />

        <Route exact path="/service" >
          <PageService authen={authen} setAuthen={setAuthen} usuario={usuario} />
        </Route>
        <Route exact path="/payment">
          <Payment authen={authen} setAuthen={setAuthen} />
        </Route>
        <Route exact path="/turn">
          <Turn authen={authen} setAuthen={setAuthen} usuario={usuario} userId={userId}/>
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/AdminAgregar">
          <AgregProd/>
        </Route>
        <Route exact path="/grafico">
          <Graficos/>
        </Route>
        <Route exact path="/drag">
          <Drag/>
        </Route>
        <Route exact path="/TurnosPanel">
          <TurnosPanel/>
        </Route>
        <Route exact path="/usuarios">
          <Usuarios/>
        </Route>
        <Route exact path="/pagoExitoso">
          <PagoExitoso/>
        </Route>
        <Route exact path="/pagoRechazado">
          <PagoRechazado/>
        </Route>
        <Route exact path="/pagoPendiente">
          <PagoPendiente/>
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
