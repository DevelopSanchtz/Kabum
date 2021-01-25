import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo-nuevo-kabum.png'

export const KabumCard = (props) => {
  let pin1 = Math.floor(Math.random() * 10);
  let pin2 = Math.floor(Math.random() * 10);
  let pin3 = Math.floor(Math.random() * 10);
  let pin4 = Math.floor(Math.random() * 10);
  let pin5 = Math.floor(Math.random() * 10);
  let pin6 = Math.floor(Math.random() * 10);
  let pin = pin1 + "" + pin2 + "" + pin3 + "" + pin4 + "" + pin5 + "" + pin6;
  const { kabum, borrarKabum } = props;
  const { id, nombre, preguntas } = kabum;
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="">
                  <img className="imagen-pregunta" src={logo} alt=""></img>
                </div>
              </div>
              <div className="col-6">
                <h2 className="titulo-kabums">{nombre}</h2>
                <h5>{preguntas.length} preguntas</h5>
                {/* <p>Creado hace <span> 2 dias </span> </p> */}
              </div>
              <div className="col-3">
                <div className="row justify-content-end">
                  <button onClick={() => borrarKabum(id)} className="btn btn-light my-2 my-sm-0 ml-2" type="submit"> <i className="fas fa-trash-alt"></i> </button>
                </div>
                {/* <div className="row justify-content-end"> <p> <span>3 </span> Jugadores</p> </div> */}
                <div className="row justify-content-end">
                  <Link to="/create" className="btn btn-outline-primary"> Editar </Link>
                  <Link to={{
                    pathname: "/start",
                    props: {
                      pin: pin,
                      kabum: kabum
                    }
                  }} className="btn btn-success ml-2"> Jugar </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
