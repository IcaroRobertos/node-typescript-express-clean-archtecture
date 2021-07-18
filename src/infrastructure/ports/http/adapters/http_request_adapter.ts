import { Request } from 'express';

export const httpRequestAdapter = ({
  headers, query, params, body,
}: Request) => ({
  headers,
  query,
  params,
  body,
});
