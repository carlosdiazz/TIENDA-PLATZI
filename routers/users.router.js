//Ruta USERS
const express = require('express');
const router = express.Router();
const UsersService = require('../services/user.service');
const service = new UsersService();
const validatorHandler = require('../middlewares/validator.handler');
const {createUserchema, updateUserSchema, getUserSchema} = require('../schemas/user.schema');

router.get('/', async(req,res) => {

  const user = await service.find();
  console.log(user);
  res.json(user);
})

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async(req, res, next) => {
    try{
      const {id} = req.params;
      const user = await service.findOne(id);
      res.json(user);
    }catch(e){
      next(e);
    }
    //const {id} = req.params;
    //const user = await service.findOne(id);
    //if(user){
    //  res.json(user);
    //}else{
    //  res.status(404).json({message: 'User not found'});
    //}
  })



router.post('/',
  validatorHandler(createUserchema, 'body'),
  async(req, res, next) => {
    try{
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json({
        message: 'User created',
        data: newUser
      });
    }catch(e){
      next(e);
    }
  //const body = req.body;
  //const newUser = await service.create(body);
  //res.status(201).json({
  //  message: 'User created',
  //  data: newUser
  //});
})

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async(req, res, next) => {
  try{
    const {id} = req.params;
    const body = req.body;
    const user = await service.update(id, body);
    res.json({
      message: 'User updated',
      data: user,
    });
  }catch(e){
    next(e);
  }
})




router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async(req, res, next) => {
    try{
      const {id} = req.params;
      const user = await service.delete(id);
      res.json({
        message: 'User deleted',
        data: user,
      });
    }catch(e){
      next(e);
    }

  //const {id} = req.params;
  //const user = await service.delete(id);
  //res.json({
  //  message: 'User deleted',
  //  data: user,
  //  id: id
  //});

})

module.exports = router;
