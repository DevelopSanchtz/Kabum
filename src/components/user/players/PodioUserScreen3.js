import React from 'react'
import { Link } from 'react-router-dom';
import './show-screen.scss'
import logo4 from './../../../assets/images/perro.png'
import imgPodioUsuario from './../../../assets/images/m.png'

export const PodioUserScreen3 = () => {
    return (
        <div className="container-podio-usuario">
            <div class="barra">
                <div class="d-flex">
                    <div class="p-3">
                        <p></p>
                    </div>
                    <div class="p-3">
                        <p></p>

                    </div>
                    <div class="p-3 ml-auto">
                        <p>Gamertag</p>
                    </div>

                    <div class="p-3" id="color">
                        <p>14121</p>
                    </div>
                </div>
            </div>
            <div className="informacion">
            <p id="txt-correcto">Tercer Lugar</p>
            <img className="medidas-incorrecto" src={imgPodioUsuario} alt=""></img>
            <p id="txt-suerte">Felicidades</p>
            </div>
        </div>
    )
}