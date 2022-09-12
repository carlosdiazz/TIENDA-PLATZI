
const express = require('express');
const routerApi = require('./routers/index.routes');
const {config} = require('./config/config');
const cors = require('cors');
const {logErrors, errorHandler, boomErrorHandler, validationErrorHandler} = require('./middlewares/error.handler');

//Inicializacion de express
const app = express();

//Para poder permitir que me lleguen JSON en el body de las peticiones
app.use(express.json());
app.use(cors());

//Agregar Todas las rutas por aqui
routerApi(app);

//Midlewares para controlar los errores, siempre va despues de los routers
app.use(logErrors);
app.use(validationErrorHandler);
app.use(boomErrorHandler)
app.use(errorHandler);


//Aqui configuro el puerto a utilizar
app.listen(config.port, () => {
  console.log(`Desplegado en el puerto: ${config.port}`);
})

// Crear rutas, para productos, categorias, usuarios,
