import React from 'react'
import './name-kabums-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import { Link } from 'react-router-dom';


export const NameKabumsScreen = () => {
    return (
        <div>
            <div className="fondo-start">
                <div className="fondo-start-color">
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <img src={logo} className="logo-kabum-movimiento" alt=""></img>
                        </div>
                    </div>

                    <div className="container-pregunta container-fluid color-pin">
                        <div className="row justify-content-center ">
                            <h1 className=" text-center numero-pin">Primer Kabum</h1>
                        </div>
                    </div>

                    <div className="cargando container mt-5">
                        <div className="row justify-content-center">
                            <div className="spinner-border text-light" role="status">
                                <span className="sr-only">Cargando</span>
                            </div>
                        </div>
                    </div>

                    <Link to="/question" className="btn-iniciar-juego">Siguiente </Link>





                </div>
            </div>
        </div>
    )
}
