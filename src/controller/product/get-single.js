module.exports = async (req, res, next) => {
    try {
        const data = req.body
        res.status(200).send(data)
    }
    catch (error) {
        console.error(error)
    }
}