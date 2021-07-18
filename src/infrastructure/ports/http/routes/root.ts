import { GET } from '../constants/http';
import { RouteDefinitionTypes } from '../typings/route.types';

export const rootRoutes: RouteDefinitionTypes = {
  prefix: '',
  routes: [{
    method: GET,
    path: '/',
    controller: async (_req) => ({ body: true, httpStatus: 200 }),
  }],
};
