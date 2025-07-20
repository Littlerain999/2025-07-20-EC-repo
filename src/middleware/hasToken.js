const { verify, jwt_secret } = require("../config")

module.exports = async function (req, res, next) {
    try {
        const token = req.headers?.authorization.split(" ")[1] || "empty"
        if (token) {
            const user = await verify(token, jwt_secret)
            req.user = user
            next()
        } else {
            res.status(403).send("Please Authenticate")
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send("Error")
    }
}