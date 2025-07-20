const { express } = require("../config");
const controller = require("../controller/index")

const router = express.Router()

router.post("/", controller.category.create) // create category
router.get("/", controller.category.getAll) // get all categories
router.delete("/:id", controller.category.delete) // delete category


module.exports = router