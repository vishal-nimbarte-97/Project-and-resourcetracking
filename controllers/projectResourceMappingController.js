const projectResourceMappingRepository = require('../repositories/projectResourceMappingRepository');

// Get all project-resource mappings
const getAllMappings = async (req, res) => {
  try {
    const mappings = await projectResourceMappingRepository.findAll();
    res.status(200).json(mappings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a mapping by ID
const getMappingById = async (req, res) => {
  try {
    const mapping = await projectResourceMappingRepository.findById(req.params.id);
    if (mapping) {
      res.status(200).json(mapping);
    } else {
      res.status(404).json({ message: 'Mapping not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new mapping
const createMapping = async (req, res) => {
  try {
    const newMapping = await projectResourceMappingRepository.create(req.body);
    res.status(201).json(newMapping);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a mapping
const updateMapping = async (req, res) => {
  try {
    const updatedMapping = await projectResourceMappingRepository.update(req.params.id, req.body);
    if (updatedMapping) {
      res.status(200).json(updatedMapping);
    } else {
      res.status(404).json({ message: 'Mapping not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a mapping
const deleteMapping = async (req, res) => {
  try {
    const deleted = await projectResourceMappingRepository.remove(req.params.id);
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Mapping not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllMappings, getMappingById, createMapping, updateMapping, deleteMapping };
