import React from 'react'
import { Link } from 'react-router-dom';

export const Scoreboard2=() =>{
    return(
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
    <tr className="tr-fisrt text-center tamaño-tabla" >
      <td>Mark</td>
      <td>4645</td>
    </tr>
    <tr className="text-center tamaño-tabla">
      <td className="tabla-top text-center">Thornton</td>
      <td className="tabla-top text-center">0</td>
    </tr>
  </tbody>
</table>
</div>
</div>
<Link to="/question3" className="siguiente-pregunta-scoreboard">Siguiente </Link>

</div>

</div>
        
        )
}