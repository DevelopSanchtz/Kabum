import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import logo from './../../../assets/images/burro.png'
import logo2 from './../../../assets/images/gato.png'
import logo3 from './../../../assets/images/vaca.png'
import logo4 from './../../../assets/images/lobo.png'
import './show-screen.scss'
import socket from '../../socket';

export const Responder = (props) => {
    const history = useHistory();
    const kabum = JSON.parse(sessionStorage.getItem('player-kabum'));
    const pin = sessionStorage.getItem('player-pin');
    const tag = sessionStorage.getItem('player-name');
    const id = sessionStorage.getItem('player-id');
    let pregunta;
    if (props.location.state) {
        pregunta = props.location.state.pregunta;
        sessionStorage.setItem('player-question', pregunta);
    } else {
        pregunta = sessionStorage.getItem('player-question');
        pregunta = parseInt(pregunta);
    }
    let contador = 0;
    let answer;
    let time = setInterval(() => {
        contador++;
        if ((contador / 100) == kabum.preguntas[pregunta].tiempo) {
            clearInterval(time);
        }
    }, 10);

    const preguntaElegida = (respuesta) => {
        clearInterval(time);
        answer = respuesta;
        const tiempo = kabum.preguntas[pregunta].tiempo
        const correcta = kabum.preguntas[pregunta].correcta
        let puntos = 0;
        if (answer == kabum.preguntas[pregunta].correcta) {
            puntos = 1000 - (contador * 10) / (parseInt(tiempo));
        }
        const data = {
            id: id,
            puntos: puntos,
            respuesta: respuesta,
            correcta: correcta
        };
        socket.emit('enviar-pregunta', data);
    }
    useEffect(() => {
        socket.on('pregunta', (jugadores) => {
            let player = {};
            jugadores.forEach(jugador => {
                if (jugador.id == id) {
                    player = jugador;
                    return;
                }
            });
            let state = {
                jugador: player
            }
            if (answer == kabum.preguntas[pregunta].correcta) {
                history.push('/correcto', state);
            } else {
                history.push('/incorrecto', state);
            }
        });
    }, [answer]);
    return (
        <div className="container-responder">
            <div className="barra">
                <div className="d-flex">
                    <div className="p-3">
                        <p>Pin: {pin}</p>
                    </div>
                    <div className="p-3">
                        <p>{pregunta + 1}/{kabum.preguntas.length}</p>
                    </div>
                    <div className="p-3 ml-auto">
                        <p>{tag}</p>
                    </div>
                </div>
            </div>|
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <Link className="btn-respuestas" onClick={() => preguntaElegida('a')}>
                            <div className="item" id="item1">
                                <img className="animal" src={logo} alt=""></img>
                            </div>
                        </Link>
                        <Link className="btn-respuestas" onClick={() => preguntaElegida('c')}>
                            <div className="item" id="item3">
                                <img className="animal" src={logo3} alt=""></img>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link className="btn-respuestas" onClick={() => preguntaElegida('b')}>
                            <div className="item" id="item2">
                                <img className="animal" src={logo2} alt=""></img>
                            </div>
                        </Link>
                        <Link className="btn-respuestas" onClick={() => preguntaElegida('d')}>
                            <div className="item" id="item4">
                                <img className="animal" src={logo4} alt=""></img>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
