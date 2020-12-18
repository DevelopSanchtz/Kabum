import React from 'react'
import './name-kabums-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import { Link } from 'react-router-dom';


export const QuestionScreen3 = () => {


    return (

        <div>
            <div className="fondo-start">
                <div className="fondo-start-color">
                    <div className="container-contador-preguntas">
                        <h1 className="contador-preguntas">3 de 3</h1>
                    </div>

                    <div className="container mt-5">
                        <div className="row justify-content-center logo-mov">
                            <img src={logo} className="logo-kabum-movimiento" alt=""></img>
                        </div>
                    </div>

                    <div className="container-pregunta container-fluid color-pin">
                        <div className="row justify-content-center ">
                            <h1 className="animate__shakeX text-center nombre-pregunta">¿Cúal es la capital de Tamaulipas? </h1>
                        </div>
                    </div>

                    <div className="progress">
                        <div className="progress-value"></div>
                    </div>

                    <Link to="/answerAdmin3" className="btn-iniciar-juego">Siguiente </Link>


                </div>
            </div>
        </div>
    )
}
