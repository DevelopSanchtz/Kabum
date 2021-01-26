import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './show-screen.scss';
import logocorrecto from './../../../assets/images/correcto.png';
import socket from '../../socket';

export const Correcto = (props) => {
    const history = useHistory();
    const pin = sessionStorage.getItem('player-pin');
    const tag = sessionStorage.getItem('player-name');
    const id = sessionStorage.getItem('player-id');
    let pregunta = sessionStorage.getItem('player-question');
    pregunta = parseInt(pregunta);
    const kabum = JSON.parse(sessionStorage.getItem('player-kabum'));
    let jugador;
    jugador = sessionStorage.getItem('player');
    jugador = JSON.parse(jugador);
    useEffect(() => {
        socket.on('juego-terminado', () => {
            socket.emit('disconnect-reply', null);
            history.push('/login');
        });
        socket.on('pregunta-siguiente', () => {
            sessionStorage.setItem('player-question', pregunta + 1);
            sessionStorage.setItem('contesto', false);
            sessionStorage.setItem('answer', '');
            history.push('/responder');
        })
        socket.on('podio', (jugadores) => {
            let n = jugadores.length;
            for (let i = 0; i < n - 1; i++)
                for (let j = 0; j < n - i - 1; j++)
                    if (jugadores[j].puntos < jugadores[j + 1].puntos) {
                        let temp = jugadores[j];
                        jugadores[j] = jugadores[j + 1];
                        jugadores[j + 1] = temp;
                    }
            for (let i = 0; i < jugadores.length; i++) {
                if (jugadores[i].id === id) {
                    switch (i) {
                        case 1:
                            history.push('/podioprimero');
                            return;
                        case 2:
                            history.push('/podiosegundo');
                            return;
                        case 3:
                            history.push('/podiotercero');
                            return;
                        default:
                            history.push('/consolacion');
                            return;
                    }
                }
            }
        });
    }, []);
    return (
        <div className="container-correcto">
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
                    <div className="p-3" id="color">
                        <p>{jugador.puntos}</p>
                    </div>
                </div>
            </div>
            <div className="informacion">
                <p id="txt-correcto">Correcto</p>
                <img className="medidas-incorrecto" src={logocorrecto} alt=""></img>
                <p id="txt-suerte">Suerte en la siguiente</p>
            </div>
        </div>
    )
}