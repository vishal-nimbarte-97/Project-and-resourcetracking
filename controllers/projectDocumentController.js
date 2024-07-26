const projectDocumentRepository = require('../repositories/projectDocumentRepository');

// Get all project documents
const getAllProjectDocuments = async (req, res) => {
  try {
    const projectDocuments = await projectDocumentRepository.findAll();
    res.status(200).json(projectDocuments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a project document by ID
const getProjectDocumentById = async (req, res) => {
  try {
    const projectDocument = await projectDocumentRepository.findById(req.params.id);
    if (projectDocument) {
      res.status(200).json(projectDocument);
    } else {
      res.status(404).json({ message: 'Project Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new project document
const createProjectDocument = async (req, res) => {
  try {
    const newProjectDocument = await projectDocumentRepository.create(req.body);
    res.status(201).json(newProjectDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project document
const updateProjectDocument = async (req, res) => {
  try {
    const updatedProjectDocument = await projectDocumentRepository.update(req.params.id, req.body);
    if (updatedProjectDocument) {
      res.status(200).json(updatedProjectDocument);
    } else {
      res.status(404).json({ message: 'Project Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a project document
const deleteProjectDocument = async (req, res) => {
  try {
    const deleted = await projectDocumentRepository.remove(req.params.id);
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Project Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllProjectDocuments, getProjectDocumentById, createProjectDocument, updateProjectDocument, deleteProjectDocument };
