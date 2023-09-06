

export function displayGames(currentPage, videogames) {
  // Obtén los juegos para la página actual
  const startIndex = (currentPage - 1) * 15;
  const endIndex = startIndex + 15;

  const gamesToShow = videogames?.slice(startIndex, endIndex)/* Obtén los juegos correspondientes a la página actual */;

  return gamesToShow
}

