import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { NavLink, useHistory  } from "react-router-dom";
import { agregarProductoAlCarrito } from "../../../redux/actions/carritoAction";
import { agregarProductoAlfavorito } from "../../../redux/actions/favoritoAction";
import TiendaModalProducto from "./TiendaModalProducto";

const TiendaProductos = ({ objproducto }) => {

  const dispatch = useDispatch();
  const [mostrar, setMostrar] = useState(false);
  
  let history = useHistory();

  const agregarFavorito = () => {
    dispatch(agregarProductoAlfavorito(objproducto));
    Swal.fire({
      title: "Se agrego a Favoritos, Deseas ir a Favoritos?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "SI",
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        history.push("/favorito/favorito"); 
      }
    });
  };

  const agregarProducto = () => {
    dispatch(agregarProductoAlCarrito(objproducto));   
    Swal.fire({
      title: "Se agrego al Carrito, Deseas ir al Carrito?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "SI",
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        history.push("/Carrito/Carrito");
      }
    });
  };

  return (
    <>
      <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
        <div className="sectgl prod-i">
          <div className="prod-i-top">
            <NavLink
              to="#"
              className="prod-i-img"
              onClick={() => {
                setMostrar(true);
              }}>
              <img src={`https://res.cloudinary.com/soluciones-informaticas-nus/` + objproducto.imagen} alt="" />
            </NavLink>
            <div className="prod-i-actions">
              <p className="prod-li-favorites">
                {/* <a href="wishlist.html" className="hover-label add_to_wishlist">
                  <i className="icon ion-heart"></i>
                  <span>Add to Wishlist</span>
                </a> */}
                <NavLink to="#" className="hover-label prod-addbtn">
                  <i
                    className="icon ion-heart"
                    onClick={agregarFavorito}
                  ></i>
                  <span>to wishlist</span>
                </NavLink>
              </p>
              <p className="prod-quickview">
                <NavLink
                  to="#"
                  className="hover-label"
                  onClick={() => {
                    setMostrar(true);
                  }}
                >
                  <i className="icon ion-plus"></i>
                  <span>Quick View</span>
                </NavLink>
              </p>
              <p className="prod-i-cart">
                <NavLink to="#" className="hover-label prod-addbtn">
                  <i
                    className="icon ion-android-cart"
                    onClick={agregarProducto}
                  ></i>
                  <span>Add to Cart</span>
                </NavLink>
              </p>
              {/* <p className="prod-li-compare">
                <a
                  href="compare.html"
                  className="hover-label prod-li-compare-btn"
                >
                  <span>Compare</span>
                  <i className="icon ion-arrow-swap"></i>
                </a>
              </p> */}
            </div>
            <p className="prod-i-badge">
              <span className="badge-1">Oferta 25%</span>
            </p>
          </div>
          <div className="prod-i-bot">
            <div className="prod-i-info">
              <p className="prod-i-price">${objproducto.precio_venta}</p>
              <p className="prod-i-categ">
                <a href="catalog-gallery.html"></a>
              </p>
            </div>
            <h3 className="prod-i-ttl">
              <NavLink
                to="#"
                className="hover-label"
                onClick={() => {
                  setMostrar(true);
                }}
              >
                {objproducto.nombre}
              </NavLink>
            </h3>
          </div>
        </div>

        <TiendaModalProducto
          mostrar={mostrar}
          setMostrar={setMostrar}
          objproducto={objproducto}
        />
      </article>
    </>
  );
};

export default TiendaProductos;
