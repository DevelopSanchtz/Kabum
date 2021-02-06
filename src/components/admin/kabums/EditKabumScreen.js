import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import Swal from 'sweetalert2'
import axios from 'axios'

import logo from './../../../assets/images/logo-nuevo-kabum.png'

export const EditKabumScreen = (props) => {
  const history = useHistory();
  //verificacion de login
  if (!localStorage.getItem('sesion-admin')) {
    props.history.push('/loginAdmin');
  }
  //constantes que almacenan las preguntas segun el estado detectado en el front, una vez almacenada toda la info, se genera el json
  const id = sessionStorage.getItem('kabum-id');
  const titulo = sessionStorage.getItem('kabum-name');
  let preguntas = sessionStorage.getItem('kabum-preguntas');
  preguntas = JSON.parse(preguntas);

  const { imageArray, setImageArray } = useState([]);

  let preguntaActual = sessionStorage.getItem('kabum-preguntaActual');
  preguntaActual = parseInt(preguntaActual);

  const [estado1, setEstado1] = useState(preguntaActual < preguntas.length ? false : true);
  const [estado2, setEstado2] = useState(preguntaActual < preguntas.length ? false : true);
  const [estado3, setEstado3] = useState(preguntaActual < preguntas.length ? false : true);
  const [estado4, setEstado4] = useState(preguntaActual < preguntas.length ? false : true);
  const [kabum, setKabum] = useState({
    id: id,
    nombre: titulo,
    preguntas: preguntas,
    preguntaActual: preguntaActual
  });
  //state que almacena cada parte que corresponde a la pregunta general
  const
    [state, setState] = useState(
      {
        pregunta: '',
        a: '',
        b: '',
        c: '',
        d: '',
        correcta: '',
        tiempo: '5',
        recurso: '',
        tipo_recurso: 'imagen'
      });

  //  metodo que almacena la pregunta correcta, una vez marcado el input check
  // es llamada cuando se marca el check de la pregunta
  const handleChange = (e) => {
    if (e.target.checked) {
      if (state[e.target.value] !== '') {
        setState({ ...state, correcta: e.target.value });
      }
    } else {
      // const index = state.correcta.indexOf(e.target.value);
      // if (index > -1) {
      //     state.correcta.splice(index, 1);
      // }
    }
  };
  const handleChangePregunta = (event) => {
    setState({ ...state, pregunta: event.target.value });
  }
  //guarda la respuesta correcta en el state
  //utiliza los estados de las preguntas para conocer cual es la correcta
  //y debe ser almacenada, puede ser una respuesta correcta o mas 
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'a':
        if (value !== '') {
          setEstado1(false);
        } else {
          setEstado1(true);
          if (state.correcta === (name)) {
            setState({ ...state, correcta: '' });
            state[name] = '';
          }
        }
        break;
      case 'b':
        if (value !== '') {
          setEstado2(false);
        } else {
          setEstado2(true);
          if (state.correcta === (name)) {
            setState({ ...state, correcta: '' });
            state[name] = '';
          }
        }
        break;
      case 'c':
        if (value !== '') {
          setEstado3(false);
        } else {
          setEstado3(true);
          if (state.correcta === (name)) {
            setState({ ...state, correcta: '' });
            state[name] = '';
          }
        }
        break;
      case 'd':
        if (value !== '') {
          setEstado4(false);
        } else {
          setEstado4(true);
          if (state.correcta === (name)) {
            setState({ ...state, correcta: '' });
            state[name] = '';
          }
        }
        break;
      default:
    }
    setState({ ...state, [name]: value })
  };

  // almacena los valores que conforman a toda la pregunta
  // en los constantes declarados a partir de la linea 16
  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.pregunta !== "" && state.a !== "" && state.b !== "" && state.c !== "" && state.d !== "" && state.correcta !== "" && state.tiempo !== "") {
      if (preguntaActual < preguntas.length) {
        document.getElementById('form').reset();
        Swal.fire({
          icon: 'success',
          title: 'Pregunta actualizada'
        });
        preguntas[preguntaActual] = (state);
        sessionStorage.setItem('kabum-preguntas', JSON.stringify(preguntas));
        setKabum({ ...kabum, preguntas: preguntas });
      } else {
        document.getElementById('form').reset();
        Swal.fire({
          icon: 'success',
          title: 'Pregunta añadida'
        });
        preguntas.push(state);
        sessionStorage.setItem('kabum-preguntas', JSON.stringify(preguntas));
        sessionStorage.setItem('kabum-preguntaActual', (preguntaActual + 1));
        setKabum({ ...kabum, preguntas: preguntas, preguntaActual: preguntaActual + 1 });
        setState({
          pregunta: '',
          a: '',
          b: '',
          c: '',
          d: '',
          correcta: '',
          tiempo: '5',
          recurso: '',
          tipo_recurso: ''
        });
      }
    } else {
      console.log(state);
      Swal.fire({
        icon: 'error',
        title: 'Añade preguntas o verifica que todos los campos se encuentren llenos'
      });
    }
  };
  //metodo que manda el json con todas las preguntas al servidor
  // el json formado por todas las preguntas se llama kabum
  const submitInfo = async e => {
    e.preventDefault();
    try {
      if (kabum.preguntas.length > 0) {
        console.log(kabum);
        // axios.post('https://kabum-server.herokuapp.com/save-kabum', kabum)
        axios.post('http://localhost:4000/edit-kabum', kabum)
          .then(response => {
            Swal.fire({
              icon: 'success',
              title: 'Exito',
              text: response.data
            });
          })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Añade preguntas'
        });
      }
    } catch (error) {
      console.error(error);
    }
  };


  //funcion para navegar entre las preguntas creadas en el kabum
  // si da clic a la derecha aumenta el contador de pregunta actual
  // caso contrario disminuye
  const navigateQuestions = (event) => {
    const e = event.target.name;
    if (e === 'right') {
      sessionStorage.setItem('kabum-preguntaActual', preguntaActual + 1);
      setKabum({ ...kabum, preguntaActual: preguntaActual + 1 });
    } else if (e === 'left') {
      sessionStorage.setItem('kabum-preguntaActual', preguntaActual - 1);
      setKabum({ ...kabum, preguntaActual: preguntaActual - 1 });
    }
    console.log(kabum.preguntas[preguntaActual], kabum.preguntas.length, preguntaActual);
    if (preguntaActual < kabum.preguntas.length) {
      setState(kabum.preguntas[preguntaActual]);
    } else {
      ({ pregunta, a, b, c, d, tiempo, recurso } = state);
    }
  };
  //funcion para mostrar la imagen en el img y guardarla en su constante
  // es llamado cuando se presiona el icono de edicion, para guardar el archivo en el json de la pregunta
  const imageHandler = (e) => {
    setState({ ...state, recurso: e.target.value });
    /*let imgPost = new FormData();
    imgPost.append(`pregunta`, preguntaActual);
    imgPost.append(`recurso${preguntaActual}`, e.target.files[0]);

    fetch('http://localhost:4000/save-image', {
      method: 'POST',
      body: imgPost
    }).then(res => res.json())
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error:', error));
    //const reader = new FileReader();
    //reader.onload = () => {
    //    if (reader.readyState === 2) {
    //        setImageArray([...imageArray, reader.result])
    //    }
    //}
    //reader.readAsDataURL(e.target.files[0]);
    //console.log(imageArray);*/
  };

  let { pregunta, a, b, c, d, tiempo, recurso } = state;

  //funcion para cancelar la creacion de las preguntas del kabum actual
  const cancelCreation = (event) => {
    Swal.fire({
      title: "Cancelar Kabum",
      icon: "warning",
      text: "¿Estás seguro?",
      confirmButtonText: "Cancelar",
      showCancelButton: true,
      cancelButtonText: "Atrás"
    }).then((result) => {
      if (result.isConfirmed) {
        history.push('/kabums');
      }
    })
  };
  const doNothing = (event) => {
    event.preventDefault();
  }
  const handleChangeTiempo = (event) => {
    setState({ ...state, tiempo: event.target.value });
  }
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fondo-navbar">
        <span className="navbar-brand" href="#">
          <img src={logo} width="80px" height="30px" alt=""></img>
        </span>
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
            <button className="btn btn-cancelar my-2 my-sm-0 mr-2" type="button" onClick={cancelCreation} > Cancelar </button>
            <button className="btn btn-success my-2 my-sm-0" type="button" onClick={submitInfo}> Guardar</button>
          </form>
        </div>
      </nav>
      {/* termina navbar */}
      <div className="container-fluid mt-3">
        <form name="form" id="form" onSubmit={doNothing}>
          <div className="row">
            <div className="col-12 mb-2 text-center d-flex justify-content-between">
              <div>
                {preguntaActual > 0
                  ? <button type="button" className="btn btn-primary mr-2" name="left" onClick={navigateQuestions} ><span><i className="fas fa-arrow-left flecha"></i></span></button>
                  : <></>
                }
                {preguntaActual < preguntas.length
                  ? <button type="button" className="btn btn-primary mr-5" name='right' onClick={navigateQuestions}><span><i className="fas fa-arrow-right flecha"></i></span></button>
                  : <></>
                }
                <button type="button" onClick={handleSubmit} className="btn btn-success my-2 my-sm-0" type="submit">Agregar pregunta</button>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <input id="form" className="form-control titulo" type="text" name="pregunta" value={pregunta} onChange={handleChangePregunta} placeholder="¿Como se llama el Chino?"></input>
                </div>
              </div>
              {/* input de duracion de pregunta e img para vista previa de imagen */}
              <div className="row p-2 mt-5 ml-5 justify-content-center align-items-center">
                <div className="col-4">
                  <label >Duración en segundos</label>
                  <select className="selector d-flex justify-content-center text-align-center" name="tiempo" value={tiempo} onChange={handleChangeTiempo}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                    <option>30</option>
                  </select>
                </div>
                <div className=" col-8 imagen">
                  <div className="row h-100 align-items-center">
                    <div className="col-6 h-100">
                      <img id="form" src={recurso} width="300px" height="205px" className="mt-3" alt="Imagen de la pregunta" />
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label for="input">Recurso</label>
                        <input className="form-control" id="input" name="recurso" type="text" value={recurso} onChange={imageHandler} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* inputs para insertar pregunta y marcar la corracta */}
              <div className="row mt-4 p-2 mb-2 justify-content-between align-items-center botones">
                <div className="col-6">
                  <div className="">
                    <input className="form-control mb-1" disabled={estado1} type="checkbox" placeholder="Respuestas" id="check1" value="a" onChange={handleChange} name="correcta"></input>
                    <input name="a" value={a} onChange={handleChangeInput} className="form-control azul" htmlFor="check1" id="form"></input>
                  </div>
                  <div className="mt-4">
                    <input className="form-control mb-1" disabled={estado2} type="checkbox" placeholder="Respuestas" value="b" id="check2" onChange={handleChange} name="correcta"></input>
                    <input name="b" value={b} onChange={handleChangeInput} className="form-control rojo" htmlFor="check2" id="form"></input>
                  </div>
                </div>
                <div className="col-6">
                  <div className="">
                    <input className="form-control mb-1" disabled={estado3} type="checkbox" placeholder="Respuestas" id="check3" value="c" onChange={handleChange} name="correcta"></input>
                    <input name="c" value={c} onChange={handleChangeInput} className="form-control amarillo" htmlFor="check3" id="form"></input>
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
    </>
  );
}