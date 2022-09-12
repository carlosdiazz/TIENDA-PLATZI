require('dotenv').config();

const config = {
  env         : process.env.NODE_ENV        || 'development',
  port        : process.env.PORT            || 3000,
  dbUser_DEV  : process.env.DB_USER_DEV,
  dbUser_PRO  : process.env.DB_USER_PRO,
  dbPass      : process.env.DB_PASS,
  dbHost      : process.env.DB_HOST,
  dbPort_DEV  : process.env.DB_PORT_DEV,
  dbPort_PRO  : process.env.DB_PORT_PRO,
  dbName      : process.env.DB_NAME,

}

module.exports = {config};
