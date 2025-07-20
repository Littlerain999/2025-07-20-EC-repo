const { express } = require("./config")

const app = express()

app.use(express.json())


module.exports = app