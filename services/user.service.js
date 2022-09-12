
//? O controllers son las tareas que se van a ejecutar cuando lelguen a la ruta
//const faker = require('faker');
const boom = require('@hapi/boom');

//const getConnection = require('../libs/postgres');
const {models} = require('../libs/sequelize');
class UsersService {

  constructor(){
    this.users = [];
    //this.generate();
  }

  //generate(){
  //  const limit = 10;
  //  for(let i = 0; i < limit; i++){
  //    this.users.push({
  //      id: faker.datatype.uuid(),
  //      name: faker.name.findName(),
  //      email: faker.internet.email(),
  //      image: faker.image.avatar(),
  //      tel: faker.phone.phoneNumber(),
  //      address: faker.address.streetAddress(),
  //    })
  //  }
  //}

  async find(){
    //const client = await getConnection();
    //const rta = await client.query('SELECT * FROM tasks');
    //return rta.rows;
    const client = await models.User.findAll();
    return client;



  }

  async findOne(id){
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('User not found');
    }
    return user;
    //return this.users.find(user => user.id === id);
  }

  async create(data){

    //this.users.push(data);
    const newUser = await models.User.create(data);
    return newUser;
  }

  async update(id, data){
    //const index = this.users.findIndex(user => user.id === id);
    //if(index !== -1){
    //  const user = this.users[index];
    //  this.users[index] = {
    //    ...user,
    //    ...data
    //  }
    //  return this.users[index];
    //}else{
    //  return null;
    //}
    const user = await this.findOne(id);
    const rta = await user.update(data);
    return rta;
  }

  async delete(id){
    //const index = this.users.findIndex(user => user.id === id);
    //if(index !== -1){
    //  this.users.splice(index, 1);
    //  return true;
    //}else{
    //  return false;
    //}
    const user = await this.findOne(id);
    await user.destroy();
    return user;

  }

}

module.exports = UsersService;
