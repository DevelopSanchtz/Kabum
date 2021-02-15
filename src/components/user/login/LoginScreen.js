import React, { useEffect } from 'react'
import './login-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    const id = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
    useEffect(() => {
        if (sessionStorage.getItem('will-reload') && sessionStorage.getItem('will-reload') === 'true') {
            sessionStorage.setItem('will-reload', false);
            window.location.reload();
        }
    }, []);
    return (
        < div className="body-login" >
            <img className="logo-burrito" src={logo} alt=""></img>
            <Link to={{
                pathname: "/pin",
                props: {
                    id: id
                }
            }} className="button-play"> Jugar Ahora </Link>
            <Link to={{
                pathname: "/loginadmin",
                props: {
                    id: id
                }
            }} className="button-admin"> Administrar</Link>
            <div className="fondo"></div>
            <div className="sol"></div>
            <div className="nubes1"></div>
            <div className="nubes2"></div>
            <div className="montañas"></div>
            <div className="pasto"></div>
            <div className="pasto-verde"></div>
        </div >
    )
}


