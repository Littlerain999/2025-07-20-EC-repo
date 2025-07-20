const { joi } = require("../../config")

module.exports = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required().valid(),
    password: joi.string().required().min(8)
})