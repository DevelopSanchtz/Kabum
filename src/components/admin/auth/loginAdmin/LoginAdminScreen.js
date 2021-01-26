import React, { useEffect, useState } from 'react'
import './loginadmin-screen.scss'
import Swal from 'sweetalert2'

export const LoginAdminScreen = ({ history }) => {

    const [pass, setPass] = useState('');
    useEffect(() => {
        if (localStorage.getItem('sesion-admin')) {
            history.push('/kabums');
        }
    }, [history]);
    const handleLogin = (event) => {
        event.preventDefault();
        if (pass === 'KabumTec2017') {
            localStorage.setItem('sesion-admin', true);
            history.push('/kabums');
        } else {
            Swal.fire({
                title: 'Error',
                icon: 'info',
                text: 'Contraseña incorrecta'
            });
        }
    }
    const handleChange = (e) => {
        setPass(e.target.value);
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
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label>Contraseña:</label>
                                        <input onChange={handleChange} value={pass} name="pass" type="password" className="form-control" placeholder="Ingrese la contraseña"></input>
                                    </div>
                                    <button type="button" className="btn btn-login-admin btn-border btn-block">Iniciar sesión</button>
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
