import  {Model}  from 'sequelize';
import Sequelize from 'sequelize';
import Plan from '../models/Plan';


class Customer extends Sequelize.Model {
  static init (sequelize) {
    super.init(
  {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weight: Sequelize.INTEGER,
      height: Sequelize.INTEGER,
  },
  {
    sequelize,
  }
  );
  }
  static associate(models) {

    this.belongsToMany(models.Plan, {
      through: 'registrations',
      as: 'Plan',
      foreignKey: 'customer_id',
    });

    }
}

export default Customer;
