const express = require('express');
const { sequelize, connection } = require('./config/database');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Import routes
const userRoutes = require('./routes/userRoutes'); // Import user routes
const projectRoutes = require('./routes/projectRoutes');
const projectResourceMappingRoutes = require('./routes/projectResourceMappingRoutes');
const taskRoutes = require('./routes/taskRoutes');
const projectDocumentRoutes = require('./routes/projectDocumentRoutes'); 
const clientDetailsRoutes = require('./routes/clientDetailsRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/users', userRoutes); // Add this line for the user module
app.use('/projects', projectRoutes);
app.use('/project_resource_mappings', projectResourceMappingRoutes);
app.use('/tasks', taskRoutes); 
app.use('/project_documents', projectDocumentRoutes); 
app.use('/clients', clientDetailsRoutes);
app.use('/auth', authRoutes);

// Synchronize all models
const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    // await sequelize.sync({ alter: true });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error creating database & tables:', error);
  }
};

const port = process.env.PORT
// Start the server
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  await connection(); // Authenticate the database connection
  await syncDatabase(); // Sync the database models
});
