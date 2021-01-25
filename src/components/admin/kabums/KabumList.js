import React, { useEffect } from 'react'

import Swal from 'sweetalert2';

import { KabumCard } from './KabumCard';

import axios from 'axios'

export const KabumList = (props) => {
  const { kabums, setKabums, unfilteredKabums, setUnfilteredKabums } = props;
  useEffect(() => {
    setKabums(kabums);
    setUnfilteredKabums(unfilteredKabums);
  }, []);
  const borrarKabum = (id) => {
    Swal.fire({
      title: "Eliminar",
      icon: "warning",
      text: "¿Estás seguro que desea eliminar el Kabum?",
      confirmButtonText: "Eliminar",
      showCancelButton: true,
      cancelButtonText: "Cancelar"
    }).then((result) => {
      // TODO: Llamada a la API para eliminar Kabums

      if (result.isConfirmed) {
        const body = new FormData();
        body.append('id', id);
        fetch('http://localhost:4000/delete-kabum', {
          method: "DELETE",
          body: body,
        })
          .then(
            res => {
              return res.text();
            })
          .then(
            dara => {
              //const datos = JSON.parse(dara.data);
              let newKabumList = [];
              for (let i = 0; i < kabums.length; i++) {
                if (kabums[i].id === id) {
                  continue;
                }
                newKabumList.push(kabums[i]);
              }
              setKabums(newKabumList);
              newKabumList = [];
              for (let i = 0; i < unfilteredKabums.length; i++) {
                if (unfilteredKabums[i].id === id) {
                  continue;
                }
                newKabumList.push(unfilteredKabums[i]);
              }
              setUnfilteredKabums(newKabumList);
              Swal.fire({
                icon: "success",
                title: "Eliminado",
                text: "El Kabum se ha eliminado con éxito",
                confirmButtonText: "Aceptar",
                timer: "3000"
              });
            })
          .catch(
            err => {
              Swal.fire({
                icon: 'error',
                text: 'No se pudo eliminar'
              })
            }
          )
      }
    });
  }
  return (
    <div className="container">
      {kabums.map((kabum) => <KabumCard key={kabum.id} kabum={kabum} borrarKabum={borrarKabum} />)}
    </div>
  )
}
