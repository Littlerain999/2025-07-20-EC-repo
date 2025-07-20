const { joi } = require("../../config")

module.exports = joi.object({
  title: joi.string().required()
})