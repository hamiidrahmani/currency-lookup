import { Request, Response, NextFunction } from 'express';
import RateLimit from 'express-rate-limit';
import { generateToken, verifyToken } from './model';
import { SuccessResponseBody, ErrorResponseBody } from '../../interfaces/HttpResponseBody';
import { getEnv } from './../../utils';
const ENV = getEnv();

const login = (req: Request, res: Response) => {
  try {
    const token: string = generateToken();
    const response: SuccessResponseBody = {
      data: { token },
    };
    return res.status(200).json(response);
  } catch (error) {
    const response: ErrorResponseBody = {
      data: {},
      error: error.message,
    };
    return res.status(500).json(response);
  }
};

const secureRoute = (req: Request, res: Response, next: NextFunction) => {
  try {
    verifyToken(req.headers.authorization);
    return next();
  } catch (error) {
    const response: ErrorResponseBody = {
      data: {},
      error: error.message,
    };
    res.status(401).json(response);
  }
};

const rateLimiter = RateLimit({
  windowMs: Number(ENV.MAX_REQUEST_TIME) * 60 * 1000, // in minutes
  max: Number(ENV.MAX_REQUEST_COUNT), // request count in windowMs
  handler: function (req: Request, res: Response) {
    const response: ErrorResponseBody = {
      data: {},
      error: 'Too many requests from this token, please try again later!',
    };
    res.status(429).send(response);
  },
  keyGenerator: (req: Request) => {
    return req.headers.authorization || '';
  },
});

export { login, rateLimiter, secureRoute };
