const DatabaseService = require('../services/database/database.service');

module.exports = {
  listAllStores: async (req, res) => {
    const knex = DatabaseService.getKnexInstance();

    const stores = await knex('stores').select('*');

    console.log('List of all stores:', stores);
    res.status(200).json(stores);
  },
};
