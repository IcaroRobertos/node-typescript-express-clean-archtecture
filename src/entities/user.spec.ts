import faker from 'faker';
import { userValidation } from './user';

describe('test user validation', () => {
  const fakeUser = (params?: any) => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    ...params,
  });

  test('with a valid data', () => {
    const user = fakeUser();
    const { error, value } = userValidation(user);

    expect(error).toBeFalsy();
    expect(value).toEqual(user);
  });

  test('without name', () => {
    const { error } = userValidation(fakeUser({ name: '' }));

    expect(error?.details[0]?.path[0]).toBe('name');
  });

  test('without email', () => {
    const { error } = userValidation(fakeUser({ email: '' }));

    expect(error?.details[0]?.path[0]).toBe('email');
  });

  test('without password', () => {
    const { error } = userValidation(fakeUser({ password: '' }));

    expect(error?.details[0]?.path[0]).toBe('password');
  });
});
