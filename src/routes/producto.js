const { Router } = require("express");
const { getProducto, getProductoId, createProducto, updateProducto } = require("../controllers/producto");
const { deleteUsuario } = require("../controllers/usuario");
const router = Router();


router.get("/producto",getProducto)
router.get("/producto/:id",getProductoId)
router.post("/producto",createProducto)
router.put("/producto/:id",updateProducto)
router.delete("/producto/:id",deleteUsuario)

module.exports=router