const { pool } = require("../databases/conexion");

const getVenta = async (req, res) => {
  const response = await pool.query("select * from tienda_venta");
  res.status(200).json({
    status: true,
    content: response.rows,
  });
};
const getVentaId = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("select * from tienda_venta where id=$1", [
    id,
  ]);
  res.status(201).json({
    status: true,
    content: response.rows,
  });
};

const createVenta = async (req, res) => {
  const {
    serie_comprobante,
    numero_comprobante,
    fecha,
    impuesto,
    total,
    estado,
    moneda_id,
    tipo_comprobante_id,
    usuario_id,
  } = req.body;

  const response = await pool.query(
    "insert into tienda_venta(serie_comprobante,numero_comprobante,fecha,impuesto,total,estado,moneda_id,tipo_comprobante_id,usuario_id) values($1,$2,$3,$4,$5,$6,$7,$8,$9)",
    [
      serie_comprobante,
      numero_comprobante,
      fecha,
      impuesto,
      total,
      estado,
      moneda_id,
      tipo_comprobante_id,
      usuario_id,
    ]
  );

  res.status(202).json({
    status: true,
    content: "Venta registrada",
  });
};

module.exports = {
  getVenta,
  getVentaId,
  createVenta,
};
