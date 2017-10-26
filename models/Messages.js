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
        allowNull: false
      }
    });
  };

  message.associate = function(models) {
    message.belongsTo(models.topic, {
      onUpdate: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
// author_id: {type: DataTypes.INTEGER, allowNull: false, onUpdate: "CASCADE",
    //   references: {
    //     model: users,
    //     key: 'id',
    //     defferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
    //   }
    // },
    // topic_id: {type: DataTypes.INTEGER, allowNull: false, onUpdate: "CASCADE",
    //   references: {
    //     model: topics,
    //     key: 'id',
    //     defferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
    //   }
    // }

  return message;
};