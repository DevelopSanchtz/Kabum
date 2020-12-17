import React from 'react'
import { Link } from 'react-router-dom';

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
  console.log(kabum);
  return (
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
                <h2 class="titulo-kabums">{nombre}</h2>
                <h5>{preguntas.length} preguntas</h5>
                {/* <p>Creado hace <span> 2 dias </span> </p> */}
              </div>
              <div class="col-3">
                <div class="row justify-content-end">
                  <button class="btn btn-light my-2 my-sm-0 ml-2" type="submit"> <i class="far fa-heart"></i> </button>
                  <button onClick={borrarKabum(kabum.id)} class="btn btn-light my-2 my-sm-0 ml-2" type="submit"> <i class="fas fa-trash-alt"></i> </button>
                </div>
                {/* <div class="row justify-content-end"> <p> <span>3 </span> Jugadores</p> </div> */}
                <div class="row justify-content-end">
                  <Link to="/create" class="btn btn-outline-primary"> Editar </Link>
                  <Link to={{
                    pathname: "/start",
                    props: {
                      pin: pin
                    }
                  }} class="btn btn-success ml-2"> Jugar </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
