import faker from 'faker';

export const fakeUser = (params?: any) => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  ...params,
});
