const ProjectResourceMapping = require('../models/projectResourceMapping');

// Get all project-resource mappings
const findAll = async () => {
  try {
    return await ProjectResourceMapping.findAll();
  } catch (error) {
    throw new Error(`Error fetching project-resource mappings: ${error.message}`);
  }
};

// Get a mapping by ID
const findById = async (id) => {
  try {
    return await ProjectResourceMapping.findByPk(id);
  } catch (error) {
    throw new Error(`Error fetching project-resource mapping with ID ${id}: ${error.message}`);
  }
};

// Create a new mapping
const create = async (data) => {
  try {
    return await ProjectResourceMapping.create(data);
  } catch (error) {
    throw new Error(`Error creating project-resource mapping: ${error.message}`);
  }
};

// Update a mapping
const update = async (id, data) => {
  try {
    const [updated] = await ProjectResourceMapping.update(data, { where: { id } });
    if (updated) {
      return await ProjectResourceMapping.findByPk(id);
    }
    return null;
  } catch (error) {
    throw new Error(`Error updating project-resource mapping with ID ${id}: ${error.message}`);
  }
};

// Delete a mapping
const remove = async (id) => {
  try {
    const deleted = await ProjectResourceMapping.destroy({ where: { id } });
    return deleted > 0;
  } catch (error) {
    throw new Error(`Error deleting project-resource mapping with ID ${id}: ${error.message}`);
  }
};

module.exports = { findAll, findById, create, update, remove };
