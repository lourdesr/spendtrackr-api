const DatabaseService = require('../services/database/database.service');

module.exports = {
  listAllMainCategories: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const mainCategories = await knex('main_category').select('*');
      return res.status(200).json(mainCategories);
    } catch (err) {
      return next(err);
    }
  },

  showMainCategoryById: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const mainCategoryId = req.params?.id;
      const mainCategory = await knex('main_category').where({ id: mainCategoryId }).first();
      return res.status(200).json(mainCategory);
    } catch (err) {
      return next(err);
    }
  },

  updateMainCategoryById: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const mainCategoryId = req.params?.id;
      const mainCategory = await knex('main_category').where({ id: mainCategoryId }).first();
      if (!mainCategory) {
        return res.status(404).json({ message: 'mainCategory not found' });
      }
      // Update main category
      const updatedMainCategory = await knex('main_category').where({ id: mainCategoryId }).update(req.body).returning('id');
      return res.status(200).json(updatedMainCategory);
    } catch (err) {
      return next(err);
    }
  },

  createMainCategory: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      // Create store
      const newMainCategory = await knex('main_category').insert(req.body).returning('id');
      return res.status(200).json(newMainCategory);
    } catch (err) {
      return next(err);
    }
  },
};
