import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './show-screen.scss';
import socket from '../../socket';

export const ShowPlayersScreen = (props) => {
    const { pin, tag, id } = props.location.state;
    const history = useHistory();
    socket.connect();
    socket.on('dejar-sala', idBorrado => {
        if (id === idBorrado) {
            socket.emit('disconnect', null);
            history.replace('/login');
        }
    });
    socket.on('primera-pregunta', pregunta => {
        history.replace('/register', { pregunta: pregunta });
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
                <p>Solo esperemos mas participantes</p>
                <p>¿Puedes ver tu nombre?</p>
            </div>
        </div>
    )
}

