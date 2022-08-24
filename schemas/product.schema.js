
// AQUI VAMOS A DEFINIR LOS CAMPOS QUE VAMOS A USAR EN EL MODELO DE PRODUCTO CON JOI
const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const price = Joi.number().min(0);
const image = Joi.string().uri();


const createProductSchema = Joi.object().keys({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

const updateProductSchema = Joi.object().keys({
  name: name,
  price: price,
  image: image
});

const getProductSchema = Joi.object().keys({
  id: id.required()
});


module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema
}
