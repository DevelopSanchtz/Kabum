import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import logo from './../../../assets/images/burro.png'
import logo2 from './../../../assets/images/gato.png'
import logo3 from './../../../assets/images/vaca.png'
import logo4 from './../../../assets/images/lobo.png'
import './show-screen.scss'

const connectSocketServer = () => {
    const socket = io.connect('http://localhost:4000', {
      transports: ['websocket']
    });
    return socket;
}

export const Responder = () => {
    
    const [socket] = useState(connectSocketServer);

    let contador = 0;

    let pregunta2 = 'respuesta de pregunta';

    let tiempo = setInterval(() => {
        contador++;
    }, 1);

    const preguntaElegida = (id, pregunta, respuesta) => {
        socket.emit('enviar-pregunta', id, pregunta, respuesta);
    }
    
    const [pregunta, setPregunta] = useState({});
    
    useEffect(() => {
        socket.on('pregunta', pregunta => {
            console.log(pregunta);
            setPregunta(pregunta);
        });
    }, []);

    return (
        <div className="container-responder">
            <div className="barra">
                <div className="d-flex">
                    <div className="p-3">
                        <p>Pin:465465465</p>
                    </div>
                    <div className="p-3">
                        <p>2/12</p>

                    </div>
                    <div className="p-3 ml-auto">
                        <p>Gamertag</p>
                    </div>

                    <div className="p-3" id="color">
                        <p>14121</p>
                    </div>
                </div>
            </div>|


            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">

                        <Link to="/correcto" className="btn-respuestas" onClick={preguntaElegida(pregunta2, 'a'), clearInterval(tiempo)}>
                            <div className="item" id="item1">
                                <img className="animal" src={logo} alt=""></img>
                            </div>
                        </Link>            
                        
                        <Link to="/correcto" className="btn-respuestas" onClick={preguntaElegida(pregunta2, 'c'), clearInterval(tiempo)}>
                            <div className="item" id="item3">
                                <img className="animal" src={logo3} alt=""></img>
                            </div>
                        </Link>                 
                    </div>

                    <div className="col-6">


                        <Link to="/incorrecto" onClick={preguntaElegida(pregunta2, 'b'), clearInterval(tiempo)}>
                            <div className="item" id="item2">
                                <img className="animal" src={logo2} alt=""></img>
                            </div>
                        </Link>
                        <Link to="/incorrecto" className="btn-respuestas" onClick={preguntaElegida(pregunta2, 'd'), clearInterval(tiempo)}>
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
