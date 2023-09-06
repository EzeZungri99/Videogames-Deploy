const allVideogames = require("./allVideogames")



const first15= async (expresionReg) =>{

    const all = await allVideogames()
  
    
    const busqueda =  all.filter((videogame)=>{
        if(expresionReg.test(videogame.name)){
          return videogame}}).slice(0, 15)
    console.log("esto es busqueda",busqueda)

    return busqueda
}
;
    

module.exports = first15