import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2'

import './pin-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import socket from '../../socket';

export const PinScreen = (props) => {
    const [pin, setPin] = useState("");
    const [tag, setTag] = useState("");
    const history = useHistory();
    let id;
    if (props.location.props) {
        id = props.location.props.id;
        sessionStorage.setItem('id-jugador', id);
    } else {
        id = sessionStorage.getItem('id-jugador');
    }
    useEffect(() => {
        socket.on('estado', (response) => {
            if (response.error) {
                Swal.fire({
                    title: "Error",
                    icon: "error",
                    text: response.msg,
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
                    history.push('/showplayers');
                });
            }
        });
    }, [history]);
    const verificarPin = (event) => {
        event.preventDefault();
        if (tag.trim().replace(' ', '').length === 0) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Por favor ingresa un gamertag",
                confirmButtonText: "OK",
                timer: "3000"
            });
            return;
        }
        sessionStorage.setItem('player-name', tag.trim().replace(' ', ''));
        sessionStorage.setItem('player-id', id);
        sessionStorage.setItem('player-pin', pin);
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
            <form onSubmit={verificarPin}>
                <p><input onChange={changePin} type="text" placeholder="Pin" name="pin" className="pin" maxLength="6" /></p>
                <p><input onChange={changeTag} type="text" placeholder="GamerTag" name="tag" className="pin" maxLength="6" /></p>
                <button className="btn-pin"> Ingresa </button>
            </form>
        </div>
    );
}



