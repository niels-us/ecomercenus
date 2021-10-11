import React from "react";

const CarritoResumen = ({ objproducto }) => {
  return (
    <>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <img src={`https://res.cloudinary.com/soluciones-informaticas-nus/` + objproducto.imagen} alt="" width="50" />
        <small>{objproducto.nombre} </small>
        <span> {objproducto.cantidad}</span>
        <span> S/. {objproducto.precio_venta}</span>
      </li>
    </>
  );
};

export default CarritoResumen;
