import { UserTypes } from '@entities/user';

export interface UserDataRepository {
  persist: (_user: UserTypes) => Promise<UserTypes>
}
