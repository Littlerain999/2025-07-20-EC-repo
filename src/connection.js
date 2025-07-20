module.exports = async function (app) {
    try {
        const { mongoose, database, port } = require("./config")
        mongoose.connect(database)
            .then(function () {
                console.log("Connection [success]")
                
                app.listen(port, function () {
                    console.log(`Server [active] { ${port} }`)
                })
            })
    }
    catch (error) {
        console.error(error)
    }
}