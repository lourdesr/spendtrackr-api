const joi = require('joi');

module.exports = {
  listStoreByIdValidator: (req) => {
    const schema = joi.object({
      id: joi.number().required(),
    });

    return schema.validate(req.params);
  },

  updateStoreByIdValidator: () => {
    // not implemented
  },

  createStoreValidator: () => {
    // not implemented
  },
};
