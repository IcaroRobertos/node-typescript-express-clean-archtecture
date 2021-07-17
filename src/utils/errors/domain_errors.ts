import { errors } from '@constants/errors';
import { ErrorResponseType } from '../parse_error';

const parseType = (type: string) => {
  switch (type) {
    case 'string.min':
      return errors.STRING_MIN_LENGTH;
    default:
      return type;
  }
};

export const parseDomainError = (error: any): ErrorResponseType => ({
  path: error.path[0],
  type: parseType(error.type),
});