const { io } = require('../server');

io.on('connection', (client) => {
    console.log("User Connect");

    client.emit('enviarMensaje', {
        user: 'Admin',
        message: 'Conectado en el servidor'
    })

    client.on('disconnect', () => {
        console.log('User unconnect');
    })

    //Escuchar lo que envian desde el navegador
    client.on('enviarMensaje', (message, callback) => {
        console.log(message);

        client.broadcast.emit('enviarMensaje', message);

        /*
        if (message.name) {
            callback({
                resp: `Tu nombre ingresado es: ${message.name}`
            });
        } else {
            callback({
                resp: 'No me enviaste tu nombre!'
            });
        }
        */
    })
})
