import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import CarritoProductos from "../components/CarritoProductos";


const CarritoCarrito = () => {

  const carrito = useSelector((state) => state.carrito);
  const { categorias } = useSelector((state) => state.categoria);

  return (
    <div id="page" className="site">

      <TiendaHeader categorias={categorias} />

      <div id="content" class="site-content">
        <div id="primary" class="content-area width-normal">
          <main id="main" class="site-main">
            <div class="cont maincont">
              <h1 class="maincont-ttl">Carrito</h1>
              <ul class="b-crumbs">
                <li>
                  <NavLink to="/Tienda/Tienda">Inicico</NavLink>
                </li>
                <li>Carrito</li>
              </ul>
              <div class="page-styling">
                <div class="woocommerce prod-litems section-list">

                  {
                    carrito.productos.map((objproducto) => {

                      return <CarritoProductos objproducto={objproducto} />


                    })


                  }

                </div>

                <div class="cart-actions">
                  <div class="coupon">
                    <input type="text" placeholder="Coupon code" />
                    <input type="submit" class="button" value="Apply" />
                  </div>
                  <div class="cart-collaterals">

                    <NavLink to="/Carrito/TipoPago" class="checkout-button button">
                      Proceed to checkout
                    </NavLink>
                    <div class="order-total">
                      <p class="cart-totals-ttl">Total</p>
                      <p class="cart-totals-val">$.{carrito.total} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <TiendaFooter />
    </div>
  );
};

export default CarritoCarrito;
