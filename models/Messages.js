//jshint esversion: 6

//MODELS - MESSAGES

module.exports = function(sequelize, DataTypes) {
  const message = sequelize.define('message', {
    body: {type: DataTypes.TEXT, allowNull: false},
    createdAt: {type: DataTypes.DATE, allowNull: false},
    updatedAt: {type: DataTypes.DATE, allowNull: false},
  });

  message.associate = function(models) {
    message.belongsTo(models.user, {
      onUpdate: "CASCADE",
      foreignKey: {
        name: "author_id",
        allowNull: false
      }
    });
  };
    return message;
};