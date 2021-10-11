import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { eliminarProductoAlCarrito, restarProductoAlCarrito, sumarProductoAlCarrito } from "../../../redux/actions/carritoAction";
import { agregarProductoAlfavorito } from "../../../redux/actions/favoritoAction";

const CarritoProductos = ({ objproducto }) => {

  const dispatch = useDispatch();
  const eliminarProducto = () => {
    dispatch(eliminarProductoAlCarrito(objproducto));
  };
  const restarProducto = () => {
    dispatch(restarProductoAlCarrito(objproducto));
  };
  const sumarProducto = () => {
    dispatch(sumarProductoAlCarrito(objproducto));
  };

  const agregarFavorito = () => {
    dispatch(agregarProductoAlfavorito(objproducto));
  };

  return (
    <>
      <article class="prod-li sectls">
        <div class="prod-li-inner">
          <a href="product.html" class="prod-li-img">
            <img src={`https://res.cloudinary.com/soluciones-informaticas-nus/` + objproducto.imagen} alt="" />
          </a>
          <div class="prod-li-cont">
            <div class="prod-li-ttl-wrap">
              <p>
                <a href="#"></a>
              </p>
              <h3>
                <a href="product.html">{objproducto.nombre}</a>
              </h3>
            </div>

            <div class="prod-li-prices">
              <div class="prod-li-price-wrap">
                <p>Price</p>
                <p class="prod-li-price">${objproducto.precio_venta}</p>
              </div>
              <div class="prod-li-qnt-wrap">
                <p class="qnt-wrap prod-li-qnt">
                  <a href="#" class="qnt-plus prod-li-plus">
                    <i class="icon ion-arrow-up-b" onClick={sumarProducto}></i>
                  </a>
                  <input type="text" value={objproducto.cantidad} />
                  <a href="#" class="qnt-minus prod-li-minus">
                    <i class="icon ion-arrow-down-b" onClick={restarProducto}></i>
                  </a>
                </p>
              </div>
              <div class="prod-li-total-wrap">
                <p>Total</p>
                <p class="prod-li-total">S/.{objproducto.cantidad * objproducto.precio_venta}</p>
              </div>
            </div>
          </div>
          <div class="prod-li-info">
            <div class="prod-li-rating-wrap">
              <p data-rating="2" class="prod-li-rating">
                <i class="rating-ico" title="1"></i>
                <i class="rating-ico" title="2"></i>
                <i class="rating-ico" title="3"></i>
                <i class="rating-ico" title="4"></i>
                <i class="rating-ico" title="5"></i>
              </p>
              <p class="prod-li-rating-count">32</p>
            </div>
            <p class="prod-li-add">
              <a href="#" class="button hover-label prod-addbtn">
                <i class="icon ion-close-round" onClick={eliminarProducto} ></i>
                <span>Remove</span>
              </a>
            </p>
            {/* <p class="prod-li-compare">
              <a href="compare.html" class="hover-label prod-li-compare-btn">
                <span>Compare</span>
                <i class="icon ion-arrow-swap"></i>
              </a>
            </p> */}
            <p class="prod-quickview">
              <a href="#" class="hover-label quick-view">
                <i class="icon ion-plus"></i>
                <span>Quick View</span>
              </a>
            </p>
            <div class="prod-li-favorites">
              <NavLink to="#" className="hover-label add_to_wishlist">
                {/* <NavLink to="#" className="hover-label prod-addbtn"> */}
                <i
                  className="icon ion-heart"
                  onClick={agregarFavorito}
                ></i>
                <span>Add to Wishlist</span>
              </NavLink>
              {/* <a href="wishlist.html" class="hover-label add_to_wishlist">
                <i class="icon ion-heart"></i>
                <span>Add to Wishlist</span>
              </a> */}
            </div>
            <p class="prod-li-information">
              <a href="#" class="hover-label">
                <i class="icon ion-more"></i>
                <span>Show Information</span>
              </a>
            </p>
          </div>
          <p class="prod-li-badge">
            <span>Sale</span>
          </p>
        </div>
        <div class="page-styling prod-li-informations">
          <dl class="prod-li-props">
            <dt>Brand:</dt>
            <dd>
              <a href="#">{objproducto.nombre}</a>
            </dd>
            <dt>Peso:</dt>
            <dd>1 kg</dd>
            <dt>Dimensiones:</dt>
            <dd>4 x 50 cm</dd>
            <dt>Сolor:</dt>
            <dd>
              <a href="#">Negro</a>, <a href="#">Green</a>
            </dd>
            <dt>Pais::</dt>
            <dd>
              <a href="#">EEUU</a>
            </dd>
            <dt>Material:</dt>
            <dd>
              <a href="#">Metal</a>
            </dd>
          </dl>
        </div>
      </article>
    </>
  );
};

export default CarritoProductos;
