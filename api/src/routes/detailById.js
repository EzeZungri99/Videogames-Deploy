const {Router} = require("express")
const detailById =require("../controllers/detailById")

const router = Router()
router.get("/videogames/:id", detailById)

module.exports = router

