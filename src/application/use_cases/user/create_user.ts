import { UserTypes, userValidation } from '@entities/user';
import { UserDataRepository } from '@interfaces/user_data_repository.interface';
import { AppError } from '@errors';

export const createUser = (userDataRepository: UserDataRepository) => async (userData: UserTypes) => {
  const { value, error } = userValidation(userData);

  if (error) throw AppError('domain', error.details);

  return await userDataRepository.persist(value);
};
