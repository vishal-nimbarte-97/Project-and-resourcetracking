const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./user'); // Import User model
const Project = require('./project'); // Import Project model

const ProjectResourceMapping = sequelize.define('ProjectResourceMapping', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Project,
      key: 'id'
    }
  }
}, {
  tableName: 'project_resource_mappings',
});

// Establish relationships
User.hasMany(ProjectResourceMapping, { foreignKey: 'userId' });
ProjectResourceMapping.belongsTo(User, { foreignKey: 'userId' });

Project.hasMany(ProjectResourceMapping, { foreignKey: 'projectId' });
ProjectResourceMapping.belongsTo(Project, { foreignKey: 'projectId' });

module.exports = ProjectResourceMapping;
