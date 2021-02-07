import React from 'react'
import './show-screen.scss'

export const Pantallaconsolacion = () => {
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
                <p id="txt-correcto">Suerte para la próxima</p>
                <p id="txt-suerte">¡Continúa intentándolo!</p>
            </div>
        </div>
    )
}