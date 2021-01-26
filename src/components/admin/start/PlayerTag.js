const { default: Swal } = require("sweetalert2");
const { default: socket } = require("../../socket");


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
            if (result.isConfirmed) {
                socket.emit('expulsar', player);
            }
        })
    }
    return (
        <h2 className="num-jugadores ml-2" key={player.id} id={player.id}> {player.nombre}
            <span className="quitar-jugador" onClick={borrarJugador} >
                <i className="fas fa-times-circle"></i>
            </span>
        </h2>
    );
}