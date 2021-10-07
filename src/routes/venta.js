const { Router } = require("express");
const router = Router();
const { getVenta, getVentaId, createVenta } = require("../controllers/venta");

router.get("/venta",getVenta)
router.get("/venta/:id",getVentaId)
router.post("/venta",createVenta)

module.exports = router