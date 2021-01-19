import React, { useEffect, useState } from 'react'

import './kabums-screen.scss'
import { KabumList } from './KabumList';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const KabumsScreen = () => {
    const history = useHistory();
    const [kabumList, setKabumList] = useState([]);
    const [unfilteredKabums, setUnfilteredKabums] = useState([]);
    const sesion = sessionStorage.getItem('sesion-admin');
    useEffect(() => {
        if (sesion) {
            fetch('https://kabum-server.herokuapp.com/get-kabum-fromserver')
            .then(response => response.json())
            .then(data => {
                setUnfilteredKabums(data);
                setKabumList(data);
            })
            .catch(error => console.log(error));
        } else {
            history.replace('/loginadmin');
        }
    }, []);
    const filterKabums = (event) => {
        const filterText = event.target.value;
        let newKabumsList = []
        unfilteredKabums.forEach((kabum) => {
            if (kabum.nombre.toLowerCase().includes(filterText.toLowerCase())) {
                newKabumsList.push(kabum);
            }
        });
        setKabumList(newKabumsList);
    };
    return (
        <div>
            <div className="portada-kabum">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 form-buscar">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Buscar kabum" aria-label="Buscar kabum"
                                    aria-describedby="button-addon2" onChange={filterKabums}></input>
                                <div className="input-group-append">
                                    <button className="btn-buscar btn  btn-light" type="button" id="button-addon2"> <i
                                        className="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex">
                            <div className="p-2">
                                <h5>Mis <span className="titulo-kabums"> Kabums </span> <span className="badge color-badge">{kabumList.length}</span>
                                </h5>
                            </div>
                            <div className="ml-auto p-2">
                                <h6 className="mt-2">Filtrar por:</h6>
                            </div>
                            <div className="p-2">
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Mas recientes
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item" type="button">preguntas</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* lista de kabums */}
                <KabumList kabums={kabumList} setKabums={setKabumList} unfilteredKabums={unfilteredKabums} setUnfilteredKabums={setUnfilteredKabums} />
            </div>
            <footer>
                <div className="container">
                    <div className="row justify-content-center">
                        <h6>Kabum&reg;</h6>
                    </div>
                </div>
            </footer>
        </div>
    );
}