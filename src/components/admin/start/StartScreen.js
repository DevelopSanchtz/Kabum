import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2';

import './start-screen.scss';
import logo from './../../../assets/images/logo-nuevo-kabum.png';
import socket from '../../socket';
import { PlayerTag } from './PlayerTag';

export const StartScreen = (props) => {
    const history = useHistory();
    let pin, kabum;
    pin = sessionStorage.getItem('pin-kabum');
    kabum = sessionStorage.getItem('kabum');
    kabum = JSON.parse(kabum);
    const salir = () => {
        Swal.fire({
            title: "Salir",
            icon: "warning",
            text: "¿Estás seguro que desea terminar el juego?",
            confirmButtonText: "Salir",
            showCancelButton: true,
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                //función para terminar el juego y redireccionar a los jugadores al inicio
                socket.emit('terminar', null);
                sessionStorage.removeItem('pin-kabum');
                //Redirecciona al administrador a la pantalla de kabums
                history.push('/kabums');
            }
        })
    }

    const [online, setOnline] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('sesion-admin')) {
            history.push('/loginAdmin');
        }
        socket.emit('nuevo-jugador', {
            id: "FHx45X",
            usuario: "host",
            sala: pin,
            tipo: "host",
            kabum: kabum
        });
        socket.on('jugadores', players => {
            setOnline(players);
        });
    }, [history, pin, props]);

    const iniciarJuego = () => {
        if (online.length > 1) {
            socket.emit('bloquear-juego', null);
            sessionStorage.setItem('kabum', JSON.stringify(kabum));
            history.push('/nameKabum');
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
                    {/* Botón para salir del juego */}
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
                            {/* Muestra el pin del juego */}
                            <h1 className="numero-pin">{pin}</h1>
                        </div>
                    </div>

                    <div className="container mt-2">
                        <div className="row">
                            <h2 className="num-jugadores" > <span className="icon-user"> <i className="fas fa-user"></i> </span> {online.length}</h2>
                        </div>
                    </div>

                    {/* Contenedor donde irá la lista de las etiquetas de los jugadores que van ingresando */}
                    <div className="container container-jugadores mt-2">
                        <div className="row justify-content-center">
                            {
                                online.map(player => {
                                    //Retorna la etiqueta de los jugadores 
                                    return (
                                        <PlayerTag key={player.id} data={player} />
                                    );
                                })
                            }
                        </div>
                    </div>
                    {/* Fin de la lista de los jugadores que ingresaron  */}

                    <button onClick={iniciarJuego} className="btn-iniciar-juego">Iniciar </button>
                    {/* <Link to="/nameKabum" className="btn-iniciar-juego">Iniciar </Link> */}
                </div>
            </div>
        </div>
    );
}


