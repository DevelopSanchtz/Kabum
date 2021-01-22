import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './name-kabums-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import { Link } from 'react-router-dom';
import socket from '../../socket';

export const QuestionScreen = (props) => {
    const history = useHistory();
    let kabum;
    kabum = sessionStorage.getItem('kabum');
    kabum = JSON.parse(kabum);
    let pregunta;
    if (props.location.state) {
        pregunta = props.location.state.pregunta;
        sessionStorage.setItem('question', pregunta)
    } else {
        pregunta = sessionStorage.getItem('question');
        pregunta = parseInt(pregunta);
    }
    const startKabum = () => {
        if (pregunta == 0) {
            socket.emit('empezar-juego', kabum);
            history.replace('/answerAdmin', { pregunta: pregunta });
        } else {
            socket.emit('sig-pregunta', null);
            history.replace('/answerAdmin', { pregunta: pregunta });
        }
    }
    console.log(pregunta, kabum.preguntas[pregunta]);
    useEffect(() => {
        if (!localStorage.getItem('sesion-admin')) {
            history.replace('/loginAdmin');
        }
    })
    return (
        <div>
            <div className="fondo-start">
                <div className="fondo-start-color">
                    <div className="container-contador-preguntas">
                        <h1 className="contador-preguntas">{pregunta + 1} de {kabum.preguntas.length}</h1>
                    </div>
                    <div className="container mt-5">
                        <div className="row justify-content-center logo-mov">
                            <img src={logo} className="logo-kabum-movimiento" alt=""></img>
                        </div>
                    </div>
                    <div className="container-pregunta container-fluid color-pin">
                        <div className="row justify-content-center ">
                            <h1 className="animate__shakeX text-center nombre-pregunta">{kabum.preguntas[pregunta].pregunta}</h1>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-value"></div>
                    </div>
                    <button onClick={() => startKabum()} className="btn-iniciar-juego">Siguiente </button>
                </div>
            </div>
        </div>
    )
}