//Ruta USERS
const express = require('express');
const router = express.Router();
const UsersService = require('../services/user.service');
const service = new UsersService();


router.get('/', async(req,res) => {

  const user = await service.find();
  console.log(user);
  res.json(user);
})

router.get('/:id', async(req, res) => {
  const {id} = req.params;
  const user = await service.findOne(id);
  if(user){
    res.json(user);
  }else{
    res.status(404).json({message: 'User not found'});
  }
})

router.post('/', async(req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json({
    message: 'User created',
    data: newUser
  });
})

router.delete('/:id', async(req, res) => {
  const {id} = req.params;
  const user = await service.delete(id);
  res.json({
    message: 'User deleted',
    data: user,
    id: id
  });

})

module.exports = router;
