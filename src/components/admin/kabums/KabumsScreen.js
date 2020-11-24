import React from 'react'
import './kabums-screen.scss'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

export const KabumsScreen = () => {

    const borrarKabum = ()=>{
        Swal.fire({
            title: "Eliminar",
            icon: "warning",
            text:"¿Estás seguro que desea eliminar el Kabum?",
            confirmButtonText:"Eliminar",
            showCancelButton: true,
            cancelButtonText:"Cancelar"
        }).then((result)=>{
            if(result.isConfirmed){
                Swal.fire({
                    icon:"success",
                    title:"Eliminado",
                    text:"El Kabum se ha eliminado con éxito",
                    confirmButtonText:"Aceptar",
                    timer:"3000"
                })
            }
        })
    }





    return (
        <div>
            <div className="portada-kabum">
                <div class="container">
                    <div class="row">
                        <div class="col-2"></div>
                        <div class="col-8 form-buscar">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Buscar kabum" aria-label="Buscar kabum"
                                    aria-describedby="button-addon2"></input>
                                <div class="input-group-append">
                                    <button class="btn-buscar btn  btn-light" type="button" id="button-addon2"> <i
                                        class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-2"></div>
                    </div>
                </div>
            </div>

            
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                <div class="d-flex">
                    <div class="p-2">
                        <h5>Mis <span class="titulo-kabums"> Kabums </span> <span class="badge color-badge">3</span>
                        </h5>
                    </div>
                    <div class="ml-auto p-2">
                        <h6 class="mt-2">Filtrar por:</h6>
                    </div>
                    <div class="p-2">
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Mas recientes
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                              <button class="dropdown-item" type="button">preguntas</button>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>


{/* lista de kabums */}
        <div class="container">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-3">
                                    <div class="">
                                        <img class="imagen-pregunta" src="" alt=""></img>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <h2 class="titulo-kabums">Primer kabum</h2>
                                    <h5>3 preguntas</h5>
                                    <p>Creado hace <span> 2 dias </span> </p>
                                </div>
                                <div class="col-3">
                                    <div class="row justify-content-end">
                                        <button class="btn btn-light my-2 my-sm-0 ml-2" type="submit"> <i class="far fa-heart"></i> </button>
                                        <button onClick={()=>borrarKabum()} class="btn btn-light my-2 my-sm-0 ml-2" type="submit"> <i class="fas fa-trash-alt"></i> </button>
                                    </div>
                                    <div class="row justify-content-end"> <p> <span>3 </span> Jugadores</p> </div>
                                    <div class="row justify-content-end">
                                        <Link to="/create" class="btn btn-outline-primary"> Editar </Link>
                                        <Link to="/start" class="btn btn-success ml-2"> Jugar </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>    
        </div>

    </div>


    <footer>
        <div class="container">
            <div class="row justify-content-center">

                <h6>Kabum&reg;</h6>

            </div>
        </div>
    </footer>




                
        </div>
    )
}
