import React, { useEffect, useState, Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../assets/images/logo-nuevo-kabum.png'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import { render } from 'react-dom';
import io from 'socket.io-client';


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

    
    imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if (reader.readyState === 2) {
            this.setState({recurso: reader.result});
        }
    }
    reader.readAsDataURL(e.target.files[0])
    
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        if(e.target.checked ){
            if(this.state[value] != '') {
                if(!this.state.correcta.includes(e.target.value)){

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

        switch(name) {
            case 'a':
                if(value != '') {
                    estado1 = false;
                } else {
                    estado1 = true;
                    if(this.state.correcta.includes(name)){
                        this.state.correcta.pop(name);
                        this.state[name] = '';
                        console.log(this.state);
                    }
                }
            break;
            case 'b':
                if(value != '') {
                    estado2 = false;
                } else {
                    estado2 = true;
                    if(this.state.correcta.includes(name)){
                        this.state.correcta.pop(name);
                        this.state[name] = '';
                        console.log(this.state);
                    }
                }
            break;
            case 'c':
                if(value != '') {
                    estado3 = false;
                } else {
                    estado3 = true;
                    if(this.state.correcta.includes(name)){
                        this.state.correcta.pop(name);
                        this.state[name] = '';
                        console.log(this.state);
                    }
                }
            break;
            case 'd':
                if(value != '') {
                    estado4 = false;
                } else {
                    estado4 = true;
                    if(this.state.correcta.includes(name)){
                        this.state.correcta.pop(name);
                        this.state[name] = '';
                        console.log(this.state);
                    }
                }
            break;

        }
        this.setState({ [name]: value }) 
    }
      
    
    handleSubmit = (e) => {

        if(this.state.pregunta != "" && this.state.a != "" && this.state.b != "" && this.state.c != "" &&  this.state.d != "" && this.state.correcta != "" &&  this.state.tiempo != "" && this.state.recurso != "" ) {
        e.preventDefault()
        
        this.kabum.preguntas.push(this.state);

        document.getElementById('form').reset();
        
        console.log(this.state);
        console.log(this.kabum);
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
            if(this.kabum.preguntas != "") {
               /* let config = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: this.kabum)
                }*/
                let res = await fetch('http://localhost:4000/save-kabum', this.kabum);
                let json = await res.json();
                console.log(json);
                
                } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Añade preguntas'
                });
            }
        } catch(error) {
            console.log(error);
        }
    }


    render() {
        const {pregunta, a, b, c, d, tiempo, recurso} = this.state;  
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


                <a className="navbar-brand">
                </a>
                
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Link className="btn btn-cancelar my-2 my-sm-0 mr-2" type="submit"> Cancelar </Link>
                        <Link className="btn btn-success my-2 my-sm-0" type="submit" onClick={this.submitInfo}> Guardar</Link>
                    </form>
                </div>
            </nav> 
            {/* termina navbar */}

            <div className="container-fluid mt-3 padre">
            <form name="form" id="form">
                <div className="row">
                    
                <div className="col-lg-3 col-md-6 col-sm-12 columna">
                    <div className="d-flex justify-content-between ml-5 boton">
                    <Link onClick={this.handleSubmit} className="btn btn-success my-2 my-sm-0"  type="submit">Agregar pregunta</Link>
                    </div>
                    
                </div>
                
                <div className="col-9 columna2">
                
                    <div className="row ">
                        <div className="col-12">
                        <input id="form" className="form-control titulo" type="text" name="pregunta" value={pregunta} onChange={this.handleChangeInput}  placeholder="¿Como se llama el Chino?"></input>
                        </div>
                    </div>
                    <div className="row titulo2 mt-5 ml-5 d-flex justify-content-center align-items-center">
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
                            <div className="d-flex justify-content-center im">
                            <img id="form" src={recurso} width="300px" height="205px" className="mt-3" alt="Imagen de la pregunta"></img>
                            </div>
                            <div className="logos d-flex justify-content-center">
                            <label for="input"><span className="ml-2"><i className="fas fa-edit edit"></i></span></label>
                            <input id="input" name="recurso" type="file"  accept="image/*" onChange={this.imageHandler} className="d-none"/>  
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 ml-5 d-flex justify-content-between align-items-center botones">
                        <div className="col-6 c1">
                            <div className="btnPress">
                            <input  className="form-check-label" disabled={estado1} type="checkbox"  placeholder="Respuestas" id="check1" value="a" onChange={this.handleChange} name="correcta" ></input>
                            <input name="a" value={a} onChange={this.handleChangeInput} className="form-control azul" for="check1" id="form"></input>
                            </div>
                            <div className="mt-4 btnPress">
                            <input  className="form-check-label " disabled={estado2}  type="checkbox" placeholder="Respuestas" value="b" id="check2" onChange={this.handleChange} name="correcta"></input>
                            <input name="b" value={b} onChange={this.handleChangeInput} className="form-control rojo" for="check2" id="form"></input>
                            </div>
                            
                        </div>
                        <div NameName="col-6 c2">
                            <div NameName="btnPress">
                            <input  className="form-check-label " disabled={estado3} type="checkbox" placeholder="Respuestas" id="check3" value="c" onChange={this.handleChange}name="correcta"></input>
                            <input name="c" value={c} onChange={this.handleChangeInput} className="form-control amarillo" for="check3" id="form"></input>
                            </div>
                            <div className="mt-4 btnPress">
                            <input  className="form-control " disabled={estado4} type="checkbox" placeholder="Respuestas" id="check4" value="d" onChange={this.handleChange} name="correcta"></input>
                            <input name="d" value={d} onChange={this.handleChangeInput} className="form-control cielo"id="form" ></input>
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