import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import socket from '../../socket';
import './answer-question-admin.scss'
import imagen from './../../../assets/images/mexico-imagen.jpg'

export const AnswerQuestionAdminScreen = (props) => {
    const history = useHistory();
    let pregunta, kabum;
    const [contestados, setContestados] = useState(0);
    const [tiempo, setTiempo] = useState(0);
    const [timer, setTimer] = useState(null)
    kabum = sessionStorage.getItem('kabum');
    kabum = JSON.parse(kabum);
    pregunta = sessionStorage.getItem('question');
    pregunta = parseInt(pregunta);

    //funcion que pasa a la siguiente pregunta y guarda la estadistica
    const skipQuestion = () => {
        socket.emit('termino-tiempo', null);
    }
    console.log('rerender');
    //funcion que verfica la sesion, esta a la escucha de la cantidad de 
    //personas que ya respondieron la pregunta e inicializa el timer 
    useEffect(() => {
        socket.on('estadisticas-pregunta', (estadisticas) => {
            console.log('Se reciben las estadisticas');
            sessionStorage.setItem('estadisticas', JSON.stringify(estadisticas));
            history.push('/resultadosAdmin');
        })
        if (!localStorage.getItem('sesion-admin')) {
            props.history.push('/loginAdmin');
        }
        socket.on('personas-respondido', () => {
            setContestados(contestados + 1);
        });
        setTimer(startTimer());
    }, [])

    //funcion timer que obtiene de la pregunta el tiempo que le fue asignado
    //aumenta el contador tiempo y revisa si ya cumplio con el limite
    //caso verdadero se detiene, caso contrario sigue aumentando
    const startTimer = () => {
        return setTimeout(() => {
            if (tiempo === Number(kabum.preguntas[pregunta].tiempo)) {
                stopTimer();
            } else {
                setTiempo(tiempo + 1);
            }
        }, 1000)
    }
    //funcion para detener el timer, manda como respuesta en socket que ya finalizo
    const stopTimer = () => {
        socket.emit('termino-tiempo', null);
        clearTimeout(timer);
    }
    return (
        <div>
            <div className=" titulo-pregunta container-fluid mt-2">
                <div className="row  justify-content-center">
                    <h1>{kabum.preguntas[pregunta].pregunta}</h1>
                </div>
            </div>
            <h3>{pregunta + 1} de {kabum.preguntas.length}</h3>
            <div className="tiempo">
                <h1>{parseInt(kabum.preguntas[pregunta].tiempo) - tiempo}</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="mt-2">
                        <img className="container-imagen" alt="" src={kabum.preguntas[pregunta].recurso === "" ? imagen : kabum.preguntas[pregunta].recurso}></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-6">
                        <div className="respuesta1 mt-2">{kabum.preguntas[pregunta].a}</div>
                        <div className="respuesta2 mt-2">{kabum.preguntas[pregunta].b}</div>
                    </div>
                    <div className="col-6">
                        <div className="respuesta3 mt-2">{kabum.preguntas[pregunta].c}</div>
                        <div className="respuesta4 mt-2">{kabum.preguntas[pregunta].d}</div>
                    </div>
                </div>
            </div>
            <div className="numero-respuestas">
                <h2>{contestados}</h2>
                <p>Respuestas</p>
            </div>
            <button onClick={skipQuestion} className="siguiente-pregunta">Saltar</button>
        </div>
    )
}
