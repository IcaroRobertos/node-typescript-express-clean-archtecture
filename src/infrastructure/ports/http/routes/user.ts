import { POST } from '../constants/http';
import { RouteDefinitionTypes } from '../typings/route.types';

import { userController } from '../controllers/user.controller';

export const userRoutes: RouteDefinitionTypes = {
  prefix: '/user',
  routes: [{
    method: POST,
    path: '',
    controller: userController.createNewUser,
  }],
};
