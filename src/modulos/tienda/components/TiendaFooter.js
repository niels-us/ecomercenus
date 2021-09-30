import React from "react";
import logo from "./../../../assets/img/logo.png";
import TiendaModalProducto from "./TiendaModalProducto";
import { useSelector } from "react-redux";

const TiendaFooter = () => {
  const { productos } = useSelector((state) => state.producto);
  console.log(productos);
  return (
    <>
      <div className="container-fluid blog-sb-widgets page-styling site-footer">
        <div className="row">
          <div className="col-sm-12 col-md-4 widget align-center-tablet f-logo-wrap">
            <a href="index.html" className="f-logo">
              <img src={logo} alt="" />
            </a>
            <p>Modern eCommerce HTML Template</p>
            <button className="btn callback">Contact Us</button>
          </div>
          <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
            <h3 className="widgettitle">Company</h3>
            <ul className="menu">
              <li>
                <a href="index.html">Front Page</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
              <li>
                <a href="index.html">Gallery</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
            <h3 className="widgettitle">Shop</h3>
            <ul className="menu">
              <li>
                <a href="catalog-list.html">Electricity</a>
              </li>
              <li>
                <a href="catalog-gallery.html">Fasteners</a>
              </li>
              <li>
                <a href="catalog-gallery-full.html">Lighting</a>
              </li>
              <li>
                <a href="catalog-gallery.html">Pipes</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
            <h3 className="widgettitle">Account</h3>
            <ul className="menu">
              <li>
                <a href="wishlist.html">Wishlist</a>
              </li>
              <li>
                <a href="compare.html">Compare</a>
              </li>
              <li>
                <a href="cart.html">Cart</a>
              </li>
              <li>
                <a href="auth.html">My Account</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
            <h3 className="widgettitle">Blog</h3>
            <ul className="menu">
              <li>
                <a href="blog.html">All Posts</a>
              </li>
              <li>
                <a href="post.html">News</a>
              </li>
              <li>
                <a href="post-slider.html">Articles</a>
              </li>
              <li>
                <a href="blog.html">Reviews</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="form-validate modal-form" id="modal-form">
        <form action="#" method="POST" className="form-validate">
          <h4>Contact Us</h4>
          <input
            type="text"
            placeholder="Your name"
            data-required="text"
            name="name"
          />
          <input
            type="text"
            placeholder="Your phone"
            data-required="text"
            name="phone"
          />
          <input
            type="text"
            placeholder="Your email"
            data-required="text"
            data-required-email="email"
            name="email"
          />
          <input className="btn1" type="submit" value="Send" />
        </form>
      </div>

      <div className="cont maincont quick-view-modal">
        <article>
          <div className="prod">
            <div className="prod-slider-wrap prod-slider-shown">
              <div className="flexslider prod-slider" id="prod-slider">
                <ul className="slides">
                  <li>
                    <a
                      data-fancybox-group="prod"
                      className="fancy-img"
                      href="http://placehold.it/1000x1000"
                    >
                      <img src="http://placehold.it/550x550" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      data-fancybox-group="prod"
                      className="fancy-img"
                      href="http://placehold.it/1000x1000"
                    >
                      <img src="http://placehold.it/550x550" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      data-fancybox-group="prod"
                      className="fancy-img"
                      href="http://placehold.it/1000x1000"
                    >
                      <img src="http://placehold.it/550x550" alt="" />
                    </a>
                  </li>
                </ul>
                <div className="prod-slider-count">
                  <p>
                    <span className="count-cur">1</span>
                    <span className="count-all">3</span>
                  </p>
                  <p className="hover-label prod-slider-zoom">
                    <i className="icon ion-search"></i>
                    <span>Zoom In</span>
                  </p>
                </div>
              </div>
              <div className="flexslider prod-thumbs" id="prod-thumbs">
                <ul className="slides">
                  <li>
                    <img src="http://placehold.it/550x550" alt="" />
                  </li>
                  <li>
                    <img src="http://placehold.it/550x550" alt="" />
                  </li>
                  <li>
                    <img src="http://placehold.it/550x550" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="prod-cont">
              <div className="prod-rating-wrap">
                <p data-rating="4" className="prod-rating">
                  <i className="rating-ico" title="1"></i>
                  <i className="rating-ico" title="2"></i>
                  <i className="rating-ico" title="3"></i>
                  <i className="rating-ico" title="4"></i>
                  <i className="rating-ico" title="5"></i>
                </p>
                <p className="prod-rating-count">7</p>
              </div>
              <p className="prod-categs">
                <a href="#">Lighting</a>, <a href="#">Tools</a>
              </p>
              <h2>Belt Sanders</h2>
              <p className="prod-price">precio</p>
              <p className="stock in-stock">7 in stock</p>
              <p className="prod-excerpt">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget...
              </p>
              <div className="prod-add">
                <button type="submit" className="button">
                  <i className="icon ion-android-cart"></i> Add to cart
                </button>
                <p className="qnt-wrap prod-li-qnt">
                  <a href="#" className="qnt-plus prod-li-plus">
                    <i className="icon ion-arrow-up-b"></i>
                  </a>
                  <input type="text" value="1" />
                  <a href="#" className="qnt-minus prod-li-minus">
                    <i className="icon ion-arrow-down-b"></i>
                  </a>
                </p>
                <div className="prod-li-favorites">
                  <a
                    href="wishlist.html"
                    className="hover-label add_to_wishlist"
                  >
                    <i className="icon ion-heart"></i>
                    <span>Add to Wishlist</span>
                  </a>
                </div>
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
          </div>
        </article>
      </div>
    
    </>
  );
};

export default TiendaFooter;
