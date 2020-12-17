import React, { useEffect, useState } from 'react'

import './kabums-screen.scss'
import { KabumList } from './KabumList';

export const KabumsScreen = () => {
    const [kabumList, setKabumList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/get-kabum-fromserver')
            .then(response => response.json())
            .then(data => {
                setKabumList(data);
            })
            .catch(error => console.log(error));
    }, []);
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
                <KabumList kabums={kabumList} />
            </div>
            <footer>
                <div class="container">
                    <div class="row justify-content-center">
                        <h6>Kabum&reg;</h6>
                    </div>
                </div>
            </footer>
        </div>
    );
}