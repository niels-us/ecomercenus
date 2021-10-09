const { pool } = require("../databases/conexion");

const getTipoComprobante = async (req, res) => {
    const response = await pool.query("select * from tienda_tipocomprobante");
    res.status(200).json({
      status: true,
      content: response.rows,
    });
  };

  module.exports = {
    getTipoComprobante
   
  };