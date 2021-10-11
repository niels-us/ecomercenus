import React from "react";

const TiendaVistaProducto = ({ objproducto }) => {
  return (
    <>
      <li>
        <a href="#" className="remove">
          &times;
        </a>
        <a href="#">
          <img src={`https://res.cloudinary.com/soluciones-informaticas-nus/` + objproducto.imagen} alt="" />
          {objproducto.nombre}
        </a>
        <span className="quantity">
          {objproducto.cantidad} &times; ${objproducto.precio_venta}
        </span>
      </li>

     
    
    </>
  );
};

export default TiendaVistaProducto;
