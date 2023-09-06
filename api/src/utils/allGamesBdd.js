const axios = require("axios");
const { Videogame, Genres } = require('../db.js')

const allGamesBdd = async (id) =>{
    if(id){ let bdd = await Videogame.findByPk(id,{

        include: [Genres]

})

    const genresMapeado = bdd.genres.map((e)=>{
     return e.dataValues.name
    })
 let{genres,platforms,...videogameData} = bdd.dataValues
 genres=genresMapeado
 platforms = platforms?.split(",")



 return e ={...videogameData,platforms,genres}}
    else{
    let bdd = await Videogame.findAll({

        include: [Genres]
})

    const bddMapeado = bdd.map((e)=>{
        let {platforms,genres,...videogameData} = e.dataValues
        platforms = platforms?.split(",")
        genres = genres.map((e)=>{
            return e.name
        })
        return e ={...videogameData,platforms,genres}
    })
 
    return bddMapeado}
}

module.exports = allGamesBdd