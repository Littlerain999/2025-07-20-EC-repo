const { express } = require("../config");
const controller = require("../controller/index")

const router = express.Router()

router.post("/sign-up", controller.user.signUp)

router.post("/login", controller.user.login)

module.exports = router