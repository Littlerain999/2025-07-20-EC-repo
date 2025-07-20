const { express } = require("../config");
const controller = require("../controller/index")
const { hasToken } = require("../middleware/index")

const router = express.Router()

router.post("/", hasToken, controller.product.create) // create product
router.get("/", controller.product.getAll) // get all products
router.get("/:id", controller.product.getOne) // get single product
router.patch("/:id", controller.product.update) // update product
router.delete("/:id", controller.product.delete) // delete product

module.exports = router