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
        socket.on('podio', (data) => {
            if (data.id === id) {
                switch(data.place) {
                    case '1':
                        history.push('/podioprimero');
                        break;
                    case '2':
                        history.push('/podiosegundo');
                        break;
                    case '3':
                        history.push('/podiotercero');
                        break;
                    case '0':
                        history.push('/consolacion');
                        break;
                    default:
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