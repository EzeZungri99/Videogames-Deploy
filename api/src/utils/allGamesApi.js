const axios = require("axios");

const filterApi = require("./filterApi")

const allGamesApi = async () => {
  let arrGamesApi = [];

  for (let i = 1; i <= 5; i++) {
    apiUrl = await axios.get(
      `https://api.rawg.io/api/games?page=${i}&key=38fb902304f94ef6a139f69ea8c6ff19`
      );
      arrGamesApi = arrGamesApi.concat(apiUrl.data.results)
};return arrGamesApi}

 




module.exports = allGamesApi;

