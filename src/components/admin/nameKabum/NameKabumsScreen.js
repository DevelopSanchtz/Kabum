import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './name-kabums-screen.scss';
import logo from './../../../assets/images/logo-nuevo-kabum.png';


export const NameKabumsScreen = (props) => {
    const history = useHistory();
    let kabum;
    //revisa las props para poner un item que contenga la info de los kabums
    if (props.location.props) {
        kabum = props.location.props.kabum;
        sessionStorage.setItem('kabum', kabum);
        sessionStorage.setItem('kabum', JSON.stringify(kabum));
    } else {
        kabum = sessionStorage.getItem('kabum');
        kabum = JSON.parse(kabum);
    }
    //pone un item en el localstorage para las preguntas
    const startKabum = () => {
        sessionStorage.setItem('question', 0)
        history.push('/question');
    }
    //revisa si hay una sesion activa para el admin en kabum
    useEffect(() => {
        if (!localStorage.getItem('sesion-admin')) {
            history.push('/loginAdmin');
        }
    }, [history]);
    return (
        <div>
            <div className="fondo-start">
                <div className="fondo-start-color">
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <img src={logo} className="logo-kabum-movimiento" alt=""></img>
                        </div>
                    </div>
                    <div className="container-pregunta container-fluid color-pin">
                        <div className="row justify-content-center ">
                            <h1 className=" text-center numero-pin">{kabum.nombre}</h1>
                        </div>
                    </div>
                    <div className="cargando container mt-5">
                        <div className="row justify-content-center">
                            <div className="spinner-border text-light" role="status">
                                <span className="sr-only">Cargando</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={startKabum} className="btn-iniciar-juego">Siguiente </button>
                </div>
            </div>
        </div>
    )
}
