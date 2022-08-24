
const express = require('express');
const routerApi = require('./routers/index.routes');
const PORT = require('./config').port;
const cors = require('cors');
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

//Inicializacion de express
const app = express();

//Para poder permitir que me lleguen JSON en el body de las peticiones
app.use(express.json());
app.use(cors());

//Agregar Todas las rutas por aqui
routerApi(app);

//Midlewares para controlar los errores, siempre va despues de los routers
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);


//Aqui configuro el puerto a utilizar
app.listen(PORT, () => {
  console.log(`Desplegado en el puerto: ${PORT}`);
})

// Crear rutas, para productos, categorias, usuarios,
