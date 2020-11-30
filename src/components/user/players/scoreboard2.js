import React from 'react'
import { Link } from 'react-router-dom';

export const Scoreboard2=() =>{
    return(
        <div>
<header class="text-center mt-4">
    <h1>Scoreboard</h1>
</header>

<div class="fondo_scoreboard">
    
    <div class="margen-table">
        <div class="container">
<table class="table">
  <thead>
  </thead>
  <tbody>
    <tr class="tr-fisrt text-center tamaño-tabla" >
      <td>Mark</td>
      <td>4645</td>
    </tr>
    <tr class="text-center tamaño-tabla">
      <td class="tabla-top text-center">Thornton</td>
      <td class="tabla-top text-center">0</td>
    </tr>
  </tbody>
</table>
</div>
</div>
<Link to="/question3" className="siguiente-pregunta">Siguiente </Link>

</div>

</div>
        
        )
}