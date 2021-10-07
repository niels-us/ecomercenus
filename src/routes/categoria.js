const { Router } = require("express")
const router = Router()
const { getCategoria, getCategoriaId, createCategoria, updateCategoria, deleteCategoria } = require("../controllers/categoria")


router.get("/categoria",getCategoria)
router.get("/categoria/:id",getCategoriaId)
router.post("/categoria",createCategoria)
router.put("/categoria/:id",updateCategoria)
router.delete("/categoria/:id",deleteCategoria)

module.exports = router