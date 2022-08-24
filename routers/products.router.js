//RUTA PRODUCTS
const express = require('express');
const ProductsService = require('../services/product.service');
const router = express.Router();

//Aqui creo una isntancia de la clase ProductsService
const service = new ProductsService();

//Peticiones GET
router.get('/', async(req, res) => {
  //Aqui llamo a la funcion find de la clase ProductsService
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async(req, res, next) => {
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
router.post('/', async(req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    message: 'Product created',
    data: newProduct
  });
})

//Peticiones PATCH
router.patch('/:id', async(req, res, next) => {
  try{
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json({
      message: 'Product updated',
      data: product,
      id: id
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
