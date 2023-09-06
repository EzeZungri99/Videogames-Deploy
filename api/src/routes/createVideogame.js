const {Router} = require("express")
const createVideogame = require ("../controllers/createVideogame")


const router = Router()


router.post("/videogames", createVideogame)

module.exports = router