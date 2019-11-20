import  {Model}  from 'sequelize';
import Sequelize from 'sequelize';


class Plan extends Model {
  static init (sequelize) {
    super.init({
      title: Sequelize.STRING,
      duration: Sequelize.INTEGER,
      price: Sequelize.INTEGER,
    },
    {
      sequelize,
    });
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Customer, {
      through: 'registrations',
      as: 'Customers',
      foreignKey: 'plan_id',
    });
  }
}

export default Plan;
