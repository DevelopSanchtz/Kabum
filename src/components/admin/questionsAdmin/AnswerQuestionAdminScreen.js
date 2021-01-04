import React from 'react'
import './answer-question-admin.scss'
import imagen from './../../../assets/images/mexico-imagen.jpg'
import { Link } from 'react-router-dom';
import socket from '../../socket';

export const AnswerQuestionAdminScreen = () => {
    const skipQuestion = () => {
        socket.connect();
        socket.emit('saltar-pregunta',null);
        socket.disconnect();
    }
    return (
        <div>
            <div className=" titulo-pregunta container-fluid mt-2">
                <div className="row  justify-content-center">
                    <h1>¿Cuandos estados tiene México?</h1>
                </div>
            </div>
            <h3>1 de 3</h3>

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
                        <button className="respuesta1 mt-2"> 45 </button>
                        <button className="respuesta2 mt-2"> 32 </button>
                    </div>

                    <div className="col-6">
                        <button className="respuesta3 mt-2"> 29 </button>
                        <button className="respuesta4 mt-2"> 34 </button>
                    </div>
                </div>
            </div>

            <div className="numero-respuestas">
                <h2>1</h2>
                <p>Respuesta</p>
            </div>

            <Link onClick={skipQuestion} to="/resultadosAdmin" className="siguiente-pregunta">Saltar </Link>


        </div>


        
    )
}
