import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../assets/images/logo-nuevo-kabum.png'


export const CreateKabumScreen = () => {
    return (
        <div>
            {/* Navbar */}
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
                        <Link className="btn btn-cancelar my-2 my-sm-0 mr-2" type="submit"> Cancelar </Link>
                        <Link className="btn btn-success my-2 my-sm-0" type="submit"> Guardar</Link>
                    </form>
                </div>
            </nav>
            {/* termina navbar */}

            <div className="container">
                <h6>Aqui vas a hacer lo de crear kabums santi xd</h6>
            </div>



        </div>
    )
}
