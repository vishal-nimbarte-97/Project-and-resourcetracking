const {DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ProjectName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ClientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TechStack: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  StartDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  EndDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Progress: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
  },
}, {
  tableName: 'projects',
});

module.exports = Project;
