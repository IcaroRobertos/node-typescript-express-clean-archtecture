import { UserTypes } from '@entities/user';

export type createUserRequestDTO = UserTypes
export type createUserResponseDTO = {
  id: number
} & UserTypes
