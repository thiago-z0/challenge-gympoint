'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plans', {
      id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title : {
        type: Sequelize.STRING,
        allowNull : false,
      },
      duration : {
        type: Sequelize.INTEGER,
        allowNull : false,
      },
      price : {
        type: Sequelize.INTEGER,
        allowNull : false,
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
