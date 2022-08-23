const express           = require('express');
const productsRouter    = require('./products.router');
const usersRouter       = require('./users.router');
const categoriesRouter  = require('./categories.router');

const routerApi = (app) => {

  //Aqui genero todfas la ruta para la version V1, si deseo sacar una nueva version, solo creor otra funcion y cambio el nombre de la ruta
  const router = express.Router();
  app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
