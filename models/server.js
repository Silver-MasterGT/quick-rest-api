const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        //Directorio Publico
        this.app.use(express.static('public'));
        //CORS
        this.app.use(cors());
        //Lectura y parseo del Body
        this.app.use( express.json() );
    }

    routes() {
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        })
    }


}

module.exports = Server;