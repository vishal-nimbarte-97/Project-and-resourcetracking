const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Project = require('./project'); // Import Project model
// const Document = require('./document'); // Import Document model

const ProjectDocument = sequelize.define('ProjectDocument', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Project,
      key: 'id'
    }
  },
  documentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  documentUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'project_documents',
});

// Establish relationships
Project.hasMany(ProjectDocument, { foreignKey: 'projectId' });
ProjectDocument.belongsTo(Project, { foreignKey: 'projectId' });

module.exports = ProjectDocument;

