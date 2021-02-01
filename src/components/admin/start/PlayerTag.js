const { default: Swal } = require("sweetalert2");
const { default: socket } = require("../../socket");


//Al dar click en borrar envia el id del jugador seleccionado
export const PlayerTag = (props) => {
    const player = props.data;
    const borrarJugador = () => {
        Swal.fire({
            title: "Eliminar",
            icon: "warning",
            text: "¿Estás seguro que desea eliminar al jugador?",
            confirmButtonText: "Eliminar",
            showCancelButton: true,
            cancelButtonText: "Cancelar"
        }).then((result) => {
        //Si escoge eliminar, emite el metodo para expulsar el jugador seleccionado
            if (result.isConfirmed) {
                socket.emit('expulsar', player);
            }
        })
    }
    //Muestra etiquetas con los nombres de los jugadores que van ingresando y muestra un boton para borrar jugador.
    return (
        <h2 className="num-jugadores ml-2" key={player.id} id={player.id}> {player.nombre}
            <span className="quitar-jugador" onClick={borrarJugador} >
                <i className="fas fa-times-circle"></i>
            </span>
        </h2>
    );
}