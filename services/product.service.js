const faker = require('faker');
//Aqui definimos toda la logica y toda la interaciones a nivel transancional de nuestros datos

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for(let i = 0; i < limit; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl()
      })
    }
  }

  create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      name: data.name,
      price: data.price,
      image: data.image
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(product => product.id === id);
  }

  update(id, data){
    const index = this.products.findIndex(product => product.id === id);
    if(index !== -1){
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...data
      }
      return this.products[index];
    }else{
      return null;
    }
  }

  delete(id){
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
