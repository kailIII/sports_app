'use strict';
module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Player', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    position: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Player;
};