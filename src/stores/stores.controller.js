const DatabaseService = require('../services/database/database.service');

module.exports = {
  listAllStores: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const stores = await knex('stores').select('*');
      return res.status(200).json(stores);
    } catch (err) {
      return next(err);
    }
  },

  showStoreById: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const storeId = req.params?.id;
      const store = await knex('stores').where({ id: storeId }).first();
      return res.status(200).json(store);
    } catch (err) {
      return next(err);
    }
  },

  updateStoreById: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const storeId = req.params?.id;
      const store = await knex('stores').where({ id: storeId }).first();
      if (!store) {
        return res.status(404).json({ message: 'Store not found' });
      }
      // Update store
      const updatedStore = await knex('stores').where({ id: storeId }).update(req.body).returning('id');
      return res.status(200).json(updatedStore);
    } catch (err) {
      return next(err);
    }
  },

  createStore: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      // Create store
      const newStore = await knex('stores').insert(req.body).returning('id');
      return res.status(200).json(newStore);
    } catch (err) {
      return next(err);
    }
  },
};
