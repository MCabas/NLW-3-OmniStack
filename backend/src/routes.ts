import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanageController from './controllers/OrphanageController';

const routes = Router();
const upload = multer(uploadConfig);

// MVC
// Model - Representação de uma entidade (Orfanato, usuário) - pode ser pensada como o nosso banco de dados
// View - Representação no front-end
// Controller - Lógica das rotas

// Métodos padrão do controller:
// index, show, create, update, delete
routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);

routes.post('/orphanages', upload.array('images'), OrphanageController.create);

export default routes;