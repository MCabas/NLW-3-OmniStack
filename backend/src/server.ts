import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
// Explicações
{
    // Requisição -> Respostas
    // Express ajuda a lidar com requisições e respostas

    // Rota -> Conjunto 
    // Recurso -> Usuário (nessa rota)
    // Métodos HTTP -> GET, POST, PUT, DELETE => Possuem uma certa semântica
    //          GET -> Buscar uma informação
    //          POST -> Criar uma informação
    //          PUT -> Editar uma informação
    //          DELETE -> Deletar uma informação
    
    // Parâmetros
    // Query Params -> http://localhost:3333/users?search=diego&page=2
    // Route Params -> http://localhost:3333/users/1 (identificar um recurso)
    // Body -> http://localhost:3333/users (corpo de uma requisição com vários dados)
    
    
    //Banco de dados
    // Driver Nativo (sqlite), Query Builder (Knex), ORM (Object Relational Mapping)
    //  ----- Aumenta as abstrações ----->
}
    


app.listen(3333);
