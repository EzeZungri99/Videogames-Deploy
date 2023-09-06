const {Router} = require("express")
const allGamesAPIc =require("../controllers/allGamesAPI")

const router = Router()

router.get("/videogamesApi", allGamesAPIc)



module.exports = router