module.exports = async (req, res, next) => {
    try {
        const data = req.body
        const user = req.user
        res.status(200).send({ user, data})
    }
    catch (error) {
        console.error(error)
    }
}