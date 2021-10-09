const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const cors     = require('cors');
const Sockets  = require('./sockets');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // htpp server
        this.server = http.createServer(this.app);

        // socket config
        this.io = socketio(this.server,{});

    }

    middleware(){
        // publics files
        this.app.use( express.static(path.resolve(__dirname,'../public')));

        //CORS
        this.app.use(cors());
    }

    socketInit(){
        new Sockets(this.io);
    }

    start(){
        this.middleware();
        this.socketInit();
        this.server.listen(this.port,()=>{
            console.log("Server runnin on port",this.port)
        });
    }

}


module.exports = Server;