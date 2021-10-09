const { Router } = require("express");
const { getTipoComprobante } = require("../controllers/tipocomprobante");
const router = Router();

router.get("/tipocomprobante",getTipoComprobante)

module.exports = router