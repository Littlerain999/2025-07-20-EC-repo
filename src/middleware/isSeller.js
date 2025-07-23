const { admin } = require("../config")

module.exports = async function (req, res, next) {
    try {
        if(req.user.role == admin) {
            console.log("IS seller");
            
            next()
        } else {
            res.status(403).send("Permission denied", req.user)
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Error")
    }
}