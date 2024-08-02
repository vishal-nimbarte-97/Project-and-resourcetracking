const ClientDetails = require('../models/clientDetails');

// Get all clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await ClientDetails.findAll();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// Get client by ID
exports.getClientById = async (req, res) => {
  try {
    const client = await ClientDetails.findByPk(req.params.id);
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new client
exports.createClient = async (req, res) => {
  try {
    const newClient = await ClientDetails.create(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update client
exports.updateClient = async (req, res) => {
  try {
    const [updated] = await ClientDetails.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedClient = await ClientDetails.findByPk(req.params.id);
      res.status(200).json(updatedClient);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete client
exports.deleteClient = async (req, res) => {
  try {
    const deleted = await ClientDetails.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Client deleted' });
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
