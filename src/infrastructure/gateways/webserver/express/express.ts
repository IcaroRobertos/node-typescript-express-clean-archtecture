import express, {
  Express, Router, Request, Response, json, urlencoded,
} from 'express';
import cors from 'cors';
import { routesDefinitions } from '@httpRoutes';
import { httpRequestAdapter } from '@httpPort/adapters/http_request_adapter';

const preRoutesMiddlewares = (app: Express) => {
  app.use(cors);
  app.use(json());
  app.use(urlencoded({ extended: false }));
};

const handleRoutes = (appRoutes: Router) => {
  routesDefinitions.forEach(({ prefix, routes }) => {
    routes.forEach(({ controller, method, path }) => {
      appRoutes[method](`${prefix}${path}`, async (req: Request, res: Response) => {
        const { body, httpStatus } = await controller(httpRequestAdapter(req));

        console.log('{ body, httpStatus }', { body, httpStatus });

        return res.status(httpStatus).send(body);
      });
    });
  });
};

export const webServer = (appPort?: number) => {
  const app = express();
  const routes = express.Router();

  routes.get('/b', (_req, res) => res.send(2));

  preRoutesMiddlewares(app);
  handleRoutes(routes);

  console.log('app.routes', routes.stack);

  if (appPort) return app.listen(appPort, () => { console.log(`Webserver running on port ${appPort}`); });

  return app;
};
