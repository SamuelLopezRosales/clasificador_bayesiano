"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var router_1 = __importDefault(require("./router/router"));
var cors_1 = __importDefault(require("cors"));
/*==================================
 DECLARACIÓN DEL SERVIDOR
===================================*/
var server = server_1.default.init(3000);
/*==================================
 USO DE RUTAS DEFINIDAS
===================================*/
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.app.use(router_1.default);
//MySQL.instance;
server.start(function () {
    console.log("Servidor corriendo en el puerto 3000");
});
