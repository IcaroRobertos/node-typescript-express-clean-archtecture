import { userCases } from '@useCases';
import { userDataRepository } from '@dataRepositories/user.data.repository';
import { createUserRequestDTO, createUserResponseDTO } from '../dtos/user.dto';

const { createUser } = userCases(userDataRepository);

export const userPresenter = {
  createUser: async (params: createUserRequestDTO): Promise<createUserResponseDTO> => await createUser(params),
};
