import React from 'react'
import { Link } from 'react-router-dom';
import './show-screen.scss'
import logo4 from './../../../assets/images/perro.png'
import imgPodioUsuario from './../../../assets/images/ka.png'

export const PodioUserScreen2 = () => {
    const pin = sessionStorage.getItem('player-pin');
    const tag = sessionStorage.getItem('player-name');
    const id = sessionStorage.getItem('player-id');
    let jugador = sessionStorage.getItem('player');
    jugador = JSON.parse(jugador);
    return (
        <div className="container-podio-usuario">
            <div class="barra">
                <div class="d-flex">
                    <div class="p-3">
                        <p>Pin: {pin}</p>
                    </div>
                    <div class="p-3">
                        <p></p>
                    </div>
                    <div class="p-3 ml-auto">
                        <p>{tag}</p>
                    </div>
                    <div class="p-3" id="color">
                        <p>{jugador.puntos}</p>
                    </div>
                </div>
            </div>
            <div className="informacion">
                <p id="txt-correcto">Segundo Lugar</p>
                <img className="medidas-incorrecto" src={imgPodioUsuario} alt=""></img>
                <p id="txt-suerte">Felicidades</p>
            </div>
        </div>
    )
}