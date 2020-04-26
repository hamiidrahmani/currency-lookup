import { Router } from 'express';
import { getCountries } from './services';

const routes = Router();

routes.get('/', getCountries);

export default routes;
