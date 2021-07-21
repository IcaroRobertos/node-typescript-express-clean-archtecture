const { config } = require('dotenv');

const { env: { NODE_ENV } } = process;

config({
  path: `.env.${NODE_ENV}`,
});

module.exports = {
  [process.env.NODE_ENV]: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB_NAME,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: process.env.PG_DIALECT,
  },
};
