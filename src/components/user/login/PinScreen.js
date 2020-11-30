import React from 'react'
import './pin-screen.scss'

import logo from './../../../assets/images/logo-nuevo-kabum.png'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

export const PinScreen = () => {


    const verificarPin = ()=>{
        Swal.fire({
            title: "Correcto",
            icon: "success",
            text:"El pin ingresado es correcto",
            confirmButtonText:"Aceptar",
        }).then(function(){
            window.location.href = "/showplayers";
        })
    }


    return (
            <div class="contenedor">
                <img src={logo} alt="logo" height="200px"></img>
                <form>
                    <p><input type="text" placeholder="Pin" name="pin" class="pin" maxLength="6" /></p>
                </form>

                <form>
                    <p><input type="text" placeholder="GamerTag" name="pin" class="pin" maxLength="6" /></p>
                </form>
                <Link onClick={verificarPin} class="btn-pin"> Ingresa </Link>
            </div>
    )
}



