import React from 'react'
import './login-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    const id = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
    return (

        <div className="body-login">
            <img className="logo-burrito" src={logo} alt=""></img>
            <Link to={{
                pathname: "/pin",
                props: {
                    id: id
                }
            }} className="button-play"> Jugar Ahora </Link>

            <div className="fondo"></div>
            <div className="sol"></div>
            <div className="nubes1"></div>
            <div className="nubes2"></div>
            <div className="montañas"></div>
            <div className="pasto"></div>
            <div className="pasto-verde"></div>
        </div>


    )
}


