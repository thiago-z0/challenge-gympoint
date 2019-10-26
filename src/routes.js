import { Router } from 'express';

import CustomerController from './app/controllers/CustomerController';
import SessionController from './app/controllers/SessionController';
import PlansController from './app/controllers/PlansController';


import authMiddleware from './app/middlewares/auth';

const routes = new Router();


routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/customers', CustomerController.store);
//routes.get('/customers', CustomerController.index);

routes.get('/plans', PlansController.index);
routes.post('/plans', PlansController.store);
routes.put('/plans/:id', PlansController.update);
routes.delete('/plans/:id', PlansController.delete);



export default routes;
