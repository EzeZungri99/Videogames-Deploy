const { Router } = require('express');
const videogames = require("./allGames.js")
const genreVideogames = require("./allGenreApi")
const createVideogame = require("./createVideogame")
const first15Query = require("./first(15)ForQuery")
const detailById = require("./detailById")
const videogamesApi = require("./allGamesAPI.js")
const videogamesBDD = require("./allGamesBDD.js")
const platformsVideogames = require("./allPlatforms.js")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/", videogames)
router.use("/", genreVideogames)
router.use("/", videogamesApi)
router.use("/", videogamesBDD)
router.use("/", platformsVideogames)

router.use("/", createVideogame)
router.use("/", first15Query)
router.use("/", detailById)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
