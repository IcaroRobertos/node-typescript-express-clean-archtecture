import './env';
import { APP_PORT } from '@config/environment';
import { postgresConnection } from '@postgresDatabase/postgres';
import { webServer } from '@webserver';

const initialSetup = async () => {
  await postgresConnection();
};

export const init = async (appPort?: number) => {
  await initialSetup();

  return webServer(appPort);
};

console.log('APP_PORT', APP_PORT);

if (APP_PORT) init(+APP_PORT);
