
const express = require('express');
const app = express();
const routerApi = require('./routers/index.routes');
const PORT = require('./config').port;

//Para poder permitir que me lleguen JSON en el body de las peticiones
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Agregar Todas las rutas por aqui
routerApi(app);

//Aqui configuro el puerto a utilizar
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

// Crear rutas, para productos, categorias, usuarios,
