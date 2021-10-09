const { pool } = require("../databases/conexion");

const getTipoUsuario = async (req, res) => {
  const response = await pool.query("select * from tienda_tipousuario");
  res.status(200).json({
    status: true,
    content: response.rows,
  });
};

module.exports = {
getTipoUsuario
};