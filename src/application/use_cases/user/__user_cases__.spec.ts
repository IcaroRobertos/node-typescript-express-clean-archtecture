import { userDataRepository } from '@mocks/repositories/database/postgres/user.data.repository.mock';
import { fakeUser } from '@tests/fakers/user.faker';
import { userCases } from './__user_cases__';

describe('test user cases', () => {
  const { createUser } = userCases(userDataRepository);

  test('test create user with a valid data', async () => {
    const user = fakeUser();
    const result = await createUser(user);

    expect(result).toEqual(
      expect.objectContaining({
        ...user,
        id: expect.any(Number),
      }),
    );
  });

  test('test create user with a invalid data', async () => {
    const user = fakeUser({ name: '' });

    try {
      await createUser(user);
    } catch (error) {
      expect(error).toEqual(
        expect.objectContaining({
          path: 'name',
          type: 'REQUIRED',
        }),
      );
    }
  });
});
