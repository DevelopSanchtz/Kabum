import React from 'react'
import './loginadmin-screen.scss'
import { Link } from 'react-router-dom';


export const LoginAdminScreen = ({history}) => {

    const handleLogin= () =>{
        history.replace('/');
    }

    return (
        <div>
            <div className="fondo-login">
                <div className="fondo-img">
                    <div className="container container-login-admin">
                        <div className="row justify-content-center mt-5">
                            <h1 className="mt-4 font-weight-bold">Inicia sesión en Kabum</h1>
                        </div>

                        <div className="row">
                            <div className="col-4"></div>

                            <div className="col-4">
                                <form>
                                    <div className="form-group">
                                        <label>Contraseña:</label>
                                        <input type="email" className="form-control" placeholder="Ingrese la contraseña"></input>
                                    </div>
                                    <button onClick={ handleLogin }  type="submit" className="btn btn-login-admin btn-border btn-block">Iniciar sesión</button>
                                </form>

                            </div>

                            <div className="col-4"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
