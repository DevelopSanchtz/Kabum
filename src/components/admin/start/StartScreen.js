import React, { Component } from 'react'
import './start-screen.scss'
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

export class StartScreen extends Component {
    render() {

        const borrarJugador = ()=>{
            Swal.fire({
                title: "Eliminar",
                icon: "warning",
                text:"¿Estás seguro que desea eliminar al jugador?",
                confirmButtonText:"Eliminar",
                showCancelButton: true,
                cancelButtonText:"Cancelar"
            }).then((result)=>{
                if(result.isConfirmed){
                    Swal.fire({
                        icon:"success",
                        title:"Eliminado",
                        text:"El jugador se ha eliminado con éxito",
                        confirmButtonText:"Aceptar",
                        timer:"3000"
                    })
                }
            })
        }

        const salir = ()=>{
            Swal.fire({
                title: "Salir",
                icon: "warning",
                text:"¿Estás seguro que desea trminar el juego?",
                confirmButtonText:"Salir",
                showCancelButton: true,
                cancelButtonText:"Cancelar"
            }).then((result)=>{
                if(result.isConfirmed){
                    window.location.href = "/kabums"; 
                }
            })
        }
        
      
        return (
            <div>
                <div className="fondo-start">
                    <div className="fondo-start-color">
                    <button onClick={salir} className="btn p-1 m-1 btn-salir" >Salir</button>

                        <div className="container">
                            <div className="row justify-content-center">
                                <img src={logo} className="logo-kabum-mov" alt=""></img>
                            </div>
                        </div>                           

                        <div className="container-pin container-fluid mt-1 color-pin">
                            <div className="row justify-content-center">
                                <h6 className="pin mt-1">PIN</h6>
                            </div>
                            <div className="row justify-content-center ">
                                <h1 className="numero-pin">944878</h1>
                            </div>
                        </div>

                        <div className="container mt-2">
                            <div className="row">
                                <h2 className="num-jugadores" > <span className="icon-user"> <i class="fas fa-user"></i> </span> 5</h2>
                            </div>
                        </div>

                        <div className="container container-jugadores mt-2">
                            <div className="row justify-content-center">
                                <h2 className="num-jugadores ml-2">MonoDL <span> <a className="quitar-jugador" onClick={borrarJugador} ><i class="fas fa-times-circle"></i></a>  </span> </h2>
                                <h2 className="num-jugadores ml-2">juanCarlos <span> <a className="quitar-jugador" onClick={borrarJugador} ><i class="fas fa-times-circle"></i></a>  </span> </h2>
                                <h2 className="num-jugadores ml-2">TempìsDev <span> <a className="quitar-jugador" onClick={borrarJugador} ><i class="fas fa-times-circle"></i></a>  </span> </h2>
                                <h2 className="num-jugadores ml-2">Ana <span> <a className="quitar-jugador" onClick={borrarJugador} ><i class="fas fa-times-circle"></i></a>  </span> </h2>
                                <h2 className="num-jugadores ml-2">OrangeDev <span> <a className="quitar-jugador" onClick={borrarJugador} ><i class="fas fa-times-circle"></i></a>  </span> </h2>
                                <h2 className="num-jugadores ml-2">Santi <span> <a className="quitar-jugador" onClick={borrarJugador} ><i class="fas fa-times-circle"></i></a>  </span> </h2>
                                <h2 className="num-jugadores ml-2">El Apis <span> <a className="quitar-jugador" onClick={borrarJugador} ><i class="fas fa-times-circle"></i></a>  </span> </h2>
                                <h2 className="num-jugadores ml-2">El Whoosh <span> <a className="quitar-jugador" onClick={borrarJugador} ><i class="fas fa-times-circle"></i></a>  </span> </h2>

                            </div>
                        </div>
                        <Link to="/nameKabum" className="btn-iniciar-juego">Iniciar </Link>


                    </div>
                </div>
            </div>
        )
    }
}


