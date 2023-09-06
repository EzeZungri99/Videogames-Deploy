const axios = require("axios")
const { Genres } = require('../db.js');


const allGenreApi = async (req, res) => {
    try{
      const existingGenres = await Genres.findAll()
      let yes = {}
      
      if(!existingGenres.length ){
  
        const info = await axios("https://api.rawg.io/api/genres?key=38fb902304f94ef6a139f69ea8c6ff19");
  
        const {data: {results}} = info
  
        const genresApi =results.map(({ id, name }) => ({ id, name }))
        yes = await Genres.bulkCreate(genresApi)
        

      }

    else{yes = existingGenres}


   

    res.status(200).json(yes)
    }
    catch(error){res.status(400).json({ err: error.message })}
}
module.exports= allGenreApi