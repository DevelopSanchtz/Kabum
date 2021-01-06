import React from 'react'
import { Link } from 'react-router-dom';
import './show-screen.scss'
import logo4 from './../../../assets/images/perro.png'
import logoincorrecto from './../../../assets/images/incorrecto.png'

export const incorrecto = () => {
    return (
        <div className="container-incorrecto">
            <div className="barra">
                <div className="d-flex">
                    <div className="p-3">
                        <p>Pin:465465465</p>
                    </div>
                    <div className="p-3">
                        <p>2/12</p>

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
             <img className="medidas-incorrecto" src={logoincorrecto} alt=""></img>
            <p id="txt-suerte">Suerte en la siguiente</p>
            <p id="txt-podium">No te encuentras dentro del podium</p>
            </div>
        </div>
    )
}