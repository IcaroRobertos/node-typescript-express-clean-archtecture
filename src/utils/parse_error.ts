import { parseDomainError } from './errors/domain_errors';

type ErrorType = 'domain'

export type ErrorResponseType = {
  path?: string,
  type: string
}

export const parseError = (type: ErrorType, error: any): ErrorResponseType => {
  switch (type) {
    case 'domain':
      return parseDomainError(error);
    default:
      return error;
  }
};
