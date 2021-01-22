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
    const skipQuestion = () => {
        socket.connect();
        socket.emit('termino-tiempo', null);
    }
    socket.on('estadisticas-pregunta', (estadisticas) => {
        history.push('/resultadosAdmin', { estadisticas: estadisticas });
    })
    useEffect(() => {
        if (!localStorage.getItem('sesion-admin')) {
            this.props.history.replace('/loginAdmin');
        }
        socket.on('personas-respondido', () => {
            setContestados(contestados + 1);
        });
        setTimer(startTimer());
    }, [contestados, tiempo])
    
    const startTimer = () => {
        return setTimeout(() => {
            if(tiempo === Number(kabum.preguntas[pregunta].tiempo)) {
                stopTimer();
            } else {  
                setTiempo(tiempo + 1);
            }
        }, 1000)
    }
    const stopTimer = () => {
        console.log('Se envio evento de termino-tiempo')
        socket.connect();
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
                        <img className="container-imagen" src={kabum.preguntas[pregunta].recurso === "" ? kabum.preguntas[pregunta].recurso : imagen}></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-6">
                        <button className="respuesta1 mt-2">{kabum.preguntas[pregunta].a}</button>
                        <button className="respuesta2 mt-2">{kabum.preguntas[pregunta].b}</button>
                    </div>
                    <div className="col-6">
                        <button className="respuesta3 mt-2">{kabum.preguntas[pregunta].c}</button>
                        <button className="respuesta4 mt-2">{kabum.preguntas[pregunta].d}</button>
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
