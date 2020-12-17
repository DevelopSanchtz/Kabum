import React from 'react'

import Swal from 'sweetalert2'
import { KabumCard } from './KabumCard';

export const KabumList = (props) => {
  const { kabums } = props;
  const borrarKabum = (id) => {
    Swal.fire({
      title: "Eliminar",
      icon: "warning",
      text: "¿Estás seguro que desea eliminar el Kabum?",
      confirmButtonText: "Eliminar",
      showCancelButton: true,
      cancelButtonText: "Cancelar"
    }).then((result) => {
      // Llamada a la API para eliminar Kabums
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "El Kabum se ha eliminado con éxito",
          confirmButtonText: "Aceptar",
          timer: "3000"
        })
      }
    })
  }
  return (
    <div class="container">
      {kabums.map((kabum) =>
        <KabumCard key={kabum.id} kabum={kabum} borrarKabum={borrarKabum} />
      )}
    </div>
  )
}
