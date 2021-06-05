const Validator = require('amenov.validator')

module.exports = (options) => (req, res, next) => {
  req.validation = async (rules) => {
    const validation = new Validator(req.body, rules, options)

    await validation.fails()

    if (validation.failed) {
      return validation.errors
    } else {
      return null
    }
  }

  next()
}
