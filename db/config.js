const {config} = require('../config/config');

const USER_PRO = encodeURIComponent(config.dbPort_PRO);
const USER_DEV = encodeURIComponent(config.dbUser_DEV);
const PASSWORD = encodeURIComponent(config.dbUser_PRO);
const URI_MYSQL = `mysql://${USER_PRO}:${PASSWORD}@${config.dbHost}:${config.dbPort_PRO}/${config.dbName}`;
const URI_POSTGRES = `postgres://${USER_DEV}:${PASSWORD}@${config.dbHost}:${config.dbPort_DEV}/${config.dbName}`;

module.exports = {
  development: {
    url: URI_POSTGRES,
    dialect: 'postgres',
  },
  production : {
    url: URI_MYSQL,
    dialect: 'mysql',
  }
};
