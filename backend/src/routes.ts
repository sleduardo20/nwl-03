import { Router } from 'express';
import OrphanagesControllers from './controllers/OrphanagesControllers';

const routes = Router();

routes.get('/orphanages', OrphanagesControllers.index);
routes.get('/orphanages/:id', OrphanagesControllers.show);
routes.post('/orphanages', OrphanagesControllers.create);

export default routes;
