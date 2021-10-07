const { Router } = require("express");
const { getDetalleVenta, getDetalleVentaId, createDetalleVenta } = require("../controllers/detalleventa");
const router = Router();

router.get("/detalleventa",getDetalleVenta)
router.get("/detalleventa/:id",getDetalleVentaId)
router.post("/detalleventa",createDetalleVenta)


module.exports = router