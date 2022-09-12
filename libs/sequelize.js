const {Sequelize} = require('sequelize');
const {config} = require('../config/config');
const setupModels = require('../db/models');

//const USER_PRO = encodeURIComponent(config.dbUser_PRO);
const USER_DEV = encodeURIComponent(config.dbUser_DEV);
const PASSWORD = encodeURIComponent(config.dbPass);
//const URI_MYSQL = `mysql://${USER_PRO}:${PASSWORD}@${config.dbHost}:${config.dbPort_PRO}/${config.dbName}`;
const URI_POSTGRES = `postgres://${USER_DEV}:${PASSWORD}@${config.dbHost}:${config.dbPort_DEV}/${config.dbName}`;

const sequelize = new Sequelize(URI_POSTGRES, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize)
sequelize.sync();

module.exports = sequelize;
