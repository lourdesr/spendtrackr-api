const DatabaseService = require('../services/database/database.service');

module.exports = {
  listAllExpenses: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const expenses = await knex('expense').select('*');
      return res.status(200).json(expenses);
    } catch (err) {
      return next(err);
    }
  },

  showExpenseByUUID: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const expenseUUID = req.params?.uuid;
      const expense = await knex('expense').where({ uuid: expenseUUID }).first();
      return res.status(200).json(expense);
    } catch (err) {
      return next(err);
    }
  },

  updateExpenseById: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      const expenseId = req.params?.id;
      const expense = await knex('expense').where({ id: expenseId }).first();
      if (!expense) {
        return res.status(404).json({ message: 'expense not found' });
      }
      // Update store
      const updatedExpense = await knex('stores').where({ id: expenseId }).update(req.body).returning('id');
      return res.status(200).json(updatedExpense);
    } catch (err) {
      return next(err);
    }
  },

  createExpense: async (req, res, next) => {
    try {
      const knex = DatabaseService.getKnexInstance();
      // Create store
      const newExpense = await knex('expense').insert(req.body).returning('id');
      return res.status(200).json(newExpense);
    } catch (err) {
      return next(err);
    }
  },
};
