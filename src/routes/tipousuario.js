const { Router } = require("express");
const { getTipoUsuario } = require("../controllers/tipousuario");
const router = Router();

router.get("/tipousuario", getTipoUsuario)

module.exports = router