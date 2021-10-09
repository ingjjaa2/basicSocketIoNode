class Sockets {

    constructor(io){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        // On Connect
        this.io.on('connection',(socket)=>{
            socket.on('mesage-to-server',(data)=>{
                this.io.emit('mesage-from-server',data);
            })
        })
    }
}

module.exports = Sockets;