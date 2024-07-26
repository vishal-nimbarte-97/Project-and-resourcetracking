const express = require('express');
const router = express.Router();
const projectResourceMappingController = require('../controllers/projectResourceMappingController');

// Route to get all project-resource mappings
router.get('/', projectResourceMappingController.getAllMappings);

// Route to get a mapping by ID
router.get('/:id', projectResourceMappingController.getMappingById);

// Route to create a new mapping
router.post('/', projectResourceMappingController.createMapping);

// Route to update a mapping by ID
router.put('/:id', projectResourceMappingController.updateMapping);

// Route to delete a mapping by ID
router.delete('/:id', projectResourceMappingController.deleteMapping);

module.exports = router;
