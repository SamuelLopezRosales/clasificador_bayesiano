import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';
import cors from 'cors';


/*==================================
 DECLARACIÓN DEL SERVIDOR
===================================*/
const server = Server.init( 3000 );
/*==================================
 USO DE RUTAS DEFINIDAS
===================================*/
server.app.use( cors({origin: true, credentials: true}));
server.app.use( router );

//MySQL.instance;


server.start( () => {
    console.log("Servidor corriendo en el puerto 3000");
});