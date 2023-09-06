const axios = require("axios")
const {Videogame} = require("../db.js")
const allGamesBdd = require("./allGamesBdd.js")

const idApiOrBdd = async(id, source) => {
  
  const axel = source === "api"
  ? (await axios(`https://api.rawg.io/api/games/${id}?key=38fb902304f94ef6a139f69ea8c6ff19`)).data 
  : await allGamesBdd(id)

  console.log(idApiOrBdd)


    
  return axel
}

module.exports = idApiOrBdd