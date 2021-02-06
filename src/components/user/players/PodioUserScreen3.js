import React from 'react'
import './show-screen.scss'
import imgPodioUsuario from './../../../assets/images/m.png'

export const PodioUserScreen3 = () => {
    const pin = sessionStorage.getItem('player-pin');
    const tag = sessionStorage.getItem('player-name');
    let jugador = sessionStorage.getItem('player');
    jugador = JSON.parse(jugador);
    let puntosentero = Math.round(jugador.puntos);
    return (
        <div className="container-podio-usuario">
            <div className="barra">
                <div className="d-flex">
                    <div className="p-3">
                        <p>Pin: {pin}</p>
                    </div>
                    <div className="p-3">
                        <p></p>
                    </div>
                    <div className="p-3 ml-auto">
                        <p>{tag}</p>
                    </div>
                    <div className="p-3" id="color">
                        <p>{puntosentero}</p>
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