
var socket = io();

//ON : para escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor por Socket')
})

socket.on('disconnect', function () {
    console.log("Se perdio la conexion con el servidor")
})

//EMIT : Enviar Informacion
socket.emit('enviarMensaje', {
    name: 'David',
    mensaje: 'Te saludo por socket'
}, function (resp) {
    console.log('Respuesta del Servidor: ', resp)
})

//
socket.on('enviarMensaje', function (message) {
    console.log('Mensaje directo del navegador con replica a todos desde el Servidor: ', message)
})

