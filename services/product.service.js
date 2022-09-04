// @ts-check

const boom = require('@hapi/boom');
const faker = require('faker');

const pool = require('../libs/postgres.pool');

//Aqui definimos toda la logica y toda la interaciones a nivel transancional de nuestros datos

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async generate() {
    const limit = 10;
    for(let i = 0; i < limit; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
        stock: faker.datatype.boolean()
      })
    }
  }

  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      name: data.name,
      price: data.price,
      image: data.image
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find(){
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id){
    const product = this.products.find(product => product.id === id);
    if(!product){
      throw boom.notFound('Producto no encontrado');
    }
    if(product.stock){
      throw boom.conflict('Producto agotado');
    }else{
      return product;
    }
  }

  async update(id, data){
    const index = this.products.findIndex(product => product.id === id);
    if(index !== -1){
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...data
      }
      return this.products[index];
    }else{
      throw boom.notFound('Producto no encontrado'); //Aqui le paso el error que quiero que me devuelva
    }
  }

  async delete(id){
    const index = this.products.findIndex(product => product.id === id);
    if(index !== -1){
      this.products.splice(index, 1);
      return true;
    }else{
      return false;
    }

  }


}

module.exports = ProductsService;
