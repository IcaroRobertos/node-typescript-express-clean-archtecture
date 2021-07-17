import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).required(),
  age: Joi.number().min(18).optional(),
  address: Joi.string().optional(),
});

export type UserTypes = {
  name: string,
  email: string,
  password: string,
  age?: number,
  address?: string,
}

export const User = async (user: UserTypes) => userSchema.validateAsync(user);
