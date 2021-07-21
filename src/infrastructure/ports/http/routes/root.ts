import { GET } from '../constants/http';
import { RouteDefinitionTypes } from '../typings/route.types';

import { rootController } from '../controllers/root.controller';

export const rootRoutes: RouteDefinitionTypes = {
  prefix: '',
  routes: [{
    method: GET,
    path: '/',
    controller: rootController.root,
  }],
};
