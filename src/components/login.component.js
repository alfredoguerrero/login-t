import Axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import menu from './menu';

const baseUrl="AQUI VA EL URL DE LA BD";

export default class Login extends Component {
    state={
        email: '',
        password: ''
    }


    handleChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    iniciarSesion=async()=>{
        await Axios.get(baseUrl, {params: {email: this.state.form.email, password: this.state.form.password}})
        .then (Response=>{
            window.location.href='./menu';
        })
        .catch(error=>{
            console.log(error)
        })
    
    }





    render() {
        return (
            <form>
                <h3>Iniciar sesion</h3>

                <div className="form-group">
                    <label>Correo electronico</label>
                    <input name="email" type="email" className="form-control" placeholder="Ingresa el correo" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input  name="password" type="password" className="form-control" placeholder="Ingresa contraseña" />
                </div> <br></br>


                <div>
                <button  className="btn btn-primary btn-block" onClick={()=> this.iniciarSesion()}>Ingresar</button>
                
                </div>
                
            </form>
        );
    }
}
