module.exports = async (req, res, next) => {
    try {
        const validation = require("../../validation/index").user.signUp
        const data = req.body
        const { error, value } = validation.validate(data)
        const { hash, salts } = require("../../config")
        if (!error) {
            const { password, ...other } = value
            const hashPass = await hash(password, salts)
            const { user } = require("../../model/index")
            const USER = await user.create({ ...other, password: hashPass })
            res.status(200).send({"Success": USER})
        } else {
            res.status(400).send({ "Failed" : error.message })
        }
    }
    catch (error) {
        console.error(error)
        res.status(500).send("Error")
    }
}