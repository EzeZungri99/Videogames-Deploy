const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    platforms: { type: DataTypes.STRING },
    background_image: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    rating: { type: DataTypes.STRING },
    released: { type: DataTypes.STRING },
  },{timestamps:false});
  
};
