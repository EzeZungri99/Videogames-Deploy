const { Videogame, Genres } = require('../db')
const { v4: uuidv4 } = require('uuid');


const cVideogame = async (data) => {

    const game = await Videogame.create(data)

    const genresIds = data.genres.map(async (g) => {
    const  genre =await Genres.findAll({ where: { name: g } })
    const gameAndId = await game.addGenres(genre) 
  
  
  })


  
    return game
  }

  module.exports = cVideogame