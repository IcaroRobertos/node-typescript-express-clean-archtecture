import { UserTypes, userValidation } from '@entities/user';
import { UserDataRepository } from '@interfaces/user_data_repository.interface';
import { ApplicationError } from '@applicationErrors';

export const createUser = (userDataRepository: UserDataRepository) => async (userData: UserTypes) => {
  const { value, error } = userValidation(userData);

  if (error) throw ApplicationError('domain', error.details);

  return await userDataRepository.persist(value);
};
