const axios = require("axios")
const {Videogame} = require("../db.js")
const idApiOrBdd = require("../utils/idApiorBdd.js")
const filterApi = require("../utils/filterApi.js")

const detailById = async (req, res) => {
    const {id} = req.params
    console.log("esto es el detail");

    const source = isNaN(id) ? "bdd" : "api";

    try{
        const gameForId = await idApiOrBdd(id, source)

   

        res.status(200).send(gameForId);}

    
     catch(error){
        res.status(400).send({error:error.message})}
    
}
module.exports= detailById