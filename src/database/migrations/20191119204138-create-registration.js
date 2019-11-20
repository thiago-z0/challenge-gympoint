'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('registrations', {
      id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      customer_id : {
        type: Sequelize.INTEGER,
        references: { model: 'customers', key: 'id' },
        onUpdte: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      plan_id: {
        type: Sequelize.INTEGER,
        references: { model: 'plans', key: 'id' },
        onUpdte: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      start_date : {
        type: Sequelize.DATE,
        allowNull : false,
      },
      end_date : {
        type: Sequelize.DATE,
        allowNull : false,
      },
      price : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at : {
        type: Sequelize.DATE,
        allowNull : false,
      },
      updated_at : {
        type: Sequelize.DATE,
        allowNull : false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
