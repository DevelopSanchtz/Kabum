import React from 'react'
import { Link } from 'react-router-dom';
import './show-resultados.scss'
import logo4 from './../../../assets/images/perro.png'
import img1er from './../../../assets/images/bu.png'
import img2do from './../../../assets/images/ka.png'
import img3er from './../../../assets/images/m.png'
export const resultados = () => {
    return (
        <div className="principal-r">
            <div className="row fs">
                <div className="col-3">
                </div>

                <div className="col-6 ">

                    <div className="titulo-blanco">
                        <h2 >Sigan practicando, ¡muchas felicidades!</h2>
                    </div>
                    <div className="footer">

                        <div className="titulo-tag">
                            <h2 id="titulo">Gamertagx</h2>
                        </div>

                        <div className="item2" id="item11">

                            <div className="titulo-tag2">
                                <h2 id="titulo">Gamertagx2</h2>
                            </div>
                            <img className="medallas" src={img2do} alt=""></img>
                            <h2 id="titulo">1234</h2>
                            <p id="subtitulo">2 de cada 4</p>
                        </div>





                        <div className="item2" id="item22">

                            <img className="medallas1" src={img1er} alt=""></img>
                            <h2 id="titulo">1234</h2>
                            <p id="subtitulo">1 de cada 4</p>
                        </div>



                        <div className="item2" id="item33">
                            <div className="titulo-tag3">
                                <h2 id="titulo">Gamertagx3</h2>
                            </div>
                            <img className="medallas" src={img3er} alt=""></img>
                            <h2 id="titulo">1234</h2>
                            <p id="subtitulo">3 de cada 4</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">

                </div>
            </div>

        </div>
    )
}