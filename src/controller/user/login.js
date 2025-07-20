module.exports = async (req, res, next) => {
    try {
        const { compare, sign, jwt_secret } = require("../../config")
        const { user } = require("../../model/index")

        const validation = require("../../validation/index").user.login
        const data = req.body
        const { error, value } = validation.validate(data)

        if (!error) {
            const { username, password } = value
            const USER = await user.findOne({ username })

            if (USER) {
                const isCorrect = await compare(password, USER.password)

                if (isCorrect) {
                    const obj = USER.toObject()
                    delete obj.password
                    const token = await sign(obj, jwt_secret)
                    res
                        .status(200)
                        .send({ "Login Succesful" : token })
                }
            }
            
        }

    }
    catch (error) {
        console.error(error)
    }
}