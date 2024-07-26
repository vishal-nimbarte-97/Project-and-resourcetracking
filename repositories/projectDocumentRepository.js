const ProjectDocument = require('../models/projectDocument');

// Get all project documents
const findAll = async () => {
  try {
    return await ProjectDocument.findAll();
  } catch (error) {
    throw new Error(`Error fetching project documents: ${error.message}`);
  }
};

// Get a project document by ID
const findById = async (id) => {
  try {
    return await ProjectDocument.findByPk(id);
  } catch (error) {
    throw new Error(`Error fetching project document with ID ${id}: ${error.message}`);
  }
};

// Create a new project document
const create = async (data) => {
  try {
    return await ProjectDocument.create(data);
  } catch (error) {
    throw new Error(`Error creating project document: ${error.message}`);
  }
};

// Update a project document
const update = async (id, data) => {
  try {
    const [updated] = await ProjectDocument.update(data, { where: { id } });
    if (updated) {
      return await ProjectDocument.findByPk(id);
    }
    return null;
  } catch (error) {
    throw new Error(`Error updating project document with ID ${id}: ${error.message}`);
  }
};

// Delete a project document
const remove = async (id) => {
  try {
    const deleted = await ProjectDocument.destroy({ where: { id } });
    return deleted > 0;
  } catch (error) {
    throw new Error(`Error deleting project document with ID ${id}: ${error.message}`);
  }
};

module.exports = { findAll, findById, create, update, remove };
