import { UserDataRepository } from '@interfaces/user_data_repository.interface';
import { createUser } from './create_user';

export const userCases = (userDataRepository: UserDataRepository) => ({
  createUser: createUser(userDataRepository),
});
