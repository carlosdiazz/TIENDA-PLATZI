//Aqui hago un modelo de la base de datos
const {Model, DataTypes, Sequelize} = require('sequelize');

const PRODUCT_TABLE = 'products';


//Ese es el esquema de la tabla de USERS de la base de datos
const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
    field:'image_url',
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field:'created_at',
    defaultValue: Sequelize.NOW,
  }
}

class Product extends Model{

  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      timestamps: false,
      modelName: 'Product',
    }
  }

}

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product,
}
