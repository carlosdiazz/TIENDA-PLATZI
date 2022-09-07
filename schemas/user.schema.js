
// AQUI VAMOS A DEFINIR LOS CAMPOS QUE VAMOS A USAR EN EL MODELO DE PRODUCTO CON JOI
const Joi = require('joi');

const id = Joi.number()
const email = Joi.string().min(4);
const password = Joi.string().min(4);


const createUserchema = Joi.object().keys({
  email: email.required(),
  password: password.required(),

});

const updateUserSchema = Joi.object().keys({
  email: email.required(),

});

const getUserSchema = Joi.object().keys({
  id: id.required()
});


module.exports = {
  createUserchema,
  updateUserSchema,
  getUserSchema
}
