import { Router } from 'express';
import { login } from './services';

const routes = Router();

routes.get('/login', login);

export default routes;
