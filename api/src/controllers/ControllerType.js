const axios = require("axios");
const { Type } = require("../db");
const { TYPE_POKEMON } = require("../utils/utils");

const totalTypes = async () => {
  try {
    const foundDBTypes = await Type.findAll({
      attributes: ["name"],
    });
    if (foundDBTypes.length === 0) {
      const typesApi = await axios.get(TYPE_POKEMON);
      let typesCreate = typesApi.data.results.map((type) =>
        Type.create({ name: type.name })
      ); //guarda type en DB
      typesCreate = await axios.all(typesCreate);
      const typesPokeApi = allTypes(typesCreate);
      return typesPokeApi;
    } else {
      const typePokeDB = allTypes(foundDBTypes);
      return typePokeDB;
    }
    function allTypes(array) {
      let types = array.map((type) => type.name);
      return types;
    }
  } catch (error) {
    return error;
  }
};

module.exports = {
  totalTypes,
};
