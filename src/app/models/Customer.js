const  {Model}  = require('sequelize');
const Sequelize = require('sequelize');


class Customer extends Model {
  static init (sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weight: Sequelize.INTEGER,
      height: Sequelize.INTEGER,
    },
    {
      sequelize,
    });
  }
}

export default Customer;
