import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './show-screen.scss';
import socket from '../../socket';

export const ShowPlayersScreen = (props) => {
    const pin = sessionStorage.getItem('player-pin');
    const tag = sessionStorage.getItem('player-name');
    const id = sessionStorage.getItem('player-id');

    const history = useHistory();
    socket.on('dejar-sala', idBorrado => {
        if (id === idBorrado) {
            socket.emit('disconnect-reply', null);
            history.push('/login');
        }
    });
    socket.on('juego-terminado', () => {
        socket.emit('disconnect-reply', null);
        history.push('/login');
    });
    socket.on('primera-pregunta', (kabum) => {
        sessionStorage.setItem('player-kabum', JSON.stringify(kabum));
        sessionStorage.setItem('contesto', false);
        sessionStorage.setItem('answer', '');
        sessionStorage.setItem('player-question', 0);
        history.push('/responder');
    });
    return (
        <div className="contenedor-show">
            <div className="barra">
                <div className="d-flex">
                    <div className="p-3">
                        <p>Pin: {pin}</p>
                    </div>
                    <div className="p-3 ml-auto">
                        <p>{tag}</p>
                    </div>
                </div>
            </div>
            <div className="inicio-texto">
                <p>Sólo esperemos más participantes</p>
                <p>¿Puedes ver tu nombre?</p>
            </div>
        </div>
    );
}

