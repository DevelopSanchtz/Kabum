import io from "socket.io-client";

const socket = io("https://kabum-server.herokuapp.com");

export default socket;