const { pool } = require("../databases/conexion");

const getTipoDocumento = async (req, res) => {
    const response = await pool.query("select * from tienda_tipodocumento");
    res.status(200).json({
      status: true,
      content: response.rows,
    });
  };

  module.exports = {
    getTipoDocumento
   
  };