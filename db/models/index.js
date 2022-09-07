const {User, UserSchema} = require('./user.model');
const {Product, ProductSchema} = require('./product.model');

// AQUI HAGO UNA FUNCION QUE SE LLAMA SETUPMODELS QUE RECIBE COMO PARAMETRO EL OBJETO SEQUELIZE Y LE PASO EL MODELO DE USER
const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize))
  Product.init(ProductSchema, Product.config(sequelize))

}

module.exports = setupModels;
