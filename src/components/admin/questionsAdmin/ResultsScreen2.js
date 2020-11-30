import React from 'react'
import './answer-question-admin.scss'
import imagen from './../../../assets/images/mexico-imagen.jpg'
import { Link } from 'react-router-dom';
import logo from './../../../assets/images/burro.png'
import logo2 from './../../../assets/images/gato.png'
import logo3 from './../../../assets/images/leon.png'
import logo4 from './../../../assets/images/perro.png'
import Swal from 'sweetalert2'

export const ResultsScreen2 = () => {

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
                    window.location.href = "/kabums";
                })
            }
        })
    }


    return (
        <div>
            <div className=" titulo-pregunta container-fluid mt-2">
                <div className="row  justify-content-center">
                    <h1>¿Nombre del actual presidente de México?</h1>
                </div>
            </div>
            <h3>2 de 3</h3>

            <div className="container-fluid mt-4">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <h1>La respuesta correcta es:</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-6">
                        <button className="respuesta2 mt-2">AMLO bb</button>
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
                            <h4 className="text-center numero-respuestas-total">2</h4>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="resultados-totales2">
                            <img className="animal-resultados" src={logo2} alt=""></img>
                            <h4 className="text-center numero-respuestas-total">2</h4>

                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="resultados-totales3">
                            <img className="animal-resultados" src={logo3} alt=""></img>
                            <h4 className="text-center numero-respuestas-total">1</h4>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="resultados-totales4">
                            <img className="animal-resultados" src={logo4} alt=""></img>
                            <h4 className="text-center numero-respuestas-total">5</h4>

                        </div>
                    </div>

                </div>
            </div>


            <Link to="/scoreboard2" className="siguiente-pregunta">Siguiente </Link>
            <Link onClick={terminarJuego} className="terminar-juego">Terminar </Link>

        </div>



    )
}
