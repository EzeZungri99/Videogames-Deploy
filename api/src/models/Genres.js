const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("genres", {
    id: {
       type: DataTypes.INTEGER,
       primaryKey: true, 
       autoIncrement: true },
    name: {
       type: DataTypes.STRING },
  },
  {timestamps:false}
  );
};
