import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './Controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);
// index, show, create, update, delete
routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanage/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

export default routes;