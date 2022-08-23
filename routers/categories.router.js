const express = require('express');
const router = express.Router();

//RUTA CATEGORIAS
router.get('/', (req, res) => {
  res.json([{
    name: 'Categoria 1',
    description: 'Descripcion de la categoria 1'
  },
  {
    name: 'Categoria 2',
    description: 'Descripcion de la categoria 2'
  },
  {
    name: 'Categoria 3',
    description: 'Descripcion de la categoria 3'
  }
  ]);
})

router.get('/:categoryId/products/:productId', (req, res) => {
  //const id = req.params.id;
  const {categoryId,productId } = req.params;
  res.json({
    productId: productId,
    categoryId: categoryId,
  });
})

module.exports = router;
