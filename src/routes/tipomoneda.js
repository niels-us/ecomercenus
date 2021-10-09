const { Router } = require("express");
const { getTipoMoneda } = require("../controllers/tipomoneda");
const router = Router();

router.get("/tipomoneda",getTipoMoneda)

module.exports = router