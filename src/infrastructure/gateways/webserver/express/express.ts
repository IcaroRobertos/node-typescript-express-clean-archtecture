import express, {
  Express, Router, Request, Response, json, urlencoded,
} from 'express';
import cors from 'cors';
import { routesDefinitions } from '@httpRoutes';
import { httpRequestAdapter } from '@httpPort/adapters/http_request_adapter';

const preRoutesMiddlewares = (app: Express) => {
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: false }));
};

const handleRoutes = (appRoutes: Router) => {
  routesDefinitions.forEach(({ prefix, routes }) => {
    routes.forEach(({ controller, method, path }) => {
      appRoutes[method](`${prefix}${path}`, async (req: Request, res: Response) => {
        const { body, statusCode } = await controller(httpRequestAdapter(req));

        return res.status(statusCode).send(body);
      });
    });
  });
};

export const webServer = (appPort?: number) => {
  const app = express();
  const routes = express.Router();

  preRoutesMiddlewares(app);
  handleRoutes(routes);

  app.use(routes);

  if (appPort) return app.listen(appPort, () => { console.log(`Webserver running on port ${appPort}`); });

  return app;
};
