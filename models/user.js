const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobilenumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensures that the mobilenumber is unique
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensures that the email is unique
    validate: {
      isEmail: true, // Validates that the email format is correct
    }
  }
}, {
  tableName: 'users',
});

module.exports = User;
