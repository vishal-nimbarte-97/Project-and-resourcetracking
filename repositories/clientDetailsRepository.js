const ClientDetails = require('../models/clientDetails');

class ClientDetailsRepository {
  async getAllClients() {
    return await ClientDetails.findAll();
  }

  async getClientById(id) {
    return await ClientDetails.findByPk(id);
  }

  async createClient(clientData) {
    return await ClientDetails.create(clientData);
  }

  async updateClient(id, clientData) {
    const [updated] = await ClientDetails.update(clientData, {
      where: { id: id }
    });
    if (updated) {
      return await ClientDetails.findByPk(id);
    }
    return null;
  }

  async deleteClient(id) {
    const deleted = await ClientDetails.destroy({
      where: { id: id }
    });
    return deleted;
  }
}

module.exports = new ClientDetailsRepository();
