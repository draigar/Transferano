const http = require('http')
class SocketIo {
    io = (app) => {
        const server = http.createServer(app)
        console.log('here');
        var io = require('socket.io')(server)
        io.on('connection', (socket) => {
            socket.emit('goLive', 'fun right');
        })
    }
}

const Socket = new SocketIo();
module.exports = Socket;