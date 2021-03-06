'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', {
      id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name : {
        type: Sequelize.STRING,
        allowNull : false,
      },
      email : {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true,
      },
      age : {
        type: Sequelize.INTEGER,
        allowNull : false,
      },
      weight : {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      height : {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      create_at : {
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
