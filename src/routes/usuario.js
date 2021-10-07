const { Router } = require("express");
const router = Router();
const { getUsuario, createUsuario, getUsuarioId,deleteUsuario,updateUsuario } = require("../controllers/usuario");

router.get("/usuario", getUsuario)
router.get("/usuario/:id",getUsuarioId)
router.post("/usuario", createUsuario)
router.put("/usuario/:id",updateUsuario)
router.delete("/usuario/:id",deleteUsuario)

module.exports = router
