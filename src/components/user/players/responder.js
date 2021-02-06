import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from './../../../assets/images/burrito1.png'
import logo2 from './../../../assets/images/conejito1.png'
import logo3 from './../../../assets/images/gatito1.png'
import logo4 from './../../../assets/images/perrito1.png'
import './show-screen.scss'
import socket from '../../socket';

export const Responder = (props) => {
    const history = useHistory();
    const [contesto, setContesto] = useState(false);
    let kabum;
    kabum = JSON.parse(sessionStorage.getItem('player-kabum'));
    let pin;
    pin = sessionStorage.getItem('player-pin');
    let tag;
    tag = sessionStorage.getItem('player-name');
    let id;
    id = sessionStorage.getItem('player-id');
    let pregunta;
    pregunta = sessionStorage.getItem('player-question');
    pregunta = parseInt(pregunta);
    let contador = 0;
    let answer;
    let time = setInterval(() => {
        contador++;
        if ((contador / 100) === kabum.preguntas[pregunta].tiempo) {
            clearInterval(time);
        }
    }, 10);
    console.log('rerender');

    useEffect(() => {
        socket.on('pregunta', (jugadores) => {
            let player = {};
            jugadores.forEach(jugador => {
                if (jugador.id === id) {
                    player = jugador;
                    return;
                }
            });
            console.log(sessionStorage.getItem('answer'), kabum.preguntas[pregunta].correcta, pregunta);
            if (sessionStorage.getItem('answer') === kabum.preguntas[pregunta].correcta) {
                sessionStorage.setItem('player', JSON.stringify(player));
                history.push('/correcto');
            } else {
                sessionStorage.setItem('player', JSON.stringify(player));
                history.push('/incorrecto');
            }
        });
        socket.on('contestar-auto', () => {
            if (sessionStorage.getItem('contesto') === 'false') {
                setContesto(true);
                sessionStorage.setItem('contesto', true);
                let player = {};
                const correcta = kabum.preguntas[pregunta].correcta
                const data = {
                    id: id,
                    puntos: 0,
                    respuesta: '',
                    correcta: correcta
                };
                socket.emit('enviar-pregunta', data);
                sessionStorage.setItem('player', JSON.stringify(player));
                history.push('/incorreto');
            }
        });
    }, [answer, pregunta, kabum, id, history]);
    const preguntaElegida = (respuesta) => {
        clearInterval(time);
        setContesto(true);
        sessionStorage.setItem('contesto', true);
        answer = respuesta;
        sessionStorage.setItem('answer', respuesta);
        const tiempo = kabum.preguntas[pregunta].tiempo
        const correcta = kabum.preguntas[pregunta].correcta
        let puntos = 0;
        if (answer === kabum.preguntas[pregunta].correcta) {
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
    return (
        <div className="container-responder">
            {contesto ? <div className="pantalla-espera"><div className="loading">ESPERA</div></div> : <></>}
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
                        <Link className="btn-respuestas" onClick={() => preguntaElegida('b')}>
                            <div className="item" id="item2">
                                <img className="animal" src={logo2} alt=""></img>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link className="btn-respuestas" onClick={() => preguntaElegida('c')}>
                            <div className="item" id="item3">
                                <img className="animal" src={logo3} alt=""></img>
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
