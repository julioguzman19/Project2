module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 55],
        notEmpty: true
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        notEmpty: true
      }
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isUrl: true
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    medium: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });
  return Users;
};
