//Aqui hago un modelo de la base de datos
const {Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE = 'users';

//Ese es el esquema de la tabla de USERS de la base de datos
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field:'created_at',
    defaultValue: Sequelize.NOW,
  }
}

//Aqui creo una clase que se llama User que hereda de Model y le paso el esquema de la tabla de USERS
class User extends Model{

  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      timestamps: false,
      modelName: 'User',
    }
  }

}

module.exports = {
  USER_TABLE,
  UserSchema,
  User,

}
