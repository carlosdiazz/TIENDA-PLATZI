const {Pool} = require('pg');

const {config} = require('../config/config');

const USER = encodeURIComponent(config.dbUser_DEV);
const PASSWORD = encodeURIComponent(config.dbPass);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbUser_DEV}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;
