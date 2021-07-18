import express, { Express, json, urlencoded } from 'express';
import cors from 'cors';

const preRoutesMiddlewares = (app: Express) => {
  app.use(cors);
  app.use(json());
  app.use(urlencoded({ extended: false }));
};

export const webServer = (appPort: number) => {
  const app = express();
  const routes = express.Router();

  preRoutesMiddlewares(app);
};
