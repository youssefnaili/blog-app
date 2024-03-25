// const { DataTypes } = require('sequelize');
// const sequelize = require('../Database/index');
module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
}
);
return User;
};


