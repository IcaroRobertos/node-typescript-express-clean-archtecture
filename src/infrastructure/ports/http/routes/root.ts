import { GET } from '../constants/http';
import { RouteDefinitionTypes } from '../typings/route.types';

export const rootRoutes: RouteDefinitionTypes = {
  prefix: '',
  routes: [
    {
      method: GET,
      path: '/',
      controller: async (_req) => {
        console.log('AQUIIII');

        return { body: true, httpStatus: 200 };
      },
    },
    {
      method: GET,
      path: '/asd',
      controller: async (_req) => {
        console.log('AQUIIII');

        return { body: true, httpStatus: 200 };
      },
    },
  ],
};
