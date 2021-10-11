import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import { useDispatch, useSelector } from "react-redux";
import CarritoResumen from "../components/CarritoResumen";
import ModalBoleta from "../components/ModalBoleta";
import CarritoTipoComprobante from "./CarritoTipoComprobante";
import CarritoTipoMoneda from "./CarritoTipoMoneda";
import Swal from "sweetalert2";
import { getTipoPago } from "../../../redux/actions/tipopagoAction";

const CarritoTipoPago = () => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);
  const { usu_nombre, usu_direc, usu_id } = useSelector((state) => state.login);

  const { tipomonedas } = useSelector((state) => state.tipomoneda);
  const { tipocomprobantes } = useSelector((state) => state.tipocomprobante);

  const [datosTipoPago, setDatos] = useState({
    tipocomprobante: 0,
    tipomoneda: 0,
  });

  const handleInputChange = (e) => {
    setDatos({
      ...datosTipoPago,
      [e.target.name]: e.target.value,
    });
  };

  const registrarTipoPago = () => {
    // e.preventDefault();
    dispatch(getTipoPago(datosTipoPago));
  };

  let objActual = carrito.productos.map((data) => {
    return data;
  });

  const valor = () => {
    // if (usu_nombre != null || objActual.length>0) {
    //   return true;
    // } else {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Error!",
    //     text: `Tiene que iniciar sesión`,
    //   });
    //   return false;
    // }

    if (objActual.length > 0) {
      if (usu_nombre != null) {
        return true;
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: `Tienes que iniciar sesión`,
        });
        return false;
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: `Agregar productos al carrito`,
      });
      return false;
    }
  };

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
                <aside id="secondary" class="s-post page-styling">
                  <div class="blog-sb-widget">
                    <h3 class="widgettitle">Pago</h3>
                    <div class="section-sb-current">
                      <form>
                        <div class="form-group row">
                          <label
                            for="inputText1"
                            class="col-sm-3 col-form-label  text-muted"
                          >
                            Nombre
                          </label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              id="inputText1"
                              name="nombre"
                              value={usu_nombre}
                              readOnly
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
                            Dirección
                          </label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              id="inputText2"
                              name="nombre"
                              value={usu_direc}
                              readOnly
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
                            Tipo Comprobante
                          </label>
                          <div class="col-sm-9">
                            <select
                              className="form-select"
                              name="tipocomprobante"
                              onChange={handleInputChange}
                            >
                              <option selected>Seleccionar..</option>
                              {tipocomprobantes.map((objtipocomprobante) => {
                                return (
                                  <CarritoTipoComprobante
                                    objtipocomprobante={objtipocomprobante}
                                  />
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <br />
                        {/* AGREGO EL TIPO MONEDA Y TIPO COMPROBANTE */}
                        <div class="form-group row">
                          <label
                            for="inputText2"
                            class="col-sm-3 col-form-label  text-muted"
                          >
                            Tipo Moneda
                          </label>
                          <div class="col-sm-9">
                            <select
                              className="form-select"
                              name="tipomoneda"
                              onChange={handleInputChange}
                            >
                              <option selected>Seleccionar..</option>
                              {tipomonedas.map((objtipomoneda) => {
                                return (
                                  <CarritoTipoMoneda
                                    objtipomoneda={objtipomoneda}
                                  />
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <br />
                        <div class="form-group row">
                          <label
                            for="inputNumber3"
                            class="col-sm-3 col-form-label  text-muted"
                          >
                            N° Tarjeta
                          </label>
                          <div class="col-sm-9">
                            <input
                              type="text"
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
                            CVV
                          </label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              id="inputEmail3"
                              name="cvv"
                            />
                          </div>
                        </div>
                        <br />
                      </form>
                    </div>
                  </div>
                </aside>

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
                          setMostrar(valor);
                          registrarTipoPago();
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
