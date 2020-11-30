import React from 'react'
import { Link } from 'react-router-dom';
import './show-resultados.scss'
import logo4 from './../../../assets/images/perro.png'
import img1er from './../../../assets/images/bu.png'
import img2do from './../../../assets/images/ka.png'
import img3er from './../../../assets/images/m.png'
export const resultados = () => {
    return (
        <div class="principal-r">
        <div class="row fs">
            <div class="col-3">
            </div>
            
            <div class="col-6 ">
                
            <div class="titulo-blanco">
                        <h2 >Sigan practicando, ¡muchas felicidades!</h2>
                    </div>
                <div class="footer">
               
                <div className="titulo-tag">
                        <h2 id="titulo">Gamertag</h2>
                    </div>

                    <div class="item2" id="item11">
                    <img className="medallas" src={img2do} alt=""></img>
                        <h2 id="titulo">1234</h2>
                        <p id="subtitulo">2 de cada 4</p>
                    </div>
                    
                 

                    <div class="item2" id="item22">
                
                        <img className="medallas" src={img1er} alt=""></img>
                        <h2 id="titulo">1234</h2>
                        <p id="subtitulo">1 de cada 4</p>
                    </div>

            

                    <div class="item2" id="item33">  
                    <img className="medallas" src={img3er} alt=""></img>
                        <h2 id="titulo">1234</h2>
                        <p id="subtitulo">3 de cada 4</p>                  
                </div>
                </div>
            </div>
            <div class="col-3">
                
            </div>
        </div>
  
    </div>
    )
}