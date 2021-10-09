const { Router } = require("express");
const { getTipoDocumento } = require("../controllers/tipodocumento");
const router = Router();

router.get("/tipodocumento",getTipoDocumento)

module.exports = router