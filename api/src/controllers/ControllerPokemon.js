const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { POKEMON_API, ID_NAME_POKEMON } = require("../utils/utils");

const getApi = async () => {
  try {
    const PokemonsTotal = await axios.get(POKEMON_API);
    const PokemonsTotal2 = PokemonsTotal.data.results.map((ele) =>
      axios.get(ele.url)
    );
    const PokemonsInfo = await axios.all(PokemonsTotal2); //realiza solicitudes simultaneas

    let pokemons = PokemonsInfo.map((ele) => ele.data);
    let PokemonsData = pokemons.map((ele) => objApi(ele));
    return PokemonsData;
  } catch (error) {
    return error;
  }
};

const getDB = async () => {
  try {
    return await Pokemon.findAll({
      //va a traer los pokemones, que incluyan type y el name de type
      include: {
        model: Type,
        attributes: ["name"],
      },
    });
  } catch (error) {
    return error;
  }
};

const allPokemon = async () => {
  try {
    const pokemonDB = await getDB();
    const pokemonApi = await getApi();

    //console.log(pokemonApi);

    return [...pokemonDB, ...pokemonApi];
  } catch (error) {
    return error;
  }
};

const pokeId = async (id) => {
  try {
    if (id.length > 2) {
      const searchId = await Pokemon.findOne({ where: { id }, include: Type });
      let pokeId = {
        id: searchId.id,
        name: searchId.id,
        life: searchId.id,
        attack: searchId.attack,
        defense: searchId.defense,
        speed: searchId.speed,
        height: searchId.height,
        weight: searchId.weight,
        sprite: searchId.sprite,
        types:
          searchId.types.length < 2
            ? [searchId.types[0]]
            : [searchId.types[0], searchId.types[1]],
      };
      return pokeId;
    } else {
      const searchApiId = await axios.get(`${ID_NAME_POKEMON}${id.toString()}`);
      const foundApiId = objApi(searchApiId.data);

      return foundApiId;
    }
  } catch (error) {
    return error;
  }
};

const pokeName = async (name) => {
  try {
    const searchNameDB = await Pokemon.findOne({
      where: { name },
      include: { model: Type },
    });
    if (searchNameDB) {
      let nameDB = {
        id: searchNameDB.id,
        name: searchNameDB.name,
        life: searchNameDB.life,
        attack: searchNameDB.attack,
        defense: searchNameDB.defense,
        speed: searchNameDB.speed,
        height: searchNameDB.height,
        weight: searchNameDB.weight,
        sprite: searchNameDB.sprite,
        types:
          searchNameDB.types.length < 2
            ? [searchNameDB.types[0]]
            : [searchNameDB.types[0], searchNameDB.types[1]],
      };
      return nameDB;
    } else {
      const searchApiName = await axios.get(
        `${ID_NAME_POKEMON}${name.toLowerCase()}`
      );
      const foundApiName = objApi(searchApiName.data);
      return foundApiName;
    }
  } catch (error) {
    return error;
  }
};

const objApi = (poke) => {
  const objPokemon = {
    id: poke.id,
    name: poke.name,
    life: poke.stats[0].base_stat,
    attack: poke.stats[1].base_stat,
    defense: poke.stats[2].base_stat,
    speed: poke.stats[5].base_stat,
    height: poke.height,
    weight: poke.weight,
    sprite: poke.sprites.other["official-artwork"].front_default,
    types:
      poke.types.length < 2
        ? [{ name: poke.types[0].type.name }]
        : [
            { name: poke.types[0].type.name },
            { name: poke.types[1].type.name },
          ],
  };
  return objPokemon;
};

const postDBPoke = async (dataP) => {
  try {
    const {
      name,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      sprite,
      types,
    } = dataP;
    const myPokemon = await Pokemon.create({
      name,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      sprite,
    });
    const typeDb = await Type.findAll({
      where: { name: types },
    });

    let createPoke = myPokemon.addType(typeDb);
    return createPoke;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getApi,
  getDB,
  allPokemon,
  pokeId,
  pokeName,
  postDBPoke,
};
