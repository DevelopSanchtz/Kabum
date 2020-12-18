import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2';

import './start-screen.scss';
import logo from './../../../assets/images/logo-nuevo-kabum.png';
import socket from '../../socket';
import { PlayerTag } from './PlayerTag';

export const StartScreen = (props) => {
    const history = useHistory();
    let pin;
    if (localStorage.getItem('pin-kabum')) {
        pin = localStorage.getItem('pin-kabum');
        kabum = localStorage.getItem('kabum');
    } else {
        pin = props.location.props.pin;
        localStorage.setItem('pin-kabum', pin);
        kabum = props.location.props.kabum;
        localStorage.setItem('kabum', kabum);
    }
    const salir = () => {
        Swal.fire({
            title: "Salir",
            icon: "warning",
            text: "¿Estás seguro que desea trminar el juego?",
            confirmButtonText: "Salir",
            showCancelButton: true,
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/kabums";
                localStorage.removeItem('pin-kabum');
            }
        })
    }

    socket.connect();
    const [online, setOnline] = useState([]);

    useEffect(() => {
        socket.emit('nuevo-jugador', {
            id: "FHx45X",
            usuario: "host",
            sala: pin,
            tipo: "host"
        });
        socket.on('jugadores', players => {
            console.log(players);
            setOnline(players);
        });
    }, []);

    const iniciarJuego = () => {
        if (online.length > 1) {
            socket.emit('empezar-juego');
            history.push('/nameKabum', {
                kabum: kabum
            })
        } else {
            Swal.fire({
                title: "Sala incompleta",
                icon: "warning",
                text: "Aun faltan mas jugadores, esperemos a que se unan más personas",
                confirmButtonText: "Ok",
                timer: '3000'
            })
        }
    };

    return (

        <div >
            <div className="fondo-start" >
                <div className="fondo-start-color">
                    <button onClick={salir} className="btn p-1 m-1 btn-salir" >Salir</button>

                    <div className="container">
                        <div className="row justify-content-center">
                            <img src={logo} className="logo-kabum-mov" alt=""></img>
                        </div>
                    </div>

                    <div className="container-pin container-fluid mt-1 color-pin">
                        <div className="row justify-content-center">
                            <h6 className="pin-start mt-1">PIN</h6>
                        </div>
                        <div className="row justify-content-center ">
                            <h1 className="numero-pin">{pin}</h1>
                        </div>
                    </div>

                    <div className="container mt-2">
                        <div className="row">
                            <h2 className="num-jugadores" > <span className="icon-user"> <i className="fas fa-user"></i> </span> {online.length}</h2>
                        </div>
                    </div>

                    <div className="container container-jugadores mt-2">
                        <div className="row justify-content-center">
                            {
                                online.map(player => {
                                    return (
                                        <PlayerTag key={player.id} data={player} />
                                    );
                                })
                            }
                        </div>
                    </div>
                    <button onClick={iniciarJuego} className="btn-iniciar-juego">Iniciar </button>
                    {/* <Link to="/nameKabum" className="btn-iniciar-juego">Iniciar </Link> */}
                </div>
            </div>
        </div>
    );
}


