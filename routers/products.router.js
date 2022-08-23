//RUTA PRODUCTS
const express = require('express');
const ProductsService = require('../services/product.service');
const router = express.Router();

//Aqui creo una isntancia de la clase ProductsService
const service = new ProductsService();

//Peticiones GET
router.get('/', (req, res) => {
  //Aqui llamo a la funcion find de la clase ProductsService
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  //const id = req.params.id;
  const {id} = req.params;
  const product = service.findOne(id);
  if(product){
    res.json(product);
  }else{
    res.status(404).json({message: 'Product not found'});
  }

})

//Peticiones POST
router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({
    message: 'Product created',
    data: newProduct
  });
})

//Peticiones PATCH
router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json({
    message: 'Product updated',
    data: product,
    id: id
  });
})

//Peticiones DELETE
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.delete(id);
  res.json({
    message: 'Product deleted',
    data: product,
    id: id
  });
})

module.exports = router;
