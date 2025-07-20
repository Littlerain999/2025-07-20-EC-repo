const { express } = require("../config");
const Router = require("./router-class")

const router = express.Router()

const routers = [
    new Router("/user"),
    new Router("/product"),
    new Router("/category"),
]

module.exports = routers.map(el => router.use(el.path, el.router))
