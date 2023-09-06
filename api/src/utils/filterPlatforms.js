const axios = require("axios");


const filterPlatform = async (arr) => {

  const filterPlatform = await arr.map((e) => {
    return { 
      platforms: e?.platforms?.map((p) => p.platform?.name),
    
         }});

  return filterPlatform;}
;

module.exports = filterPlatform