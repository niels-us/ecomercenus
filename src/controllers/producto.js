const { pool } = require("../databases/conexion");

const getProducto = async (req, res) => {
  const response = await pool.query("select * from tienda_producto");
  res.status(200).json({
    status: true,
    content: response.rows,
  });
};

const getProductoId = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query(
    "select * from tienda_producto where id=$1",
    [id]
  );
  res.status(201).json({
    status: true,
    content: response.rows,
  });
};

const createProducto = async (req, res) => {
  const {
    nombre,
    descripcion,
    precio_venta,
    stock,
    imagen,
    estado,
    categoria_id,
    moneda_id,
    proveedor_id,
    unidad_medida_id,
  } = req.body;

  const response = await pool.query(
    "insert into tienda_producto(nombre,descripcion,precio_venta,stock,imagen,estado,categoria_id, moneda_id,proveedor_id,unidad_medida_id) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
    [
      nombre,
      descripcion,
      precio_venta,
      stock,
      imagen,
      estado,
      categoria_id,
      moneda_id,
      proveedor_id,
      unidad_medida_id,
    ]
  );

  res.status(202).json({
    status: true,
    content: "Producto registrado",
  });
};

const updateProducto = async (req, res) => {
  const id = req.params.id;
  const {
    nombre,
    descripcion,
    precio_venta,
    stock,
    imagen,
    estado,
    categoria_id,
    moneda_id,
    proveedor_id,
    unidad_medida_id,
  } = req.body;

  const response = await pool.query(
    "update tienda_producto set nombre=$1,descripcion=$2,precio_venta=$3,stock=$4,imagen=$5,estado=$6,categoria_id=$7, moneda_id=$8,proveedor_id=$9,unidad_medida_id=$10 where id=$11",
    [
      nombre,
      descripcion,
      precio_venta,
      stock,
      imagen,
      estado,
      categoria_id,
      moneda_id,
      proveedor_id,
      unidad_medida_id,
      id,
    ]
  );

  res.status(203).json({
    status: true,
    content: `El producto ${id} actualizado`,
  });
};

const deleteProducto = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("delete from tienda_producto where id=$1", [
    id,
  ]);
  res.status(204).json({
    status: true,
    content: `El producto ${id} eliminado`,
  });
};

module.exports = {
  getProducto,
  getProductoId,
  createProducto,
  updateProducto,
};
