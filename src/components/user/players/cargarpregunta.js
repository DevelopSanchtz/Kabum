import React from 'react'

import './show-screen.scss'
export const cargarpregunta = () => {
    return (
        <div className="contenedor-show">
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


            <div className="inicio-texto">
            <p>PREGUNTA 1</p>
            <div className="tiempo-centro">
            <h1 id="count">3</h1>
            </div>
            <p>GO</p>
            </div>

        </div>
        
    )
    
}


