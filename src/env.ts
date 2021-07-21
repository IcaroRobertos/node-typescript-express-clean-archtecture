import { config } from 'dotenv';

const { env: { NODE_ENV } } = process;

config({
  path: `.env.${NODE_ENV}`,
});
