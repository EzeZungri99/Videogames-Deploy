const axios = require("axios")
const allGamesBdd = require ("../utils/allGamesBdd")


const allGamesBDDc = async (req, res) => {
    try{
        const allVideogamesBdd = await allGamesBdd()

    res.status(200).send(allVideogamesBdd)}
    catch(error){res.status(400).send({error:error.message})}


    
}


module.exports= allGamesBDDc