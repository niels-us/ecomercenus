import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarProductoAlCarrito } from "../../../redux/actions/carritoAction";
import TiendaModalProducto from "./TiendaModalProducto";

const TiendaProductos = ({ objproducto }) => {
  const dispatch = useDispatch();
  const [mostrar, setMostrar] = useState(false);
  const agregarProducto = () => {
    dispatch(agregarProductoAlCarrito(objproducto));
  };

  return (
    <>
      <TiendaModalProducto
        mostrar={mostrar}
        setMostrar={setMostrar}
        objproducto={objproducto}
      />
      <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
        <div className="sectgl prod-i">
          <div className="prod-i-top">
            {/* <a className="prod-i-img" href="product.html"> */}
            <img src={objproducto.imagen} alt="" />
            {/* </a> */}
            <div className="prod-i-actions">
              <div className="prod-i-actions-in">
                <p className="prod-li-favorites">
                  <a
                    href="wishlist.html"
                    className="hover-label add_to_wishlist"
                  >
                    <i className="icon ion-heart"></i>
                    <span>Add to Wishlist</span>
                  </a>
                </p>
                <p className="prod-quickview">
                  <a href="" className="hover-label quick-view">
                  <i className="icon ion-plus"></i>
                  <span>Quick View</span>

                  </a>
                </p>
                <p className="prod-i-cart">
                  <a href="#" className="hover-label prod-addbtn">
                    <i
                      className="icon ion-android-cart"
                      onClick={agregarProducto}
                    ></i>
                    <span>Add to Cart</span>
                  </a>
                </p>
                <p className="prod-li-compare">
                  <a
                    href="compare.html"
                    className="hover-label prod-li-compare-btn"
                  >
                    <span>Compare</span>
                    <i className="icon ion-arrow-swap"></i>
                  </a>
                </p>
              </div>
            </div>
            <p className="prod-i-badge">
              <span className="badge-1">Oferta 25%</span>
            </p>
          </div>
          <div className="prod-i-bot">
            <div className="prod-i-info">
              <p className="prod-i-price">${objproducto.precio}</p>
              <p className="prod-i-categ">
                <a href="catalog-gallery.html">{objproducto.descripcion}</a>
              </p>
            </div>
            <h3 className="prod-i-ttl">
              <a href="product.html">{objproducto.titulo}</a>
            </h3>
          </div>
        </div>
        {/* <button
          onClick={() => {
            setMostrar(true);
          }}
        >
          aqui
        </button> */}
      </article>
    
    
    </>
  );
};

export default TiendaProductos;
