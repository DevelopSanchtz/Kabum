import React from 'react'
import './answer-question-admin.scss'
import { Link, useHistory } from 'react-router-dom';
import logo from './../../../assets/images/burrito1.png'
import logo2 from './../../../assets/images/gatito1.png'
import logo3 from './../../../assets/images/conejito1.png'
import logo4 from './../../../assets/images/perrito1.png'
import Swal from 'sweetalert2'
import socket from '../../socket'

export const ResultsScreen = (props) => {
    const history = useHistory();
    let pregunta = sessionStorage.getItem('question');
    pregunta = parseInt(pregunta);
    let kabum = sessionStorage.getItem('kabum');
    kabum = JSON.parse(kabum);
    let estadisticas;
    estadisticas = sessionStorage.getItem('estadisticas');
    estadisticas = JSON.parse(estadisticas);
    const avanzarScoreboard = () => {
        if (pregunta + 1 < kabum.preguntas.length) {
            sessionStorage.setItem('estadisticas', JSON.stringify(estadisticas));
            history.push('/scoreboard');
        } else {
            socket.emit('podio-jugadores', null);
            history.push('/podiumAdmin');
        }
    };
    const terminarJuego = () => {
        Swal.fire({
            title: "Terminar",
            icon: "warning",
            text: "¿Estás seguro que desea terminar el juego?",
            confirmButtonText: "Terminar",
            showCancelButton: true,
            cancelButtonText: "Seguir jugando"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Juego terminado",
                    icon: "success",
                }).then(() => {
                    //Redirecciona al administrador a la pantalla de kabums
                    history.push("/kabums");
                    socket.emit('terminar', null);
                });
            }
        });

    };
    const getCorrecta = (inciso) => {
        switch (inciso) {
            case 'a':
                return kabum.preguntas[pregunta].a;
            case 'b':
                return kabum.preguntas[pregunta].b;
            case 'c':
                return kabum.preguntas[pregunta].c;
            case 'd':
                return kabum.preguntas[pregunta].d;
            default:
                return '';
        }
    }
    return (
        <div>
            <div className=" titulo-pregunta container-fluid mt-2">
                <div className="row  justify-content-center">
                    {/* Muestra el titulo de la pregunta */}
                    <h1>{kabum.preguntas[pregunta].pregunta}</h1>
                </div>
            </div>
            {/* Muestra el número de la pregunta */}
            <h3>{pregunta + 1} de {kabum.preguntas.length}</h3>
            <div className="container-fluid mt-4">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <h1>La respuesta correcta es:</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        {/* Muestra la respuesta correcta de la pregunta en curso */}
                        <div className="respuesta2 mt-2">{getCorrecta(kabum.preguntas[pregunta].correcta)}</div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <h4>Total de respuestas</h4>
                </div>
            </div>
            <div className="container">
                <div className="row  ">
                    <div className="col-lg-3">
                        <div className="resultados-totales1">
                            <img className="animal-resultados" src={logo} alt=""></img>
                            {/* Muestra la estadistica de las respuestas a */}
                            <h4 className="text-center numero-respuestas-total">{estadisticas.a}</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="resultados-totales2">
                            <img className="animal-resultados" src={logo2} alt=""></img>
                            <h4 className="text-center numero-respuestas-total">{estadisticas.c}</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="resultados-totales3">
                            <img className="animal-resultados" src={logo3} alt=""></img>
                            <h4 className="text-center numero-respuestas-total">{estadisticas.b}</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="resultados-totales4">
                            <img className="animal-resultados" src={logo4} alt=""></img>
                            {/* Muestra la estadistica de las respuestas d */}
                            <h4 className="text-center numero-respuestas-total">{estadisticas.d}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Link onClick={() => avanzarScoreboard()} className="siguiente-pregunta">Siguiente </Link>
            <Link onClick={() => terminarJuego()} className="terminar-juego">Terminar </Link>
        </div>
    );
}
