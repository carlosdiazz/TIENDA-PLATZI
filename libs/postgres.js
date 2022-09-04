const {Client} = require('pg');

const getConnection = async () => {
  const cliente = new Client({
    host: 'localhost',
    port: 5432,
    user: 'carlos',
    password: '1141',
    database: 'my_store'
  });
  await cliente.connect();
  console.log('Conexion exitosa con la base de datos');
  return cliente;
}

module.exports = getConnection;
