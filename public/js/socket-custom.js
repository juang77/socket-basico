var socket = io();

//On Escuchar
socket.on('connect', function() {
    console.log('Conectado al Servidor.')
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje)
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor.')
});

//Emit: Enviar Informacion.
socket.emit('enviarMensaje', {
    usaurio: 'Juancho',
    mensaje: 'Hola Mundo.'
}, function(resp) {
    console.log('respuesta server: ', resp);
});