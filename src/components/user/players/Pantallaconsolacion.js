import React from 'react'
import { Link } from 'react-router-dom';
import './show-screen.scss'
import logo4 from './../../../assets/images/perro.png'
import imgPodioUsuario from './../../../assets/images/bu.png'

export const Pantallaconsolacion = () => {
    return (
        <div className="container-podio-usuario">
            <div className="barra">
                <div className="d-flex">
                    <div className="p-3">
                        <p></p>
                    </div>
                    <div className="p-3">
                        <p></p>

                    </div>
                    <div className="p-3 ml-auto">
                        <p>Gamertag</p>
                    </div>

                    <div className="p-3" id="color">
                        <p>14121</p>
                    </div>
                </div>
            </div>
            <div className="informacion">
            <p id="txt-correcto">Suerta para la proxima</p>
            <p id="txt-suerte">¡Continúa intentandolo!</p>
            </div>
        </div>
    )
}