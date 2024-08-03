const UserRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

const UserController = {
  async createUser(req, res) {
    try {
      const { name, mobilenumber, email, password } = req.body;
  
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await UserRepository.createUser({
        name,
        mobilenumber,
        email,
        password: hashedPassword,
      });
  
      res.status(201).json(newUser);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        // Handle unique constraint error
        const field = error.errors[0].path;
        // console.log(error.errors[0].path)they are find the path which fields are occured the error
        if (field === 'email') {
          return res.status(409).json({ error: 'Email is already in use' });
        } else if (field === 'mobilenumber') {
          return res.status(409).json({ error: 'Mobile number is already in use' });
        }
      }
      
      // Log and handle other errors
      console.log(error.message);
      res.status(500).json({ error: 'An error occurred during registration' });
    }
  },
  

  async getUserById(req, res) {
    try {
      const user = await UserRepository.getUserById(req.params.id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await UserRepository.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      // If password is being updated, hash it before saving
      if (updatedData.password) {
        updatedData.password = await bcrypt.hash(updatedData.password, 10);
      }

      const [updated] = await UserRepository.updateUser(id, updatedData);

      if (updated) {
        const updatedUser = await UserRepository.getUserById(id);
        return res.status(200).json(updatedUser);
      }

      res.status(404).json({ message: 'User not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deleted = await UserRepository.deleteUser(id);

      if (deleted) {
        return res.status(204).send();
      }

      res.status(404).json({ message: 'User not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = UserController;
