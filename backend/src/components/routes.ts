import { Router } from 'express';
import AuthRouter from './auth/routes';
import { secureRoute, rateLimiter } from './auth/services';
import CountryRouter from './country/routes';

const routes = Router();

routes.use('/auth', AuthRouter);
// country end point should be secured by token and should be rate limited
routes.use('/country', [secureRoute, rateLimiter], CountryRouter);

export default routes;
