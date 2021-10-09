import React from "react";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import { useSelector } from "react-redux";
import Productover from "../components/Productover";
const ProductoProducto = () => {
  const { productos } = useSelector((state) => state.producto);
  const { categorias } = useSelector((state) => state.categoria);
  
  return (
    <>
    <TiendaHeader categorias={categorias} />
      <div id="content" class="site-content">
        <div id="primary" class="content-area">
          <main id="main" class="site-main">
            <div class="cont maincont">
              <ul class="b-crumbs">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="catalog-gallery.html">Catalog</a>
                </li>
                <li>Product</li>
              </ul>{" "}
              <article>
                <h2 class="prod-related-ttl">You may also like…</h2>
                <div class="row prod-items prod-items-4">

                {productos.map((objproducto) => {
                      return <Productover objproducto={objproducto} />;
                    })}


                </div>
             
              </article>
            </div>
          </main>
        </div>

        <div class="content-area width-full">
          <div class="maincont page-styling page-full">
     
            <div class="container mb20 page-styling row-wrap-container row-wrap-nottl">
              <div class="row">
                <div class="cf-lg-4 col-sm-4">
                  <div class="iconbox-item iconbox-i-3">
                    <div class="iconbox-i-top">
                      <p class="iconbox-i-img">
                        <i class="fa fa-road"></i>
                      </p>
                      <h3>Financing Services</h3>
                    </div>
                    <p>
                      Vestibulum eu odio vitae neque blandit consequat ut nec
                      nisi. Maecenas et velit sem. Nam egestas lectus vel
                      fringilla accumsan.
                    </p>
                  </div>
                </div>
                <div class="cf-lg-4 col-sm-4">
                  <div class="iconbox-item iconbox-i-3">
                    <div class="iconbox-i-top">
                      <p class="iconbox-i-img">
                        <i class="fa fa-truck"></i>
                      </p>
                      <h3>Lead Qualification</h3>
                    </div>
                    <p>
                      Aliquam fermentum tortor lacus, id dictum tellus feugiat
                      non. Donec rutrum ligula sed dui lobortis, id scelerisque
                      sem volutpat.
                    </p>
                  </div>
                </div>
                <div class="cf-lg-4 col-sm-4">
                  <div class="iconbox-item iconbox-i-3">
                    <div class="iconbox-i-top">
                      <p class="iconbox-i-img">
                        <i class="fa fa-shield"></i>
                      </p>
                      <h3>Security Service</h3>
                    </div>
                    <p>
                      Etiam iaculis urna metus, in volutpat dolor faucibus at.
                      Nulla vitae aliquet justo. Aenean in iaculis sapien.
                      Vivamus rutrum hendrerit egestas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
       
          </div>
        </div>
      </div>
      <TiendaFooter/>
    </>
  );
};

export default ProductoProducto;
