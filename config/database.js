const { Sequelize } = require('sequelize');

// Initialize Sequelize with your database configuration
const sequelize = new Sequelize('PAR', 'postgres', '2001', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Set to `true` to see SQL queries in the console
});

// Function to authenticate the connection
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Export the Sequelize instance and the connection function
module.exports = { sequelize, connection };
