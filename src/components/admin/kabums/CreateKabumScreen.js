import React, { Component, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import Swal from 'sweetalert2'
import axios from 'axios'

let estado1 = true;
let estado2 = true;
let estado3 = true;
let estado4 = true;
let contador = 0;

let buttonDisabled = false;
let buttonDisabled2 = false;


export const CreateKabumScreen = (props) => {

    if (!sessionStorage.getItem('sesion-admin')) {
        props.history.replace('/loginAdmin');
    }


    let kabum = {
        id: 0,
        nombre: 'kabum1',
        preguntas: []
    }

    const [state, setState] = useState(
        {
            pregunta: '',
            a: '',
            b: '',
            c: '',
            d: '',
            correcta: [],
            tiempo: '',
            recurso: '',
            tipo_recurso: 'imagen'

        });


    /*const imageHandler = (value) => {
        setState({ ...state, recurso: value });
    }*/

    const handleChange = (e) => {
        const { value } = e.target;
        if (e.target.checked) {
            if (state[value] !== '') {
                if (!state.correcta.includes(e.target.value)) {
                    state.correcta.push(e.target.value);
                }
            }
        } else {
            const index = state.correcta.indexOf(e.target.value);
            if (index > -1) {
                state.correcta.splice(index, 1);
            }
        }
        console.log(state);
    }

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'a':
                if (value !== '') {
                    estado1 = false;
                } else {
                    estado1 = true;
                    if (state.correcta.includes(name)) {
                        state.correcta.pop(name);
                        state[name] = '';
                        console.log(state);
                    }
                }
                break;
            case 'b':
                if (value !== '') {
                    estado2 = false;
                } else {
                    estado2 = true;
                    if (state.correcta.includes(name)) {
                        state.correcta.pop(name);
                        state[name] = '';
                        console.log(state);
                    }
                }
                break;
            case 'c':
                if (value !== '') {
                    estado3 = false;
                } else {
                    estado3 = true;
                    if (state.correcta.includes(name)) {
                        state.correcta.pop(name);
                        state[name] = '';
                        console.log(state);
                    }
                }
                break;
            case 'd':
                if (value !== '') {
                    estado4 = false;
                } else {
                    estado4 = true;
                    if (state.correcta.includes(name)) {
                        state.correcta.pop(name);
                        state[name] = '';
                        console.log(state);
                    }
                }
                break;
            default:
        }
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (e) => {
        if (state.pregunta != "" && state.a != "" && state.b != "" && state.c != "" && state.d != "" && state.correcta != "" && state.tiempo != "" && state.recurso != "") {
            e.preventDefault()
            kabum.preguntas.push(state);
            document.getElementById('form').reset();
            Swal.fire({
                icon: 'success',
                title: 'Pregunta añadida'
            });
            console.log(kabum);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Añade preguntas o verifica que todos los campos se encuentren llenos'
            });
        }
    }

    const submitInfo = async e => {
        e.preventDefault();
        try {
            if (kabum.preguntas.length > 0) {
                axios.post('https://kabum-server.herokuapp.com/save-kabum', kabum)
                    .then(res => {
                        console.log(res.data);
                    })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Añade preguntas'
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const callEditKabum = async e => {
        let kabum2 = {
            id: 3,
            nombre: 'pruebasBackend',
            preguntas:
                [
                    {
                        "pregunta": "¿Qué desaolla303dor hizo esta pruebaX48vez?",
                        "a": "ArmandoDev",
                        "b": "MarcoDev",
                        "c": "WeroDev",
                        "d": "KtDev",
                        "correcta": "a",
                        "tiempo": "10",
                        "recurso": "www.imagen.com",
                        "tipo_recurso": "img"
                    }
                ]
        }
        e.preventDefault();
        try {
            axios.post('http://localhost:4000/edit-kabum', kabum)
                .then(
                    res => {
                        console.log(res.data);
                        Swal.fire({
                            icon: 'success',
                            text: 'exito guardando'
                        });
                    },
                    err => {
                        console.log(err);
                    })
        } catch (error) {
            console.log(error);
        }
    }

    const navigateQuestions = (e) => {
        console.log(kabum.preguntas.length);
        console.log(e);
        if (e === 'right') {
            contador += 1;
            kabum.preguntas.indexOf(contador);
            console.log(kabum.preguntas);
            console.log(contador);
        } else {
            contador -= 1;
        }


    }

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setState({ recurso: reader.result });
            }
        }
        reader.readAsDataURL(e.target.files[0])
        console.log(e.target.files[0]);

    }

    const { pregunta, a, b, c, d, tiempo, recurso } = state;

    return (
        <div>

            {/* Swal para abrir edicion*/}
            <div hidden={true}>
                <swal class="swal-wide " id="swalid">
                    <table class="table table-lg table-hover">
                        <thead class="background-table-projects">
                            <tr>
                                <th>Nombre</th>
                                <th>Calificación</th>
                            </tr>
                        </thead>
                        <tr class="table">
                            <td>
                                <div class="">
                                    hola
                                    </div>
                            </td>
                        </tr>
                    </table>
                </swal>
            </div>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg fondo-navbar">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="80px" height="30px" alt=""></img>
                </a>
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/kabums">
                    Kabums
                    </NavLink>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Link className="btn btn-cancelar my-2 my-sm-0 mr-2" type="submit"> Cancelar </Link>
                        <Link className="btn btn-success my-2 my-sm-0" type="submit" onClick={submitInfo}> Guardar</Link>
                    </form>
                </div>
            </nav>
            {/* termina navbar */}
            <div className="container-fluid mt-3">
                <form name="form" id="form">
                    <div className="row">
                        <div className="col-12 mb-2 text-center d-flex justify-content-between">
                            <div >
                                <button className="btn btn-primary mr-2" name="left" disabled={buttonDisabled} onClick={event => callEditKabum(event)} ><span><i className="fas fa-arrow-left flecha"></i></span></button>
                                <button className="btn btn-primary mr-5" name='right' disabled={buttonDisabled2} onClick={event => navigateQuestions(event.target.name)}><span><i className="fas fa-arrow-right flecha"></i></span></button>
                                <Link onClick={handleSubmit} className="btn btn-success my-2 my-sm-0" type="submit">Agregar pregunta</Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <input id="form" className="form-control titulo" type="text" name="pregunta" value={pregunta} onChange={handleChangeInput} placeholder="¿Como se llama el Chino?"></input>
                                </div>
                            </div>
                            <div className="row p-2 mt-5 ml-5 justify-content-center align-items-center">
                                <div className="col-4">
                                    <label >Duración en segundos</label>
                                    <select className="selector d-flex justify-content-center text-align-center" name="tiempo" value={tiempo} onChange={handleChangeInput}>
                                        <option>5</option>
                                        <option>10</option>
                                        <option>15</option>
                                        <option>20</option>
                                        <option>25</option>
                                        <option>30</option>
                                    </select>
                                </div>
                                <div className=" col-8 imagen">
                                    <div className="d-flex justify-content-center im">
                                        <img id="form" src={recurso} width="300px" height="205px" className="mt-3" alt="Imagen de la pregunta" />
                                    </div>
                                    <div className="logos d-flex justify-content-center">
                                        <label for="input"><span className="ml-2"><i className="fas fa-edit edit"></i></span></label>
                                        <input id="input" name="recurso" type="file" accept="image/*" onChange={imageHandler} className="d-none" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4 p-2 mb-2 justify-content-between align-items-center botones">
                                <div className="col-6">
                                    <div className="">
                                        <input className="form-control mb-1" disabled={estado1} type="checkbox" placeholder="Respuestas" id="check1" value="a" onChange={handleChange} name="correcta" ></input>
                                        <input name="a" value={a} onChange={handleChangeInput} className="form-control azul" for="check1" id="form"></input>
                                    </div>
                                    <div className="mt-4">
                                        <input className="form-control mb-1" disabled={estado2} type="checkbox" placeholder="Respuestas" value="b" id="check2" onChange={handleChange} name="correcta"></input>
                                        <input name="b" value={b} onChange={handleChangeInput} className="form-control rojo" for="check2" id="form"></input>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="">
                                        <input className="form-control mb-1" disabled={estado3} type="checkbox" placeholder="Respuestas" id="check3" value="c" onChange={handleChange} name="correcta"></input>
                                        <input name="c" value={c} onChange={handleChangeInput} className="form-control amarillo" for="check3" id="form"></input>
                                    </div>
                                    <div className="mt-4">
                                        <input className="form-control mb-1" disabled={estado4} type="checkbox" placeholder="Respuestas" id="check4" value="d" onChange={handleChange} name="correcta"></input>
                                        <input name="d" value={d} onChange={handleChangeInput} className="form-control cielo" id="form" ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}