import React from "react";

const TiendaVistaProducto = ({objproducto}) => {
  return (
    <>
      <li>
        <a href="#" className="remove">
          &times;
        </a>
        <a href="#">
          <img src={objproducto.imagen} alt="" />
          {objproducto.descripcion}
        </a>
        <span className="quantity">{objproducto.cantidad} &times; ${objproducto.precio}</span>
      </li>
  
    </>
  );
};

export default TiendaVistaProducto;
