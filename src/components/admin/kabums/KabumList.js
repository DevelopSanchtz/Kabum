import React, { useEffect } from 'react'

import Swal from 'sweetalert2';

import { KabumCard } from './KabumCard';

export const KabumList = (props) => {

  const { kabums, setKabums, unfilteredKabums, setUnfilteredKabums } = props;
  useEffect(() => {
    setKabums(kabums);
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
      // Llamada a la API para eliminar Kabums
      if (result.isConfirmed) {
        for (let i = 0; i < kabums.length; i++) {
          if (kabums[i].id === id) {
            kabums.splice(i, 1);
            break;
          }
        }
        for (let i = 0; i < unfilteredKabums.length; i++) {
          if (unfilteredKabums[i].id === id) {
            unfilteredKabums.splice(i, 1);
            break;
          }
        }
        setKabums(kabums);
        setUnfilteredKabums(unfilteredKabums);
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "El Kabum se ha eliminado con éxito",
          confirmButtonText: "Aceptar",
          timer: "3000"
        });
      }
    });
  }
  return (
    <div className="container">
      {kabums.map((kabum) => {
        return <KabumCard key={kabum.id} kabum={kabum} borrarKabum={borrarKabum} />;
      }
      )}
    </div>
  )
}
