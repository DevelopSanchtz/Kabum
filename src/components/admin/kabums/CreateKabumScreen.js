import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import Swal from 'sweetalert2'
import axios from 'axios'

let estado1 = true;
let estado2 = true;
let estado3 = true;
let estado4 = true;


export class CreateKabumScreen extends Component {


    constructor(props) {


        super(props)
        this.kabum = {
            id: 0,
            nombre: 'kabum1',
            preguntas: []
        }

        this.state = {
            pregunta: '',
            a: '',
            b: '',
            c: '',
            d: '',
            correcta: [],
            tiempo: '',
            recurso: '',
            tipo_recurso: 'imagen'
        }
    }


    imageHandler = (value) => {
        this.setState({ recurso: value});
    }
    handleChange = (e) => {
        const { value } = e.target;
        if (e.target.checked) {
            if (this.state[value] !== '') {
                if (!this.state.correcta.includes(e.target.value)) {
                    this.state.correcta.push(e.target.value);
                }
            }
        } else {
            const index = this.state.correcta.indexOf(e.target.value);
            if (index > -1) {
                this.state.correcta.splice(index, 1);
            }
        }
        console.log(this.state);
    }

    handleChangeInput = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'a':
                if (value !== '') {
                    estado1 = false;
                } else {
                    estado1 = true;
                    if (this.state.correcta.includes(name)) {
                        this.state.correcta.pop(name);
                        this.state[name] = '';
                        console.log(this.state);
                    }
                }
                break;
            case 'b':
                if (value !== '') {
                    estado2 = false;
                } else {
                    estado2 = true;
                    if (this.state.correcta.includes(name)) {
                        this.state.correcta.pop(name);
                        this.state[name] = '';
                        console.log(this.state);
                    }
                }
                break;
            case 'c':
                if (value !== '') {
                    estado3 = false;
                } else {
                    estado3 = true;
                    if (this.state.correcta.includes(name)) {
                        this.state.correcta.pop(name);
                        this.state[name] = '';
                        console.log(this.state);
                    }
                }
                break;
            case 'd':
                if (value !== '') {
                    estado4 = false;
                } else {
                    estado4 = true;
                    if (this.state.correcta.includes(name)) {
                        this.state.correcta.pop(name);
                        this.state[name] = '';
                        console.log(this.state);
                    }
                }
                break;
            default:
        }
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        if (this.state.pregunta != "" && this.state.a != "" && this.state.b != "" && this.state.c != "" && this.state.d != "" && this.state.correcta != "" && this.state.tiempo != "" && this.state.recurso != "") {
            e.preventDefault()
            this.kabum.preguntas.push(this.state);
            document.getElementById('form').reset();
            Swal.fire({
                icon: 'success',
                title: 'Pregunta añadida'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Añade preguntas o verifica que todos los campos se encuentren llenos'
            });
        }
    }

    submitInfo = async e => {
        e.preventDefault();
        try {
            if (this.kabum.preguntas.length > 0) {
                axios.post('http://localhost:4000/save-kabum', this.kabum)
                    .then( res => {
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

    render() {
        const { pregunta, a, b, c, d, tiempo, recurso } = this.state;
        return (
            <div>
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
                            <Link className="btn btn-success my-2 my-sm-0" type="submit" onClick={this.submitInfo}> Guardar</Link>
                        </form>
                    </div>
                </nav>
                {/* termina navbar */}
                <div className="container-fluid mt-3">
                    <form name="form" id="form">
                        <div className="row">
                            <div className="col-12 mb-2 text-center">
                                <Link onClick={this.handleSubmit} className="btn btn-success my-2 my-sm-0" type="submit">Agregar pregunta</Link>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <input id="form" className="form-control titulo" type="text" name="pregunta" value={pregunta} onChange={this.handleChangeInput} placeholder="¿Como se llama el Chino?"></input>
                                    </div>
                                </div>
                                <div className="row p-2 mt-5 ml-5 justify-content-center align-items-center">
                                    <div className="col-4">
                                        <label >Duración en segundos</label>
                                        <select className="selector d-flex justify-content-center text-align-center" name="tiempo" value={tiempo} onChange={this.handleChangeInput}>
                                            <option>5</option>
                                            <option>10</option>
                                            <option>15</option>
                                            <option>20</option>
                                            <option>25</option>
                                            <option>30</option>
                                        </select>
                                    </div>
                                    <div className=" col-8 imagen">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-7">
                                                <img id="form" src={recurso} width="380px" className="img-fluid" alt="Imagen de la pregunta"></img>
                                            </div>
                                            <div class="col-5 form-group">
                                                <label for="input"><strong>Url de la imagen: </strong></label>
                                                <input type="text" className="form-control" onChange={event => this.imageHandler(event.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4 p-2 mb-2 justify-content-between align-items-center botones">
                                    <div className="col-6">
                                        <div className="">
                                            <input className="form-control mb-1" disabled={estado1} type="checkbox" placeholder="Respuestas" id="check1" value="a" onChange={this.handleChange} name="correcta" ></input>
                                            <input name="a" value={a} onChange={this.handleChangeInput} className="form-control azul" for="check1" id="form"></input>
                                        </div>
                                        <div className="mt-4">
                                            <input className="form-control mb-1" disabled={estado2} type="checkbox" placeholder="Respuestas" value="b" id="check2" onChange={this.handleChange} name="correcta"></input>
                                            <input name="b" value={b} onChange={this.handleChangeInput} className="form-control rojo" for="check2" id="form"></input>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="">
                                            <input className="form-control mb-1" disabled={estado3} type="checkbox" placeholder="Respuestas" id="check3" value="c" onChange={this.handleChange} name="correcta"></input>
                                            <input name="c" value={c} onChange={this.handleChangeInput} className="form-control amarillo" for="check3" id="form"></input>
                                        </div>
                                        <div className="mt-4">
                                            <input className="form-control mb-1" disabled={estado4} type="checkbox" placeholder="Respuestas" id="check4" value="d" onChange={this.handleChange} name="correcta"></input>
                                            <input name="d" value={d} onChange={this.handleChangeInput} className="form-control cielo" id="form" ></input>
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

}
export default CreateKabumScreen;