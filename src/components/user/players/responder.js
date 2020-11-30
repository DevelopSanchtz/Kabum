import React from 'react'
import { Link } from 'react-router-dom';
import logo from './../../../assets/images/burro.png'
import logo2 from './../../../assets/images/gato.png'
import logo3 from './../../../assets/images/vaca.png'
import logo4 from './../../../assets/images/lobo.png'
import './show-screen.scss'
export const responder = () => {
    return (
        <div className="container-responder">
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
            </div>|


            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">

                        <Link to="/correcto" className="btn-respuestas">
                            <div class="item" id="item1">
                                <img className="animal" src={logo} alt=""></img>
                            </div>
                        </Link>            
                        
                        <Link to="/correcto" className="btn-respuestas">
                            <div class="item" id="item3">
                                <img className="animal" src={logo3} alt=""></img>
                            </div>
                        </Link>                 
                    </div>

                    <div className="col-6">


                        <Link to="/incorrecto">
                            <div class="item" id="item2">
                                <img className="animal" src={logo2} alt=""></img>
                            </div>
                        </Link>
                        <Link to="/incorrecto" className="btn-respuestas">
                            <div class="item" id="item4">
                                <img className="animal" src={logo4} alt=""></img>
                            </div>
                        </Link>   
                    </div>

                </div>
            </div>

        </div>
    )
}
