import React from 'react'
import './name-kabums-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import { Link } from 'react-router-dom';


export const QuestionScreen = () => {
    return (
        <div>
            <div className="fondo-start">
                <div className="fondo-start-color">
                    <div className="container mt-5">
                        <div className="row justify-content-center logo-mov">
                            <img src={logo} className="logo-kabum-movimiento" alt=""></img>
                        </div>
                    </div>

                    <div className="container-pregunta container-fluid color-pin">
                        <div className="row justify-content-center ">
                            <h1 className="animate__shakeX text-center nombre-pregunta">¿Cuantos estados tiene México? </h1>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
