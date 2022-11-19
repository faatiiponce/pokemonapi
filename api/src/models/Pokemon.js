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
      type: DataTypes.STRING,
    },
    attack: {
      type: DataTypes.STRING,
    },
    defending: {
      type: DataTypes.STRING,
    },
    speed: {
      type: DataTypes.STRING,
    },
    height: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    sprite: {
      type: DataTypes.STRING,
      validate: { isUrl: true },
      defaultValue: "https://www.freeiconspng.com/img/45331",
    },
  });
};
