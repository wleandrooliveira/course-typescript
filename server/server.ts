import * as http from 'http';
import Api from './api/api';
import { errorHandlerApi } from './api/errorHandlerApi';


const config = require('./config/env/config')();

const server = http.createServer(Api);

Api.use(errorHandlerApi);

server.listen(config.serverPort, ()=> console.log('Server está rodando na porta 3000'));

/* import http = require('http')

export function simpleServer(port:number, message:string)
{
    http.createServer((req,res)=>{
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end('Servidor funcionando\n');
    }).listen(port,'127.0.01:3000');

    console.log('Server está rodando na porta 3000');
} */


