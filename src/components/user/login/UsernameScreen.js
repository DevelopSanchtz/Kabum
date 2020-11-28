import React from 'react'
import './pin-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import { Link } from 'react-router-dom';

export const UsernameScreen = () => {
    return (
        <div class="contenedor-completo">
        <div class="contenedor">
   <img src={logo} alt="logo" height="200px"></img>
   <form>
       <p><input type="text" placeholder="GamerTag" name="pin" class="pin" maxLength="12"/></p>
   </form>
   <Link to="/showplayers" class="btn-pin"> Ingresa </Link>
        </div>
        </div>
    )
}

