import React from 'react'
import { Link } from 'react-router-dom';
import logo from './../../../assets/images/burro.png'
import logo2 from './../../../assets/images/gato.png'
import logo3 from './../../../assets/images/leon.png'
import logo4 from './../../../assets/images/perro.png'
import './show-screen.scss'
export const responder = () => {
    return (
        <div class="principal">
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


            <div class="container">
                <div class="item" id="item1">
                    <img className="animal" src={logo} alt=""></img>
                </div>

                <div class="item" id="item2">
                    <img className="animal" src={logo2} alt=""></img>
                </div>

                <div class="item" id="item3">
                    <img className="animal" src={logo3} alt=""></img>
                </div>

                <div class="item" id="item4">
                    <img className="animal" src={logo4} alt=""></img>
                </div>
            </div>



        </div>  
    )
}
