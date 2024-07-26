const express = require('express');
const router = express.Router();
const projectDocumentController = require('../controllers/projectDocumentController');

// Route to get all project documents
router.get('/', projectDocumentController.getAllProjectDocuments);

// Route to get a project document by ID
router.get('/:id', projectDocumentController.getProjectDocumentById);

// Route to create a new project document
router.post('/', projectDocumentController.createProjectDocument);

// Route to update a project document by ID
router.put('/:id', projectDocumentController.updateProjectDocument);

// Route to delete a project document by ID
router.delete('/:id', projectDocumentController.deleteProjectDocument);

module.exports = router;
