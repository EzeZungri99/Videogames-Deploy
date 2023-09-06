const {Router} = require("express")
const allGenreApi =require("../controllers/allGenreApi")

const router = Router()

router.get("/genres", allGenreApi)

module.exports = router