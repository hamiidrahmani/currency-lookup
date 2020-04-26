import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import routes from './components/routes';
import { getEnv } from './utils';
const ENV = getEnv();
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', routes);

app.listen(ENV.APP_PORT, () => console.log(`Server is listening on ${ENV.APP_PORT}`));
