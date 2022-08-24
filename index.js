
const express = require('express');
const app = express();
const routerApi = require('./routers/index.routes');
const PORT = require('./config').port;
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');


//Para poder permitir que me lleguen JSON en el body de las peticiones
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Agregar Todas las rutas por aqui
routerApi(app);

//Midlewares para controlar los errores, siempre va despues de los routers
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);


//Aqui configuro el puerto a utilizar
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

// Crear rutas, para productos, categorias, usuarios,
