const express = require('express');
const { sequelize, connection } = require('./config/database');
const app = express();
const cors = require('cors');

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

// Use routes
app.use('/users', userRoutes); // Add this line for the user module
app.use('/projects', projectRoutes);
app.use('/project_resource_mappings', projectResourceMappingRoutes);
app.use('/tasks', taskRoutes); 
app.use('/project_documents', projectDocumentRoutes); 
app.use('/clients', clientDetailsRoutes);

// Synchronize all models
const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error creating database & tables:', error);
  }
};

// Start the server
app.listen(3000, async () => {
  console.log('Server is running on http://localhost:3000');
  await connection(); // Authenticate the database connection
  await syncDatabase(); // Sync the database models
});
