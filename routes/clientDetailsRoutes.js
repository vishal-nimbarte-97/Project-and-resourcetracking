const express = require('express');
const router = express.Router();
const clientDetailsController = require('../controllers/clientDetailsController');

router.get('/', clientDetailsController.getAllClients);
router.get('/:id', clientDetailsController.getClientById);
router.post('/', clientDetailsController.createClient);
router.put('/:id', clientDetailsController.updateClient);
router.delete('/:id', clientDetailsController.deleteClient);

module.exports = router;
