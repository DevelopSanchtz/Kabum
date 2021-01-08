import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import socket from '../../socket';
import Swal from 'sweetalert2'

export const Scoreboard = () => {
  const history = useHistory();
  let pregunta = sessionStorage.getItem('question');
  pregunta = parseInt(pregunta);
  let estadisticas = sessionStorage.getItem('estadisticas');
  estadisticas = JSON.parse(estadisticas);
  let kabum = sessionStorage.getItem('kabum');
  kabum = JSON.parse(kabum);
  const changeQuestion = () => {
    sessionStorage.setItem('question', pregunta + 1);
    let state = {
      pregunta: pregunta + 1
    };
    history.replace('/question', state);
  }
  let players = estadisticas.jugadores;
  let n = players.length;
  for (let i = 0; i < n - 1; i++)
    for (let j = 0; j < n - i - 1; j++)
      if (players[j].puntos < players[j + 1].puntos) {
        let temp = players[j];
        players[j] = players[j + 1];
        players[j + 1] = temp;
      }
  const terminarJuego = () => {
    Swal.fire({
      title: "Terminar",
      icon: "warning",
      text: "¿Estás seguro que desea trminar el juego?",
      confirmButtonText: "Terminar",
      showCancelButton: true,
      cancelButtonText: "Seguir jugando"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Juego terminado",
          icon: "success",
        }).then((resultado) => {
          socket.emit('terminar', null);
          history.replace("/kabums");
        })
      }
    });
  };
  console.log(pregunta < kabum.preguntas.length, pregunta, kabum.preguntas.length);
  return (
    <div>
      <header className="text-center mt-4">
        <h1>Scoreboard</h1>
      </header>
      <div className="fondo_scoreboard">
        <div className="margen-table">
          <div className="container">
            <table className="table">
              <thead>
              </thead>
              <tbody>
                {
                  players.map((jugador, index) => {
                    if (index == 0) {
                      return (
                        <tr className="tr-fisrt text-center tamaño-tabla" >
                          <td>{jugador.nombre}</td>
                          <td>{jugador.puntos}</td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr className="text-center tamaño-tabla">
                          <td className="tabla-top text-center">{jugador.nombre}</td>
                          <td className="tabla-top text-center">{jugador.puntos}</td>
                        </tr>
                      );
                    }
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        {(pregunta + 1) < kabum.preguntas.length ? <Link onClick={changeQuestion} className="siguiente-pregunta-scoreboard">Siguiente </Link> : <Link onClick={() => terminarJuego()} className="siguiente-pregunta-scoreboard">Terminar </Link>}
      </div>
    </div>
  )
}