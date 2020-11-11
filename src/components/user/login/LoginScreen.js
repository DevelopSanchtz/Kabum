import React from 'react'
import './login-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'


export const LoginScreen = () => {
    return (

        <div className="body-login">
            <img className="logo-burrito" src={logo} alt=""></img>
                <button className="button-play">Jugar Ahora</button>
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

 
