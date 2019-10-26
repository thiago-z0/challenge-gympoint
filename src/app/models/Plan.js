import {Model}  from 'sequelize';
import Sequelize from 'sequelize';


class Plans extends Model {
  static init (sequelize) {
    super.init({
      title: Sequelize.STRING,
      duration: Sequelize.INTEGER,
      price: Sequelize.INTEGER,
    },
    {
      sequelize,
    });
  }
}

export default Plans;
