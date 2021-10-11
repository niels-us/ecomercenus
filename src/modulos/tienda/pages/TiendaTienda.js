import React from "react";
import TiendaHeader from "../components/TiendaHeader";
import TiendaFooter from "../components/TiendaFooter";
import { useSelector } from "react-redux";
import TiendaProductos from "../components/TiendaProductos";
// import TiendaModalProducto from "../components/TiendaModalProducto";
import { NavLink } from "react-router-dom";
import TiendaSocialbar from "../components/TiendaSocialbar";
import TiendaBanner from "../components/tiendaBanner";

const TiendaTienda = () => {
  const { productos } = useSelector((state) => state.producto);
  const { categorias } = useSelector((state) => state.categoria);

  let mostratSlider = true;
  if (categorias.length > 0) {
    mostratSlider = false;
  }


  return (
    <>
      {/* <div id="page" className="site header-sticky"> */}
      {/* TiendaHeader */}
      <TiendaHeader categorias={categorias} />
      {/* <TiendaSocialbar/> */}
      <div id="content" className="site-content">
        <div id="primary" className="content-area width-full">
          <main id="main" className="site-main">
            <div className="maincont page-styling page-full">
              {/* <div
                  className="heroblock"
                  style={{
                    backgroundImage:
                      "url('https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275_960_720.jpg')",
                  }}
                >
                  <p className="heroblock-subttl">
                    <a href="catalog-gallery.html">Tienda Codigo</a>
                  </p>
                  <h3 className="heroblock-ttl">
                    Envío gratis a cualquier lugar
                  </h3>
                  <a href="catalog-gallery.html" className="btn">
                    Leer mas..
                  </a>
                </div> */}


              {mostratSlider ? <TiendaBanner /> : null}

              <div className="container mb60 page-styling row-wrap-container row-wrap-nottl">
                <p className="maincont-subttl">SPECIAL DEALS</p>
                <h2 className="mb35 heading-multishop">Nuestros Productos</h2>
                <ul class="b-crumbs">
                  <li>
                    <NavLink to="/tienda/tienda">Home</NavLink>
                  </li>
                  <li> Categoria</li>
                </ul>
                <div className="row prod-items prod-items-3">
                  {productos.map((objproducto) => {
                    return <TiendaProductos objproducto={objproducto} />;
                  })}
                </div>
                <p className="special-more">
                  <NavLink
                    to="/Producto/Producto"
                    className="special-more-btn"
                  >
                    Mostrar Mas Productos
                  </NavLink>
                </p>
              </div>

              <div className="container mb40 page-styling row-wrap-container row-wrap-nottl front-icons">
                <div className="row">
                  <div className="cf-lg-4 col-sm-4">
                    <div className="iconbox-item iconbox-i">
                      <div className="iconbox-i-top">
                        <p className="iconbox-i-img withimg">
                          <img src="img/1/front/1.png" alt="" />
                        </p>
                        <h3>Search!</h3>
                      </div>
                      <p>
                        Vivamus non viverra est. Suspendisse vitae tellus et
                        felis ullamcorper dapibus vitae sed dui. Donec
                        fringilla sollicitudin justo, in aliquet urna gravida
                        vitae.
                      </p>
                    </div>
                  </div>
                  <div className="cf-lg-4 col-sm-4">
                    <div className="iconbox-item iconbox-i">
                      <div className="iconbox-i-top">
                        <p className="iconbox-i-img withimg">
                          <img src="img/1/front/2.png" alt="" />
                        </p>
                        <h3>Order!</h3>
                      </div>
                      <p>
                        Etiam malesuada lacus non nulla venenatis, vel maximus
                        lacus porttitor. Suspendisse consectetur nec velit in
                        efficitur. Suspendisse cursus gravida felis
                      </p>
                    </div>
                  </div>
                  <div className="cf-lg-4 col-sm-4">
                    <div className="iconbox-item iconbox-i">
                      <div className="iconbox-i-top">
                        <p className="iconbox-i-img withimg">
                          <img src="img/1/front/3.png" alt="" />
                        </p>
                        <h3>Get it!</h3>
                      </div>
                      <p>
                        Aenean vulputate blandit dolor, in porta dolor
                        ullamcorper in. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Suspendisse vel commodo
                        ante.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="page-styling row-wrap-full front-image-half">
                <section className="image-half image-half-right">
                  <div
                    className="image-half-img"
                    style={{
                      backgroundImage:
                        "url(https://mk0cazaofertassmxlbf.kinstacdn.com/wp-content/uploads/2020/05/Intercompras-Hot-180520.png)",
                    }}
                  >
                    <img src="http://placehold.it/1006x498" alt="" />
                  </div>
                  <div className="cont image-half-cont">
                    <div className="image-half-inner">
                      <p className="maincont-subttl">Best sellers</p>
                      <h2>Best MultiShop Offers</h2>
                      <div className="wpb_text_column wpb_content_element ">
                        <div className="wpb_wrapper">
                          <p>
                            Phasellus rhoncus, dolor ac venenatis cursus,
                            lacus tellus gravida ipsum, at maximus est diam ut
                            tellus. Nunc ut risus sem.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="page-styling row-wrap-full front-image-half">
                <section className="image-half image-half-left">
                  <div
                    className="image-half-img"
                    style={{
                      backgroundImage:
                        "url(https://mk0cazaofertassmxlbf.kinstacdn.com/wp-content/uploads/2020/05/RadioShack-Hor-250520-01.jpg)",
                    }}
                  >
                    <img src="http://placehold.it/1006x498" alt="" />
                  </div>
                  <div className="cont image-half-cont">
                    <div className="image-half-inner">
                      <h2>Construction Tools for Sale</h2>
                      <form
                        action="#"
                        method="post"
                        className="mb55 wpcf7 wpcf7-form"
                      >
                        <p className="form-submit">
                          <span className="wpcf7-form-control-wrap">
                            <input
                              type="email"
                              placeholder="E-mail address"
                            />
                          </span>
                          <input type="submit" value="Get a Free Bonus" />
                        </p>
                      </form>
                    </div>
                  </div>
                </section>
              </div>

              <div className="page-styling row-wrap-full align-center front-title-block">
                <h2>Estas listo para empezar</h2>
                <a className="mb40 btn-multishop" href="catalog-gallery.html">
                  Compra Ahora
                </a>
              </div>

              <div className="container page-styling row-wrap-container row-wrap-nottl">
                <div className="multishop_product_categories">
                  <div className="multishop_product_categories_item">
                    <a href="catalog-gallery.html">
                      <span className="frontcategs-img">
                        <img
                          src="https://www.logogenio.es/images/articles/tech-logos4.jpg"
                          alt=""
                        />
                      </span>
                      <p>Microsoft</p>
                    </a>
                  </div>
                  <div className="multishop_product_categories_item">
                    <a href="catalog-gallery.html">
                      <span className="frontcategs-img">
                        <img
                          src="https://www.logogenio.es/images/articles/tech-logos3.jpg"
                          alt=""
                        />
                      </span>
                      <p>IBM</p>
                    </a>
                  </div>
                  <div className="multishop_product_categories_item">
                    <a href="catalog-gallery.html">
                      <span className="frontcategs-img">
                        <img
                          src="https://www.logogenio.es/images/articles/tech-logos2.jpg"
                          alt=""
                        />
                      </span>
                      <p>Samsung</p>
                    </a>
                  </div>
                  <div className="multishop_product_categories_item">
                    <a href="catalog-gallery.html">
                      <span className="frontcategs-img">
                        <img
                          src="https://www.logogenio.es/images/articles/tech-logos8.jpg"
                          alt=""
                        />
                      </span>
                      <p>Cisco</p>
                    </a>
                  </div>
                  <div className="multishop_product_categories_item">
                    <a href="catalog-gallery.html">
                      <span className="frontcategs-img">
                        <img
                          src="https://www.logogenio.es/images/articles/tech-logos5.jpg"
                          alt=""
                        />
                      </span>
                      <p>Intel</p>
                    </a>
                  </div>
                  <div className="multishop_product_categories_item">
                    <a href="catalog-gallery.html">
                      <span className="frontcategs-img">
                        <img
                          src="https://www.logogenio.es/images/articles/tech-logos7.jpg"
                          alt=""
                        />
                      </span>
                      <p>DELL</p>
                    </a>
                  </div>
                  <div className="multishop_product_categories_item">
                    <a href="catalog-gallery.html">
                      <span className="frontcategs-img">
                        <img
                          src="https://www.logogenio.es/images/articles/tech-logos6.jpg"
                          alt=""
                        />
                      </span>
                      <p>Oracle</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="container page-styling row-wrap-container row-wrap-nottl">
                <div className="row">
                  <div className="cf-lg-6 col-sm-6">
                    <div className="mb30 iconbox-item iconbox-i-4">
                      <div className="iconbox-i-top">
                        <p className="iconbox-i-img">
                          <i className="fa fa-heart"></i>
                        </p>
                        <h3>
                          <a href="#">Aliquam erat volutpat</a>
                        </h3>
                      </div>
                      <p>
                        Vivamus non viverra est. Suspendisse vitae tellus et
                        felis ullamcorper dapibus vitae sed dui. Donec
                        fringilla sollicitudin justo, in aliquet urna gravida
                        vitae.
                      </p>
                    </div>
                    <div className="mb30 iconbox-item iconbox-i-4">
                      <div className="iconbox-i-top">
                        <p className="iconbox-i-img">
                          <i className="fa fa-plus-circle"></i>
                        </p>
                        <h3>
                          <a href="#"> Aenean eu mauris urna</a>
                        </h3>
                      </div>
                      <p>
                        Vivamus non viverra est. Suspendisse vitae tellus et
                        felis ullamcorper dapibus vitae sed dui. Donec
                        fringilla sollicitudin justo, in aliquet urna gravida
                        vitae.
                      </p>
                    </div>
                  </div>
                  <div className="cf-lg-6 col-sm-6">
                    <div className="mb30 iconbox-item iconbox-i-4">
                      <div className="iconbox-i-top">
                        <p className="iconbox-i-img">
                          <i className="fa fa-star"></i>
                        </p>
                        <h3>
                          <a href="#">Quisque non commodo augue</a>
                        </h3>
                      </div>
                      <p>
                        Vivamus non viverra est. Suspendisse vitae tellus et
                        felis ullamcorper dapibus vitae sed dui. Donec
                        fringilla sollicitudin justo, in aliquet urna gravida
                        vitae.
                      </p>
                    </div>
                    <div className="mb30 iconbox-item iconbox-i-4">
                      <div className="iconbox-i-top">
                        <p className="iconbox-i-img">
                          <i className="fa fa-check"></i>
                        </p>
                        <h3>
                          <a href="#">Maecenas interdum nisl non</a>
                        </h3>
                      </div>
                      <p>
                        Vivamus non viverra est. Suspendisse vitae tellus et
                        felis ullamcorper dapibus vitae sed dui. Donec
                        fringilla sollicitudin justo, in aliquet urna gravida
                        vitae.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Modal */}


      <TiendaFooter />
      {/* </div> */}
    </>
  );
};

export default TiendaTienda;
