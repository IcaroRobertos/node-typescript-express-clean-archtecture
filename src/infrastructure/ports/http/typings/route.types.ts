import { AdaptedRequest } from './request.types';
import { HttpResponse } from './response.types';

type RouteTypes = {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options',
  path: string,
  controller: (_request: AdaptedRequest) => Promise<HttpResponse>
}

export type RouteDefinitionTypes = {
  prefix: string,
  routes: RouteTypes[]
}
