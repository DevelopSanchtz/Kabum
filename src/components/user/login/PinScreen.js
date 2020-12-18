import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import Swal from 'sweetalert2'

import './pin-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import socket from '../../socket';

export const PinScreen = () => {
    const [pin, setPin] = useState("");
    const [tag, setTag] = useState("");
    const history = useHistory();
    let state = {};
    const id = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
    socket.connect();
    useEffect(() => {
        socket.on('estado', (response) => {
            if (response.error) {
                Swal.fire({
                    title: "Error",
                    icon: "error",
                    text: "El pin ingresado es incorrecto",
                    confirmButtonText: "Aceptar",
                });
            } else {
                Swal.fire({
                    title: "Correcto",
                    icon: "success",
                    text: "El pin ingresado es correcto",
                    confirmButtonText: "Aceptar",
                    timer: "3000"
                }).then(function () {
                    history.push('/showplayers', state);
                });
            }
        });
    }, []);
    const verificarPin = () => {
        state = {
            tag: tag,
            pin: pin,
            id: id
        };
        socket.emit('nuevo-jugador', {
            id: id,
            usuario: tag,
            sala: pin,
            tipo: 'jugador'
        });
    };
    const changePin = (event) => {
        setPin(event.target.value);
    };
    const changeTag = (event) => {
        setTag(event.target.value);
    };
    return (
        <div className="contenedor">
            <img src={logo} alt="logo" height="200px"></img>
            <form>
                <p><input onChange={changePin} type="text" placeholder="Pin" name="pin" className="pin" maxLength="6" /></p>
            </form>
            <form>
                <p><input onChange={changeTag} type="text" placeholder="GamerTag" name="tag" className="pin" maxLength="6" /></p>
            </form>
            <Link onClick={verificarPin} className="btn-pin"> Ingresa </Link>
        </div>
    );
}



