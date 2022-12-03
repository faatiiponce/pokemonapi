const { Router } = require("express");
const { totalTypes } = require("../controllers/ControllerType");
const router = Router();

router.get("/", async (req, res) => {
  try {
    let actualTypes = await totalTypes();
    actualTypes = actualTypes.filter(
      (type) => type !== "unknown" && type !== "shadow"
    );
    return res.status(200).send(actualTypes);
  } catch (error) {
    return res.status(400).send("No se encontraron tipos");
  }
});

module.exports = router;
