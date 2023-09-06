const axios = require("axios");



const filterApi = async (arr) => {
const filterGame = await arr.map((e) => {
    return { id: e.id,
      name: e.name,
      genres: e?.genres?.map((g) => g?.name),
      platforms: e?.platforms?.map((p) => p.platform?.name),
      image: e.background_image,
      rating: e.rating,
         }});

  return filterGame;}

module.exports = filterApi