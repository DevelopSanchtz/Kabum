import React, { useEffect, useState } from 'react'
import './answer-question-admin.scss'
import imagen from './../../../assets/images/mexico-imagen.jpg'
import { Link } from 'react-router-dom';
import logo from './../../../assets/images/burro.png'
import logo2 from './../../../assets/images/gato.png'
import logo3 from './../../../assets/images/vaca.png'
import logo4 from './../../../assets/images/lobo.png'
import Swal from 'sweetalert2'
import socket from '../../socket'

export const ResultsScreen = () => {
    const [estadisticas, setEstadisticas] = useState({})
    useEffect(() => {
        socket.on('estadisticas-preguntas', data => {
            setEstadisticas(data);
        });
    });
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
                    window.location.href = "/login";
                })
            }
        })
    }


    return (
        <div>
            <div className=" titulo-pregunta container-fluid mt-2">
                <div className="row  justify-content-center">
                    <h1>¿Cuandos estados tiene México?</h1>
                </div>
            </div>
            <h3>1 de 3</h3>

            <div className="container-fluid mt-4">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <h1>La respuesta correcta es:</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-6">
                        <button className="respuesta2 mt-2">32 </button>
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


            <Link to="/scoreboard" className="siguiente-pregunta">Siguiente </Link>
            <Link onClick={terminarJuego} className="terminar-juego">Terminar </Link>

        </div>



    )
}
