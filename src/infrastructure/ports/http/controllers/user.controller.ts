import { AdaptedRequest } from '../typings/request.types';
import { HttpResponse } from '../typings/response.types';
import { ok, error } from '../utils/http_responses';
import { userPresenter } from '../../../presenters/user.presenter';

export const userController = {
  createNewUser: async (request: AdaptedRequest): Promise<HttpResponse> => {
    try {
      return ok(await userPresenter.createUser(request.body));
    } catch (e) {
      return error(e);
    }
  },
};
