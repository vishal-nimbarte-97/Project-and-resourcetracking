const User = require('../models/user');

const UserRepository = {
  async createUser(userData) {
    return await User.create(userData);
  },

  async getUserById(id) {
    return await User.findByPk(id);
  },

  async getUserByEmail(email) {
    return await User.findOne({ where: { email } });
  },

  async getAllUsers() {
    return await User.findAll();
  },

  async updateUser(id, updatedData) {
    return await User.update(updatedData, { where: { id } });
  },

  async deleteUser(id) {
    return await User.destroy({ where: { id } });
  }
};

module.exports = UserRepository;
