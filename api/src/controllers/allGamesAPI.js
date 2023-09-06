const axios = require("axios")
const allGamesApi = require ("../utils/allGamesApi")
const filterApi = require("../utils/filterApi")


const allGamesAPIc = async (req, res) => {
    try{
        const allVideogamesApi = await allGamesApi()
        const allVideogamesFilter = await filterApi(allVideogamesApi)

    res.status(200).send(allVideogamesFilter)}
    catch(error){res.status(400).send({error:error.message})}


    
}


module.exports= allGamesAPIc