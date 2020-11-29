import React from 'react'
import './answer-question-admin.scss'
import imagen from './../../../assets/images/tams.png'
import { Link } from 'react-router-dom';


export const AnswerQuestionAdminScreen3 = () => {
    return (
        <div>
            <div className=" titulo-pregunta container-fluid mt-2">
                <div className="row  justify-content-center">
                    <h1>¿Cúal es la capital de Tamaulipas?</h1>
                </div>
            </div>
            <h3>3 de 3</h3>

            <div className="tiempo">
                <h1>15</h1>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="mt-2">
                        <img className="container-imagen" src={imagen}></img>
                    </div>
                </div>
            </div> 

            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-6">
                        <button className="respuesta1 mt-2"> El Mante </button>
                        <button className="respuesta2 mt-2"> Tamaulipas </button>
                    </div>

                    <div className="col-6">
                        <button className="respuesta3 mt-2"> Victoria </button>
                        <button className="respuesta4 mt-2"> Tampico </button>
                    </div>
                </div>
            </div>

            <div className="numero-respuestas">
                <h2>1</h2>
                <p>Respuesta</p>
            </div>

            <Link to="/resultadosAdmin3" className="siguiente-pregunta">Saltar </Link>


        </div>


        
    )
}
