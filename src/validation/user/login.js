const { joi } = require("../../config")

module.exports = joi.object({
    username: joi.string().required(),
    password: joi.string().required().min(8)
})