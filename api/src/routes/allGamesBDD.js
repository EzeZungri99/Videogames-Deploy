const {Router} = require("express")
const allGamesBDDc =require("../controllers/allGamesBDD")

const router = Router()

router.get("/videogamesBDD", allGamesBDDc)



module.exports = router