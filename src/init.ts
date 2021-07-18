import dotenv from 'dotenv';
import { APP_PORT } from '@config/environment';
import { postgresConnection } from '@postgresDatabase/postgres';

const environmentConfig = () => {
  const { env: { NODE_ENV } } = process;

  dotenv.config({
    path: NODE_ENV ? `.env.${NODE_ENV}` : '.env',
  });
};

const initialSetup = async () => {
  await postgresConnection();
};

export const init = async (_appPort: number) => {
  environmentConfig();
  await initialSetup();
};

if (APP_PORT) init(+APP_PORT);
