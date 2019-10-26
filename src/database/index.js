import Sequelize from 'sequelize';

import User from'../app/models/User';
import Customer from '../app/models/Customer';
import Plan from '../app/models/Plan';

import databaseConfig from'../config/database';

const models = [User, Customer, Plan];


class Database{
  constructor (){
    this.init();
  }

  init() {
    // conexão base dados
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));





  }
}
export default new Database();
