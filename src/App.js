import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap';
import cozcyt from './LCOZCyT.png';
import axios from 'axios';
import Menu from './components/menu';

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Axios from 'axios';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <img src={cozcyt}  className='lcoz' width="192" height="33.5"></img>
          <Link className="navbar-brand" to={"/sign-in"}>Plataforma de incidencias</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"} >Iniciar sesion</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Registrar</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
      </div>
      
    
      <div className="auth-wrapper">      
        <div className="auth-inner">        
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/menu" component={Menu} />
          </Switch>
        </div>
      </div>
      

    </div></Router>
  

  );
}

export default App;
