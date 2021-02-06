import React, { useEffect } from 'react'

import Swal from 'sweetalert2';

import { KabumCard } from './KabumCard';


export const KabumList = (props) => {
  const { kabums, setKabums, unfilteredKabums, setUnfilteredKabums } = props;
  useEffect(() => {
    setKabums(kabums);
    setUnfilteredKabums(unfilteredKabums);
  }, []);
  //sirve para borrar los kabums mientras arroja modals en pantalla
  //si selecciona botones de confirmar hace llamada a la api para borrar los kabums
  const borrarKabum = (id) => {
    Swal.fire({
      title: "Eliminar",
      icon: "warning",
      text: "¿Estás seguro que desea eliminar el Kabum?",
      confirmButtonText: "Eliminar",
      showCancelButton: true,
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        const body = new FormData();
        body.append('id', id);
        //llamada a la api
        // fetch('http://localhost:4000/delete-kabum', {
        fetch('https://kabum-server.herokuapp.com/delete-kabum', {
          method: "DELETE",
          body: body,
        })
          .then(
            res => {
              return res.text();
            })
          .then(
            _ => {
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
            error => {
              console.error(error);
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
