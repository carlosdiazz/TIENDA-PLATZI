//RUTA PRODUCTS
const express = require('express');
const ProductsService = require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schema');
const router = express.Router();


//Aqui creo una isntancia de la clase ProductsService
const service = new ProductsService();

//Peticiones GET
router.get('/', async(req, res) => {
  //Aqui llamo a la funcion find de la clase ProductsService
  const products = await service.find();
  res.json(products);
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'), //Aqui valido el id que llega por parametro en la url con el schema getProductSchema
  async(req, res, next) => {
  try{
    //const id = req.params.id;
    const {id} = req.params;
    const product = await service.findOne(id);
    res.json(product);

  }catch(e){
    next(e);
  }

})

//Peticiones POST
router.post('/',
  validatorHandler(createProductSchema, 'body'), //Aqui valido el body que llega por parametro en la url con el schema createProductSchema
  async(req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    message: 'Product created',
    data: newProduct
  });
})

//Peticiones PATCH
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'), //Aqui valido el id que llega por parametro en la url con el schema updateProductSchema
  validatorHandler(updateProductSchema, 'body'), //Aqui valido el body que llega por parametro en la url con el schema updateProductSchema
  async(req, res, next) => {
  try{
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json({
      message: 'Product updated',
      data: product,
    });
  }catch(e){
    next(e);
  }

})

//Peticiones DELETE
router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const product = await service.delete(id);
  res.json({
    message: 'Product deleted',
    data: product,
    id: id
  });
})

module.exports = router;
