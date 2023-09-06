const {Router} = require("express")
const allPlatforms = require("../controllers/allPlatforms")

const router = Router()

router.get("/platforms", allPlatforms)

module.exports = router