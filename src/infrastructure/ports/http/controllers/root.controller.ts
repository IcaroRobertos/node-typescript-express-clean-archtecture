import { AdaptedRequest } from '../typings/request.types';
import { HttpResponse } from '../typings/response.types';
import { ok } from '../utils/http_responses';

export const rootController = {
  root: async (_req: AdaptedRequest): Promise<HttpResponse> => ok({ ok: true }),
};
