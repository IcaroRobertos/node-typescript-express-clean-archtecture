import Joi from 'joi';

export type UserTypes = {
  name: string,
  email: string,
  password: string,
  age?: number,
  address?: string,
}

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  age: Joi.number().min(18).optional(),
  address: Joi.string().optional(),
});

export const userValidation = (user: UserTypes) => userSchema.validate(user);
