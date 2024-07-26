const Project = require('../models/project');

// Get all projects
const findAll = async () => {
  try {
    return await Project.findAll();
  } catch (error) {
    throw new Error(`Error fetching projects: ${error.message}`);
  }
};

// Get a project by ID
const findById = async (id) => {
  try {
    return await Project.findByPk(id);
  } catch (error) {
    throw new Error(`Error fetching project with ID ${id}: ${error.message}`);
  }
};

// Create a new project
const create = async (data) => {
  try {
    return await Project.create(data);
  } catch (error) {
    throw new Error(`Error creating project: ${error.message}`);
  }
};

// Update a project
const update = async (id, data) => {
  try {
    const [updated] = await Project.update(data, { where: { id } });
    if (updated) {
      return await Project.findByPk(id);
    }
    return null;
  } catch (error) {
    throw new Error(`Error updating project with ID ${id}: ${error.message}`);
  }
};

// Delete a project
const remove = async (id) => {
  try {
    const deleted = await Project.destroy({ where: { id } });
    return deleted > 0;
  } catch (error) {
    throw new Error(`Error deleting project with ID ${id}: ${error.message}`);
  }
};

module.exports = { findAll, findById, create, update, remove };
