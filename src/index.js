const screen = require("./screen")

screen.clear(); screen.space(); screen.draw(); screen.space()

const app = require("./app")
const connection = require("./connection")
const router = require("./router/index")

connection(app)

app.use(router)