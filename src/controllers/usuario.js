const { pool } = require('../databases/conexion')
const jwt = require("jsonwebtoken");

const getLogin = async (req, res) => {
  const { username, clave } = req.body;

  const response = await pool.query(
    "select * from tienda_usuario where username=$1 and clave=$2",
    [username, clave]
  );

  if (response.rowCount > 0) {
    const payload = { content: response.rows };

    const token = jwt.sign(payload, 'key_secret');
    res.status(200).json({
      mensaje: "Autenticación correcta",
      token: token,
      content: response.rows
    });
  } else {
    res.status(400).json({ mensaje: "Usuario o contraseña incorrectos" });
  }
};

const getUsuario = async (req, res) => {
  const response = await pool.query("select * from tienda_usuario");
  res.status(200).json({
    status: true,
    content: response.rows,
  })
}

const getUsuarioId = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query(
    "select * from tienda_usuario where id=$1",
    [id]
  )
  res.status(201).json({
    status: true,
    content: response.rows,
  })
}

const createUsuario = async (req, res) => {
  const {
    nombre,
    numro_documento,
    direccion,
    telefono,
    email,
    username,
    clave,
    estado,
    rol_id,
    tipo_documento_id,
    tipo_usuario_id,
  } = req.body;

  const response = await pool.query(
    "insert into tienda_usuario(nombre,numro_documento,direccion,telefono,email,username,clave,estado,rol_id,tipo_documento_id,tipo_usuario_id) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",
    [
      nombre,
      numro_documento,
      direccion,
      telefono,
      email,
      username,
      clave,
      estado,
      rol_id,
      tipo_documento_id,
      tipo_usuario_id,
    ]
  )

  res.status(202).json({
    status: true,
    content: "Usuario registrado",
  })
}

const updateUsuario = async (req, res) => {
  const id = req.params.id;
  const {
    nombre,
    numro_documento,
    direccion,
    telefono,
    email,
    username,
    clave,
    estado,
    rol_id,
    tipo_documento_id,
    tipo_usuario_id
  } = req.body
  const response = await pool.query(
    "update tienda_usuario set nombre=$1,numro_documento=$2,direccion=$3,telefono=$4,email=$5,username=$6,clave=$7,estado=$8,rol_id=$9,tipo_documento_id=$10,tipo_usuario_id=$11 where id=$12",
    [
      nombre,
      numro_documento,
      direccion,
      telefono,
      email,
      username,
      clave,
      estado,
      rol_id,
      tipo_documento_id,
      tipo_usuario_id,
      id
    ]
  )
  res.status(203).json({
    status: true,
    content: `El usuario ${id} Actualizado`,
  })
}

const deleteUsuario = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("delete from tienda_usuario where id=$1", [
    id,
  ]);
  res.status(204).json({
    status: true,
    content: `El usuario ${id} Eliminado`,
  });
};

module.exports = {
  getUsuario,
  createUsuario,
  getUsuarioId,
  deleteUsuario,
  updateUsuario,
  getLogin
}
