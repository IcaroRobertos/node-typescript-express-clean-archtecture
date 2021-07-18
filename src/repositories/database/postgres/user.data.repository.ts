import { UserModel } from '@postgresDatabase/models/user.model';
import { UserDataRepository } from '@interfaces/user_data_repository.interface';

export const userDataRepository = (): UserDataRepository => ({
  persist: async (user) => {
    const newUser = await UserModel.create(user);
    return await newUser.save();
  },
});
