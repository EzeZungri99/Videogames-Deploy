const first15 = require("../utils/first(15)ForQuery")
const axios = require ("axios")
const filterApi = require("../utils/filterApi")
const firstForQuery = async (req, res) =>{
    
    try{ 
        const {name} = req.query;

        const busqueda15 = await axios.get(
            `https://api.rawg.io/api/games?search=${name}&key=38fb902304f94ef6a139f69ea8c6ff19`
            );

        const busquedaFilter = await filterApi(busqueda15.data.results)

        res.status(200).send(busquedaFilter)
    }
    catch(error){
        res.status(400).send({error: error.message})
    }
}

module.exports = firstForQuery