const { product } = require("../../model/index")

module.exports = async (req, res, next) => {
    try {
        const data = req.body
        data.productOf = req.user
        const validation = require("../../validation/index").product.create
        const { error, value } = validation.validate(data)

        if (!error) {
            const item = await product.create(value)
            res.status(200).send("Producted Created Successfully")
        } else {
            res.status(200).send({"Failed": error.message})
        }
    }
    catch (err) {
        console.error(err)
    }
}