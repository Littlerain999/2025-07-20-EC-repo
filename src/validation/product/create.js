const { joi } = require("../../config")

module.exports = joi.object({
  name: joi.string().required(),           
  price: joi.number().positive().required(),
  category: joi.string().required(),
  createdBy: joi.string().required()
})