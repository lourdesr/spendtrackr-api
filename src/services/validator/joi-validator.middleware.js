const createHttpError = require('http-errors');

const joiValidateMiddleware = (validatorFn) => async (req, res, next) => {
  try {
    const { error } = validatorFn(req);
    if (error) {
      return next(createHttpError(422, { message: error.message }));
    }
    return next();
  } catch (err) {
    if (err.isJoi) {
      return next(createHttpError(422, { message: err.message }));
    }
    return next(createHttpError(500, err));
  }
};

module.exports = joiValidateMiddleware;
