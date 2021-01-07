import React, { useEffect, useState } from 'react'
import './answer-question-admin.scss'
import imagen from './../../../assets/images/mexico-imagen.jpg'
import { Link, useHistory } from 'react-router-dom';
import logo from './../../../assets/images/burro.png'
import logo2 from './../../../assets/images/gato.png'
import logo3 from './../../../assets/images/vaca.png'
import logo4 from './../../../assets/images/lobo.png'
import Swal from 'sweetalert2'
import socket from '../../socket'

export const ResultsScreen = (props) => {
    const history = useHistory();
    let pregunta = sessionStorage.getItem('question');
    pregunta = parseInt(pregunta);
    let kabum = sessionStorage.getItem('kabum');
    kabum = JSON.parse(kabum);
    let estadisticas;
    if (props.location.state) {
        estadisticas = props.location.state.estadisticas;
        console.log(estadisticas.jugadores);
        sessionStorage.setItem('estadisticas', JSON.stringify(estadisticas));
    } else {
        estadisticas = sessionStorage.getItem('estadisticas');
        estadisticas = JSON.parse(estadisticas);
    }
    const avanzarScoreboard = () => {
        if (pregunta < kabum.preguntas.length) {
            let state = {
                estadisticas: estadisticas
            };
            history.push('/scoreboard', state);
        } else {
            history.push('/scoreboard');
        }
    };
    const terminarJuego = () => {
        Swal.fire({
            title: "Terminar",
            icon: "warning",
            text: "¿Estás seguro que desea trminar el juego?",
            confirmButtonText: "Terminar",
            showCancelButton: true,
            cancelButtonText: "Seguir jugando"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Juego terminado",
                    icon: "success",
                }).then((resultado) => {
                    history.replace("/login");
                })
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
        }
    }
    return (
        <div>
            <div className=" titulo-pregunta container-fluid mt-2">
                <div className="row  justify-content-center">
                    <h1>{kabum.preguntas[pregunta].pregunta}</h1>
                </div>
            </div>
            <h3>{pregunta + 1} de {kabum.preguntas.length}</h3>
            <div className="container-fluid mt-4">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <h1>La respuesta correcta es:</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <button className="respuesta2 mt-2">{getCorrecta(kabum.preguntas[pregunta].correcta)}</button>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <h4>Total Respuestas</h4>
                </div>
            </div>
            <div className="container">
                <div className="row  ">
                    <div className="col-lg-3">
                        <div className="resultados-totales1">
                            <img className="animal-resultados" src={logo} alt=""></img>
                            <h4 className="text-center numero-respuestas-total">{estadisticas.a}</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="resultados-totales2">
                            <img className="animal-resultados" src={logo2} alt=""></img>
                            <h4 className="text-center numero-respuestas-total">{estadisticas.b}</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="resultados-totales3">
                            <img className="animal-resultados" src={logo3} alt=""></img>
                            <h4 className="text-center numero-respuestas-total">{estadisticas.c}</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="resultados-totales4">
                            <img className="animal-resultados" src={logo4} alt=""></img>
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
