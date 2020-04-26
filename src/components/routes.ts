import { Router } from 'express';
import AuthRouter from './auth/routes';
import { secureRoute, rateLimiter } from './auth/services';
import CountryRouter from './country/routes';

const routes = Router();

routes.use('/auth', AuthRouter);
routes.use('/country', [secureRoute, rateLimiter], CountryRouter);

export default routes;
