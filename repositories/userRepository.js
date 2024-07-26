const User = require('../models/user');

// Get all users
const findAll = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};

// Get a user by ID
const findById = async (id) => {
  try {
    return await User.findByPk(id);
  } catch (error) {
    throw new Error(`Error fetching user with ID ${id}: ${error.message}`);
  }
};

// Create a new user
const create = async (data) => {
  try {
    return await User.create(data);
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

// Update a user
const update = async (id, data) => {
  try {
    const [updated] = await User.update(data, { where: { id } });
    if (updated) {
      return await User.findByPk(id);
    }
    return null;
  } catch (error) {
    throw new Error(`Error updating user with ID ${id}: ${error.message}`);
  }
};

// Delete a user
const remove = async (id) => {
  try {
    const deleted = await User.destroy({ where: { id } });
    return deleted > 0;
  } catch (error) {
    throw new Error(`Error deleting user with ID ${id}: ${error.message}`);
  }
};

module.exports = { findAll, findById, create, update, remove };
