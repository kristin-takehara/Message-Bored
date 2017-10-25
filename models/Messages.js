//jshint esversion: 6
//MODELS - MESSAGES
module.exports = function(sequelize, DataTypes) {
  const messages = sequelize.define('messages', {
    id: DataTypes.INTEGER,

  });
  return messages;
};