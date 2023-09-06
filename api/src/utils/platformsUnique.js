


const axios = require("axios");


const platformUnique = (arr) => {

    const platformsFilter = []


  
  arr.forEach(p => {p.platforms.forEach((p)=>{
    if(!platformsFilter.includes(p)){
        platformsFilter.push(p)
    }
  })

  });
  
return platformsFilter

}

module.exports = platformUnique


