const faker = require('faker');

//const getConnection = require('../libs/postgres');
const {models} = require('../libs/sequelize');
class UsersService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 10;
    for(let i = 0; i < limit; i++){
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        tel: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
      })
    }
  }

  async find(){
    //const client = await getConnection();
    //const rta = await client.query('SELECT * FROM tasks');
    //return rta.rows;
    const client = await models.User.findAll();
    return client;



  }

  async findOne(id){
    return this.users.find(user => user.id === id);
  }

  async create(data){
    const newUser = {
      id: faker.datatype.uuid(),
      name: data.name,
      email: data.email,
      image: data.image,
      tel: data.tel,
      address: data.address,
    }
    this.users.push(newUser);
    return newUser;
  }

  async update(id, data){
    const index = this.users.findIndex(user => user.id === id);
    if(index !== -1){
      const user = this.users[index];
      this.users[index] = {
        ...user,
        ...data
      }
      return this.users[index];
    }else{
      return null;
    }
  }

  async delete(id){
    const index = this.users.findIndex(user => user.id === id);
    if(index !== -1){
      this.users.splice(index, 1);
      return true;
    }else{
      return false;
    }

  }

}

module.exports = UsersService;
