//Ruta USERS
const express = require('express');
const router = express.Router();
const UsersService = require('../services/user.service');
const service = new UsersService();


router.get('/',(req,res) => {

  const user = service.find();
  res.json(user);
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const user = service.findOne(id);
  if(user){
    res.json(user);
  }else{
    res.status(404).json({message: 'User not found'});
  }
})

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json({
    message: 'User created',
    data: newUser
  });
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  const user = service.delete(id);
  res.json({
    message: 'User deleted',
    data: user,
    id: id
  });

})

module.exports = router;
