import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './name-kabums-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import socket from '../../socket';

export const QuestionScreen = (props) => {
    const history = useHistory();
    let kabum;
    //toma lo que hay en el localstorage y lo almacena en una variable
    kabum = sessionStorage.getItem('kabum');
    kabum = JSON.parse(kabum);
    let pregunta;
    //toma lo que hay en el localstorage y lo almacena en una variable
    pregunta = sessionStorage.getItem('question');
    pregunta = parseInt(pregunta);
    //inicia los juegos mandando el kabum a los sockets
    //genera un item que almacena las preguntas
    const startKabum = () => {
        if (pregunta === 0) {
            socket.emit('empezar-juego', kabum);
            sessionStorage.setItem('question', pregunta)
            history.push('/answerAdmin');
        } else {
            //genera una llamada a los socket para cargar la sig pregunta
            //genera un item que almacena las preguntas
            socket.emit('sig-pregunta', null);
            sessionStorage.setItem('question', pregunta)
            history.push('/answerAdmin');
        }
    }
    //revisa si hay una sesion activa para el admin que genera los kabums
    useEffect(() => {
        if (!localStorage.getItem('sesion-admin')) {
            history.push('/loginAdmin');
        }
    }, [history])
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