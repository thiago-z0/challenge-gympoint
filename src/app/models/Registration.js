import  {Model}  from 'sequelize';
import Sequelize from 'sequelize';


class Registration extends Model {
  static init (sequelize) {
    super.init({
      customer_id: Sequelize.INTEGER,
      plan_id: Sequelize.INTEGER,
      start_date: Sequelize.DATE,
      end_date: Sequelize.DATE,
      price: Sequelize.INTEGER,
    },
    {
      sequelize,
    });
  }
  static associate(models) {
    this.hasOne(models.Plan, {
      foreignKey: 'id',
    });

  }
  static associate(models) {
    this.hasOne(models.Customer, {
      foreignKey: 'id',
    });

  }
}

export default Registration;
