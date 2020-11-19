import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Registrarse</h3>

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Ingresar nombre" />
                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control" placeholder="Ingresar apellidos" />
                </div>

                <div className="form-group">
                    <label>Correo electronico</label>
                    <input type="email" className="form-control" placeholder="Ingresar correo" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Ingresar contraseña" />
                </div><br></br>

                <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
            </form>
        );
    }
}