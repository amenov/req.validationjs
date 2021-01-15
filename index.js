const Validator = require('amenov.validator');

module.exports = ({ sequelize }) => (req, res, next) => {
  req.validation = async (rules) => {
    const validation = new Validator(req.body, rules, { sequelize });

    await validation.fails();

    if (validation.failed) {
      return validation.errors;
    } else {
      return false;
    }
  };

  next();
};
