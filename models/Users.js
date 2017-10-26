//jshint esversion: 6

//MODELS -- USERS

module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define('user', {
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    createdAt: {type: DataTypes.DATE, allowNull: false},
    updatedAt: {type: DataTypes.DATE, allowNull: false}
  });

  return user;
};