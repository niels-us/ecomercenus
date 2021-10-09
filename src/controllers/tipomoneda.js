const { pool } = require("../databases/conexion");

const getTipoMoneda = async (req, res) => {
    const response = await pool.query("select * from tienda_moneda");
    res.status(200).json({
      status: true,
      content: response.rows,
    });
  };

  module.exports = {
    getTipoMoneda
   
  };