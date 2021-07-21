import { UserDataRepository } from '@interfaces/user_data_repository.interface';

export const userDataRepository: UserDataRepository = {
  persist: jest.fn(async (user) => ({
    ...user,
    id: 1,
  })),
};
