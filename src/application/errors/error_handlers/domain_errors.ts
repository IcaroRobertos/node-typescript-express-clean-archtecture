import { errors } from '@applicationConstants/errors';
import { ErrorResponseType } from '../errors';

const parseType = (type: string) => {
  switch (type) {
    case 'string.min':
      return errors.STRING_MIN_LENGTH;
    case 'string.empty':
      return errors.REQUIRED_EMPTY;
    default:
      return type;
  }
};

export const parseDomainError = (error: any): ErrorResponseType => ({
  path: error.path[0],
  type: parseType(error.type),
});
