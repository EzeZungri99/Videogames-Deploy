const axios = require("axios")
const filterPlatform = require ("../utils/filterPlatforms")
const allGamesApi = require ("../utils/allGamesApi")
const platformUnique = require("../utils/platformsUnique")


const allPlatforms = async (req, res) => {
    try{
        const platformsArr = await allGamesApi()
        const filterPlat = await filterPlatform(platformsArr)
        const completeFilter = platformUnique(filterPlat)

        

    res.status(200).send(completeFilter)}
    catch(error){res.status(400).send({error:error.message})}


    
}


module.exports= allPlatforms