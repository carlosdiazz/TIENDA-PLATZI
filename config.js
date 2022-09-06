require('dotenv').config();

const config = {
  env     : process.env.NODE_ENV  || 'development',
  port    : process.env.PORT      || 3000,
  dbUser  : process.env.DB_USER,
  dbPass  : process.env.DB_PASS,
  dbHost  : process.env.DB_HOST,
  dbPort  : process.env.DB_PORT,
  dbName  : process.env.DB_NAME,

}

module.exports = {config};
