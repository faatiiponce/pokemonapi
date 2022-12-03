const { Router } = require("express");
const typesRouter = require("../routes/type.js");
const pokemonsRouter = require("../routes/pokemon.js");
const router = Router();

router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);

module.exports = router;
