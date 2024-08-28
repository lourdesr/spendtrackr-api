const DatabaseService = require('../services/database/database.service');

module.exports = {
  listAllSubCategories: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const mainCategories = await knex('sub_category').select('*');
      return res.status(200).json(mainCategories);
    } catch (err) {
      return next(err);
    }
  },

  showSubCategoryById: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const subCategoryId = req.params?.id;
      const subCategory = await knex('sub_category').where({ id: subCategoryId }).first();
      return res.status(200).json(subCategory);
    } catch (err) {
      return next(err);
    }
  },

  updateSubCategoryById: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const subCategoryId = req.params?.id;
      const subCategory = await knex('sub_category').where({ id: subCategoryId }).first();
      if (!subCategory) {
        return res.status(404).json({ message: 'mainCategory not found' });
      }
      // Update main category
      const updatedSubCategory = await knex('sub_category').where({ id: subCategoryId }).update(req.body).returning('id');
      return res.status(200).json(updatedSubCategory);
    } catch (err) {
      return next(err);
    }
  },

  createSubCategory: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      // Create store
      const newSubCategory = await knex('sub_category').insert(req.body).returning('id');
      return res.status(200).json(newSubCategory);
    } catch (err) {
      return next(err);
    }
  },
};
