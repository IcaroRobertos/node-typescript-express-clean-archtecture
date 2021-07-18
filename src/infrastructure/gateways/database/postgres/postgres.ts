import { Sequelize } from 'sequelize';
import {
  PG_DB_NAME, PG_HOST, PG_PASSWORD, PG_PORT, PG_USER,
} from '@config/environment';

export const sequelize = new Sequelize(`postgres://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DB_NAME}`);

export const postgresConnection = async () => {
  try {
    await sequelize.authenticate();

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
