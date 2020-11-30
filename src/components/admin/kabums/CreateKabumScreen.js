import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'


export const CreateKabumScreen = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

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

            <div className="container-fluid mt-3 padre">
                <div className="row">
                <div className="col-3 columna">
                    <div className="d-flex justify-content-between ml-5 boton">
                    <Link className="btn btn-success my-2 my-sm-0"  type="submit">Agregar pregunta</Link>
                    </div>
                    <div className="navs">
                    <nav className="sidebar-menu side">
                        <ul>
                            <li className="item">
                                <div className="card-pregunta">
                                    <div className="text-center">
                                        <label>titulo kabum</label>
                                    </div>
                                    <div className="text-center mt-2">
                                        <img src="" alt="Imgen1"/>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </nav>
                    
                    </div>

                    
                </div>
                
                <div className="col-9 columna2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row titulo">
                        <input className="form-control titulo" type="text" name="titulo" placeholder="¿Como se llama el Chino?"></input>
                    </div>
                    <div className="row titulo2 mt-5 ml-5 d-flex justify-content-center">
                        <div className="col-4">
                            <div>
                                Tiempo limite:
                            </div>
                            <div>
                                <select className="selector">
                                    <option>10 segundos</option>
                                    <option>20 segundos</option>
                                    <option>30 segundos</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                Puntos:
                            </div>
                            <div>
                                <select className="selector">
                                    <option>100 puntos</option>
                                    <option>500 puntos</option>
                                    <option>1000 puntos</option>
                                </select>
                            </div>
                        </div>
                        <div className="8 imagen">
                            <div className="d-flex justify-content-center im">
                                <img src={logo} width="400" height="200"></img>
                            </div>
                            <div className="logos d-flex justify-content-center">
                                <Link > <span><i className="fas fa-edit edit"></i></span></Link>
                                <span className="ml-2"><i className="fas fa-trash-alt trash"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 ml-5 d-flex justify-content-center align-items-center botones">
                        <div className="col-6 dos">
                            <div className="btnPress">
                                <button className="azul">Raul</button>
                            </div>
                            <div className="mt-4 btnPress">
                                <button className="rojo">Joaquin</button>
                            </div>
                            
                        </div>
                        <div className="col-6">
                            <div className="btnPress">
                                <button className="amarillo">Santi</button>
                            </div>
                            <div className="mt-4 btnPress">
                                <button className="cielo">OrangeDeb</button>
                            </div>
                        </div>

                    </div>
                    
                </form>
                </div>
                
            </div>
</div>

</div>
    )
}
