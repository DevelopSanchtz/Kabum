import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact                       
                        to="/kabums">
                        Kabums
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/create">
                        Crear kabum
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/loginadmin">
                        Cerrar sesión
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}