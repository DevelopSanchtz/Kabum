import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './show-resultados.scss'
import img1er from './../../../assets/images/bu.png'
import img2do from './../../../assets/images/ka.png'
import img3er from './../../../assets/images/m.png'
export const Resultados = () => {
    const history = useHistory();
    let estadisticas = sessionStorage.getItem('estadisticas');
    estadisticas = JSON.parse(estadisticas);
    let players = estadisticas.jugadores;
    let n = players.length;
    for (let i = 0; i < n - 1; i++)
        for (let j = 0; j < n - i - 1; j++)
            if (players[j].puntos < players[j + 1].puntos) {
                let temp = players[j];
                players[j] = players[j + 1];
                players[j + 1] = temp;
            }
    const avanzarScoreboard = () => {
        history.push('/scoreboard');
    };
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
                            <h2 id="titulo">{players[0].nombre}</h2>
                        </div>
                        {players.length > 1 ?
                            <div className="item2" id="item11">
                                <div className="titulo-tag2">
                                    <h2 id="titulo">{players[1].nombre}</h2>
                                </div>
                                <img className="medallas" src={img2do} alt=""></img>
                                <h2 id="titulo">{players[1].puntos}</h2>
                            </div> :
                            <></>
                        }
                        <div className="item2" id="item22">
                            <img className="medallas1" src={img1er} alt=""></img>
                            <h2 id="titulo">{players[0].puntos}</h2>
                        </div>
                        {players.length > 2 ?
                            <div className="item2" id="item33">
                                <div className="titulo-tag3">
                                    <h2 id="titulo">{players[2].nombre}</h2>
                                </div>
                                <img className="medallas" src={img3er} alt=""></img>
                                <h2 id="titulo">{players[2].puntos}</h2>
                            </div> :
                            <></>
                        }
                    </div>
                </div>
                <Link onClick={() => avanzarScoreboard()} className="siguiente-pregunta">Siguiente </Link>
            </div>
        </div>
    )
}