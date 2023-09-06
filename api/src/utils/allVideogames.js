const allGamesApi = require("./allGamesApi")
const allGamesBdd = require ("./allGamesBdd")
const filterApi = require("./filterApi")

const allVideogames = async () => {
const apiGames = await allGamesApi()
const apiGamesFilter = await filterApi(apiGames)
const bddGames = await allGamesBdd()
const all = bddGames.concat(apiGamesFilter)
return all}

module.exports = allVideogames

