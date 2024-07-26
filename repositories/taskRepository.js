const Task = require('../models/task');

// Get all tasks
const findAll = async () => {
  try {
    return await Task.findAll();
  } catch (error) {
    throw new Error(`Error fetching tasks: ${error.message}`);
  }
};

// Get a task by ID
const findById = async (id) => {
  try {
    return await Task.findByPk(id);
  } catch (error) {
    throw new Error(`Error fetching task with ID ${id}: ${error.message}`);
  }
};

// Create a new task
const create = async (data) => {
  try {
    return await Task.create(data);
  } catch (error) {
    throw new Error(`Error creating task: ${error.message}`);
  }
};

// Update a task
const update = async (id, data) => {
  try {
    const [updated] = await Task.update(data, { where: { id } });
    if (updated) {
      return await Task.findByPk(id);
    }
    return null;
  } catch (error) {
    throw new Error(`Error updating task with ID ${id}: ${error.message}`);
  }
};

// Delete a task
const remove = async (id) => {
  try {
    const deleted = await Task.destroy({ where: { id } });
    return deleted > 0;
  } catch (error) {
    throw new Error(`Error deleting task with ID ${id}: ${error.message}`);
  }
};

module.exports = { findAll, findById, create, update, remove };
