import '@utils/env';
import { APP_PORT } from '@config/environment';
import { postgresConnection } from '@postgresDatabase/postgres';

const initialSetup = async () => {
  await postgresConnection();
};

export const init = async (_appPort: number) => {
  await initialSetup();
};

if (APP_PORT) init(+APP_PORT);
