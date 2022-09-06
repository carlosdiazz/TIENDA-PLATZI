const {User, UserSchema} = require('./user.model');

// AQUI HAGO UNA FUNCION QUE SE LLAMA SETUPMODELS QUE RECIBE COMO PARAMETRO EL OBJETO SEQUELIZE Y LE PASO EL MODELO DE USER
const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
