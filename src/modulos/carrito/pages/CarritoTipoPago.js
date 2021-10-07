import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import { useDispatch, useSelector } from "react-redux";
import CarritoResumen from "../components/CarritoResumen";
import ModalBoleta from "../components/ModalBoleta";

const CarritoTipoPago = () => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);

  const [mostrar, setMostrar] = useState(false);
  return (
    <>
      <TiendaHeader />
      <div id="content" class="site-content">
        <div id="primary" class="content-area">
          <main id="main" class="site-main">
            <div class="cont maincont">
              <h1 class="maincont-ttl">Detalles</h1>
              <ul class="b-crumbs">
                <li>
                  <NavLink to="/Tienda/Tienda">Inicico</NavLink>
                </li>
                <li>Datos Pago:</li>
              </ul>
              <div class="cont post-sidebar">
                {/* <aside id="secondary" class="s-post page-styling">
                  <div class="blog-sb-widget">
                    <h3 class="widgettitle">Pago</h3>
                    <div class="section-sb-current">
                      <form>
                        <div class="form-group row">
                          <label
                            for="inputText1"
                            class="col-sm-3 col-form-label  text-muted"
                          >
                            N° Tarjeta
                          </label>
                          <div class="col-sm-9">
                            <input
                              type="number"
                              class="form-control"
                              id="inputText1"
                              name="ntarjeta"
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div class="form-group row">
                          <label
                            for="inputText2"
                            class="col-sm-3 col-form-label  text-muted"
                          >
                            CVV
                          </label>
                          <div class="col-sm-9">
                            <input
                              type="number  "
                              class="form-control"
                              id="inputText2"
                              name="nombre"
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div class="form-group row">
                          <label
                            for="inputNumber3"
                            class="col-sm-3 col-form-label  text-muted"
                          >
                            DNI
                          </label>
                          <div class="col-sm-9">
                            <input
                              type="number"
                              class="form-control"
                              id="inputNumber3"
                              name="dni"
                            />
                          </div>
                        </div>
                        <br />
                        <div class="form-group row">
                          <label
                            for="inputEmail3"
                            class="col-sm-3 col-form-label  text-muted"
                          >
                            Correo
                          </label>
                          <div class="col-sm-9">
                            <input
                              type="email"
                              class="form-control"
                              id="inputEmail3"
                              name="email"
                            />
                          </div>
                        </div>
                        <br />
                        <div class="form-group row">
                          <label
                            for="inputNumber3"
                            class="col-sm-3 col-form-label  text-muted"
                          >
                            Telefono
                          </label>
                          <div class="col-sm-9">
                            <input
                              type="number"
                              class="form-control"
                              id="inputNumber3"
                              name="telefono"
                            />
                          </div>
                        </div>
                        <br />
                      </form>
                    </div>
                  </div>
                </aside> */}

                <aside id="secondary" class="blog-sb blog-sb-widgets">
                  <div class="blog-sb-widget">
                    <h3 class="widgettitle">Resumen</h3>
                    <div class="section-sb-current">
                      <ul class="section-sb-list">
                        {carrito.productos.map((objproducto) => {
                          return (
                            <CarritoResumen
                              objproducto={objproducto}
                              key={objproducto.id}
                            />
                          );
                        })}
                      </ul>
                    </div>
                    {/* <div className="widget_shopping_cart">
                      <div className="widget_shopping_cart_content">
                        <ul className="cart_list">
                          {carrito.productos.map((objproducto) => {
                            return (
                              <CarritoResumen objproducto={objproducto} />
                            );
                          })}
                        </ul>
                        <p className="total">
                          <b>Subtotal:</b> $.{carrito.total}
                        </p>
                        <p className="buttons">
                          <a href="cart.html" className="button">
                            View cart
                          </a>

                          <a href="checkout.html" className="button">
                            Checkout
                          </a>
                        </p>
                      </div>
                    </div> */}
                  </div>
                  <div class="blog-sb-widget">
                    <h2>Payments</h2>
                    <div class="content">
                      <div class="checkbox">
                        <label class="checkbox-inline" for="1">
                          <input name="updates" id="1" type="checkbox" /> Check
                          Payments
                        </label>
                        <label class="checkbox-inline" for="2">
                          <input name="news" id="2" type="checkbox" /> Cash On
                          Delivery
                        </label>
                        <label class="checkbox-inline" for="3">
                          <input name="news" id="3" type="checkbox" /> PayPal
                        </label>
                        <br />
                        <br />
                      </div>
                      <img
                        src="https://www.paypalobjects.com/marketing/web/mx/logos-buttons/tarjetas_BTN.png"
                        alt="Check out with PayPal"
                      />
                    </div>
                    <div class="blog-sb-widget">
                      <button
                        className="btn"
                        onClick={() => {
                          setMostrar(true);
                        }}
                      >
                        Pagar
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </main>
        </div>
        <ModalBoleta
          mostrar={mostrar}
          setMostrar={setMostrar}
          //datos={datos}
        />
      </div>
      <TiendaFooter />
    </>
  );
};

export default CarritoTipoPago;
