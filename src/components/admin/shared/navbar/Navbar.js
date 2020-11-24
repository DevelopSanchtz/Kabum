import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.scss'
import logo from '../../../../assets/images/logo-nuevo-kabum.png'

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg fondo-navbar">
            <a className="navbar-brand" href="#">
                <img src={logo} width="80" height="30" alt=""></img>
            </a>

            <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/kabums">
                Kabums
                    </NavLink>


            <a className="navbar-brand">
            </a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                <form className="form-inline my-2 my-lg-0">
                    <Link to="/create" className="btn btn-success my-2 my-sm-0" type="submit"> <i class="fas fa-plus-circle"></i> Crear
                    Kabum</Link>
                    <Link to="/loginadmin" className="btn btn-light my-2 my-sm-0 ml-2" type="submit"> Cerrar sesión </Link>
                </form>
            </div>
        </nav>
    )
}