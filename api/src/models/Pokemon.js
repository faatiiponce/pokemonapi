const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 255 },
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 255 },
    },
    defending: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 255 },
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 255 },
    },
    height: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 255 },
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 255 },
    },
    sprite: {
      type: DataTypes.STRING,
      validate: { isUrl: true },
      defaultValue: "https://www.freeiconspng.com/img/45331",
    },
  });
};
