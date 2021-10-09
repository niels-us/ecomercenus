const { pool } = require("../databases/conexion");

const getCategoria = async (req, res) => {
  const response = await pool.query("select * from tienda_categoria");
  res.status(200).json({
    status: true,
    content: response.rows,
  });
};

const getCategoriaId = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query(
    
    // "select * from tienda_categoria where id=$1",
    // "SELECT * FROM tienda_categoria INNER JOIN tienda_producto ON tienda_categoria.id=tienda_producto.categoria_id where tienda_categoria.id=$1",
    // "select p.*,c.id as categoria_id,c.nombre as categoria_nombre from tienda_producto p inner join tienda_categoria c on p.categoria_id = c.id where p.categoria_id=$1",
    "select p.*,c.nombre as cat_nom, c.descripcion as cat_des from tienda_producto p inner join tienda_categoria c on p.categoria_id = c.id where p.categoria_id=$1",
    
    [id]
  );  
  res.status(201).json({
    status: true,
    content: response.rows,
  });
};

const createCategoria = async (req, res) => {
  const { nombre, descripcion, estado } = req.body;

  const response = await pool.query(
    "insert into tienda_categoria(nombre,descripcion,estado) values($1,$2,$3)",
    [nombre, descripcion, estado]
  );

  res.status(202).json({
    status: true,
    content: "Categoria registrada",
  });
};

const updateCategoria = async (req, res) => {
  const id = req.params.id;
  const { nombre, descripcion, estado } = req.body;

  const response = await pool.query(
    "update tienda_categoria set nombre=$1,descripcion=$2,estado=$3 where id=$4",
    [nombre, descripcion, estado, id]
  );

  res.status(203).json({
    status: true,
    content: `El usuario ${id} Actualizado`,
  });
};

const deleteCategoria = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("delete from tienda_categoria where id=$1", [
    id,
  ]);
  res.status(204).json({
    status: true,
    content: `El usuario ${id} Eliminado`,
  });
};

module.exports = {
  getCategoria,
  getCategoriaId,
  createCategoria,
  updateCategoria,
  deleteCategoria
};
