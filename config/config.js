require('dotenv').config();

const fs = require('fs');

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME ?? 'root',
    password: process.env.DEV_DB_PASSWORD ?? null,
    database: process.env.DEV_DB_DATABASE ?? 'db_development',
    host:     process.env.DEV_DB_HOST ?? 'localhost',
    port:     process.env.DEV_DB_PORT ?? 3306,
    dialect:  process.env.DEV_DB_DIALECT ?? 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.TEST_DB_USERNAME ?? 'root',
    password: process.env.TEST_DB_PASSWORD ?? null,
    database: process.env.TEST_DB_DATABASE ?? 'db_test',
    host:     process.env.TEST_DB_HOST ?? 'localhost',
    port:     process.env.TEST_DB_PORT ?? 3306,
    dialect:  process.env.TEST_DB_DIALECT ?? 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME ?? 'root',
    password: process.env.PROD_DB_PASSWORD ?? null,
    database: process.env.PROD_DB_DATABASE ?? 'db_test',
    host:     process.env.PROD_DB_HOST ?? 'localhost',
    port:     process.env.PROD_DB_PORT ?? 3306,
    dialect:  process.env.PROD_DB_DIALECT ?? 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        ca: process.env.PROD_DB_SSL_CA ? fs.readFileSync(process.env.PROD_DB_SSL_CA) : null,
      }
    }
  }
};
