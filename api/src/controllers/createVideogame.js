const axios = require("axios")
const cVideogame = require("../utils/create.js")
const { Videogame, Genres } = require('../db')
const { v4: uuidv4 } = require('uuid');


const createVideogame = async (req, res) => {
  try {
    const { name, rating, description, background_image,image, platforms, released, genres } = req.body;

    // Generar un nuevo UUID para el ID del videojuego
    const id = uuidv4();
    let plataformas =platforms.join(",")

    // Crear una nueva instancia del modelo Videogame con los datos proporcionados
      const newVideogame = cVideogame({
      id,
      name,
      rating,
      description,
      background_image,
      image,
      platforms:plataformas,
      released,
      genres
    });


    res.status(201).send(newVideogame);
  } catch (error) {
    console.error('Error al crear el videojuego:', error);
    res.status(500).json({ error: error.message });
  }
};
module.exports= createVideogame 











