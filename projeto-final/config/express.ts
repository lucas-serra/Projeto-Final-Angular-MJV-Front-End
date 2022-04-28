import express, { NextFunction, Request, Response } from 'express';
export const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'
import { db } from './database'
import { userRoutes } from '../src/routes';


const corsOptions = {
  exposedHeaders: ['x-access-token']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use((req: Request, res:Response, next: NextFunction) => {
  (req as any).db = db;
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'];
  console.log('####################################');
  if (token) {
    console.log('A token is send by the application');
    console.log('Token value is ' + token);
  } else {
    console.log('No token is send by the the application');
  }
  console.log('####################################');
  next();
});

userRoutes(app);

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({ message: `route ${req.originalUrl} does not exists!` });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;
