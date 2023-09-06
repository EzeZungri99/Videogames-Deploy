const {Router} = require("express")
const allGames =require("../controllers/allGames")

const router = Router()

router.get("/videogames", allGames)



module.exports = router