const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado.');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion.'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado.');
    });

    //Escuchar al cliente.
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usaurio) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!!'
        //     })
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!'
        //     })
        // }

    });

});