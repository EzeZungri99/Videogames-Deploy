const axios = require("axios")
const allVideogames = require ("../utils/allVideogames")


const allGames = async (req, res) => {
    try{
        const videogamesAll = await allVideogames()

    res.status(200).send(videogamesAll)}
    catch(error){res.status(400).send({error:error.message})}


    
}


module.exports= allGames