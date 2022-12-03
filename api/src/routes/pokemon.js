const { Router } = require("express");
const {
  allPokemon,
  pokeId,
  pokeName,
  postDBPoke,
} = require("../controllers/ControllerPokemon");
const { Pokemon } = require("../db");
const router = Router();

//ruta a pokemons y pokemons/?name
router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(200).send(await allPokemon()); // trae todos los pokemons
    } else {
      const notFoundPoke = await pokeName(name);
      if (notFoundPoke) {
        return res.status(200).json(notFoundPoke);
      }
    }
  } catch (error) {
    return res.status(404).send("Pokemon no encontrado :(");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const foundID = await pokeId(id);
    if (foundID) return res.status(200).json(foundID);
  } catch (error) {
    return res.status(404).send("Pokemon no encontrado :(");
  }
});

router.post("/", async (req, res) => {
  try {
    const dataPokemon = req.body;
    await postDBPoke(dataPokemon);
    return res.status(200).send("Pokemon creado con éxito :)");
  } catch (error) {
    res.status(400).send("Fallo al crear pokemon :(");
  }
});

router.post("/delete/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const result = await Pokemon.destroy({
      where: { name: `${name}` },
    });
    res.status(201).send("Pokemon eliminado con éxito");
  } catch (error) {
    res.status(404).send(`Error al eliminar: ${error}`);
  }
});

module.exports = router;
