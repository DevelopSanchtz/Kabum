import React from 'react'
import { Link } from 'react-router-dom';
import logo from './../../../assets/images/logo-nuevo-kabum.png'

import './show-screen.scss'
export const cargarpregunta = () => {
    return (
        <div>
            <div class="barra">
                <div class="d-flex">
                    <div class="p-3">
                        <p>Pin:465465465</p>
                    </div>
                    <div class="p-3">
                        <p>2/12</p>

                    </div>
                    <div class="p-3 ml-auto">
                        <p>Gamertag</p>
                    </div>

                    <div class="p-3" id="color">
                        <p>14121</p>
                    </div>
                </div>
            </div>


            <div class="inicio-texto">
            <p>PREGUNTA 1</p>
            <div class="tiempo-centro">
            <h1 id="count">3</h1>
            </div>
            <p>GO</p>
            </div>

        </div>
        
    )
    
}


