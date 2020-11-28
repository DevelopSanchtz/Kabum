import React from 'react'
import './pin-screen.scss'

import logo from './../../../assets/images/logo-nuevo-kabum.png'
import { Link } from 'react-router-dom';

export const PinScreen = () => {
    return (
            <div class="contenedor">
                <img src={logo} alt="logo" height="200px"></img>
                <form>
                    <p><input type="text" placeholder="Pin" name="pin" class="pin" maxLength="6" /></p>
                </form>
                <Link to="/gamertag" class="btn-pin"> Ingresa </Link>
                <p class="kabum">Crea tu propio <strong> Kabum aquí</strong> </p>
            </div>
    )
}



