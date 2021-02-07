import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Swal from 'sweetalert2';
import './navbar.scss';
import logo from '../../../../assets/images/logo-nuevo-kabum.png';

export const Navbar = () => {
    const history = useHistory();
    const crearKabum = async (event) => {
        event.preventDefault();
        const { value: text } = await Swal.fire({
            input: 'text',
            inputLabel: 'Título Kabum',
            inputPlaceholder: 'Ingrese el título del kabum',
            inputAttributes: {
                'aria-label': 'Escribe el título aquí'
            },
            confirmButtonText: "Agregar",
            showCancelButton: true,
            cancelButtonText: "Cancelar"
        });
        if (text) {
            Swal.fire({
                title: "Se agregó el Kabum",
                text,
                icon: "success",
                confirmButtonText: "Aceptar"
            }).then(function () {
                const id = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
                sessionStorage.setItem('kabum-id', id);
                sessionStorage.setItem('kabum-name', text);
                sessionStorage.setItem('kabum-preguntas', JSON.stringify([]));
                sessionStorage.setItem('kabum-preguntaActual', 0);
                history.push('/create');
            })
        }
    }
    const cerrarSesion = () => {
        localStorage.removeItem('sesion-admin');
        //Redirecciona a la pantalla para iniciar sesion
        history.push('/loginAdmin');
    }
    return (
        <nav className="navbar navbar-expand-lg fondo-navbar">
            <span className="navbar-brand">
                <img src={logo} width="80" height="30" alt=""></img>
            </span>
            <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/kabums">
                Kabums
            </NavLink>
            <span className="navbar-brand">
            </span>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                <form className="form-inline my-2 my-lg-0">
                    <button onClick={crearKabum} className="btn btn-success my-2 my-sm-0" type="submit"> <i className="fas fa-plus-circle"></i> Crear
                    Kabum</button>
                    <button onClick={cerrarSesion} className="btn btn-light my-2 my-sm-0 ml-2" type="submit"> Cerrar sesión </button>
                </form>
            </div>
        </nav>
    );
}