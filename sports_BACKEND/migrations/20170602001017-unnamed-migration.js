'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Players',
      'number',
      Sequelize.INTEGER
    )

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Players',
      'number',
      Sequelize.INTEGER
    )

  }
};
