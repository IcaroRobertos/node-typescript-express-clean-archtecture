import { config } from 'dotenv';

const { env: { NODE_ENV } } = process;

config({
  path: NODE_ENV ? `.env.${NODE_ENV}` : '.env',
});
