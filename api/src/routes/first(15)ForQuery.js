const {Router} = require("express")
const firstForQuery = require("../controllers/first(15)ForQuery")

const router = Router()

router.get("/videogames/name",firstForQuery )

module.exports = router