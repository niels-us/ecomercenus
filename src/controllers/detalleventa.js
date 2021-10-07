const { pool } = require("../databases/conexion");

const getDetalleVenta = async (req, res) => {
  const response = await pool.query("select * from tienda_detalleventa");
  res.status(200).json({
    status: true,
    content: response.rows,
  });
};

const getDetalleVentaId = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query(
    "select * from tienda_detalleventa where ventas_id=$1",
    [id]
  );
  res.status(201).json({
    status: true,
    content: response.rows,
  });
};

const createDetalleVenta = async (req, res) => {
  const { cantidad, precio, descuento, producto_id, ventas_id } = req.body;

  const response = await pool.query(
    "insert into tienda_detalleventa(cantidad, precio, descuento, producto_id, ventas_id) values($1,$2,$3,$4,$5)",
    [cantidad, precio, descuento, producto_id, ventas_id]
  );

  res.status(202).json({
    status: true,
    content: "Detalle de la venta registrada",
  });
};

module.exports = {
  getDetalleVenta,
  getDetalleVentaId,
  createDetalleVenta,
};
