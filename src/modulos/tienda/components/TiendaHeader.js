import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../../assets/img/logo.png";
import { useSelector, useDispatch } from "react-redux";
import TiendaVistaProducto from "./TiendaVistaProducto";
import { getProductos } from "../../../redux/actions/productoAction";
import { getCategorias } from "../../../redux/actions/categoriaAction";
import { getCategoriaProductos } from "../../../redux/actions/productoAction";

const TiendaHeader = ({ categorias }) => {
  const { carrito } = useSelector((state) => state);
  const { usu_nombre, usu_username } = useSelector((state) => state.login);

  // console.log(categorias.length);


  const dispatch = useDispatch();
  const handleCategoria = (id) => {
    dispatch(getProductos(id))
  };

  const handleCategoriaProducto = () => {
    dispatch(getCategorias())
  };

  const handleGetCategoriaProducto = () => {
    dispatch(getCategoriaProductos())
  };

  // console.log(carrito.productos);
  return (
    <>
      <div className="container-fluid page-styling site-header-before">
        <div className="row">
          <div className="col-lg-4">
            <ul className="links_list links_list-align-left align-center-desktop topbar-social">
              <li>
                <p className="links_list-value">
                  <a href="http://facebook.com" target="_blank" rel="nofollow">
                    <i className="fa fa-facebook"></i>
                  </a>
                </p>
              </li>
              <li>
                <p className="links_list-value">
                  <a
                    href="mailto:email@email.com"
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="fa fa-paper-plane"></i>
                  </a>
                </p>
              </li>
              <li>
                <p className="links_list-value">
                  <a href="http://pinterest.com" target="_blank" rel="nofollow">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                </p>
              </li>
              <li>
                <p className="links_list-value">
                  <a href="http://youtube.com" target="_blank" rel="nofollow">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </p>
              </li>
              <li>
                <p className="links_list-value">
                  <a href="http://twitter.com" target="_blank" rel="nofollow">
                    <i className="fa fa-twitter"></i>
                  </a>
                </p>
              </li>
              <li>
                <p className="links_list-value">
                  <a href="http://google.com" target="_blank" rel="nofollow">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </p>
              </li>
              <li>
                <p className="links_list-value">
                  <a href="http://instagram.com" target="_blank" rel="nofollow">
                    <i className="fa fa-instagram"></i>
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <ul className="links_list links_list-align-right align-center-desktop topbar-contacts">
              <li>
                <p className="links_list-label">Dirección:</p>
                <p className="links_list-value">
                  <a
                    href="http://maps.google.com"
                    target="_blank"
                    rel="nofollow"
                  >
                    15th Street, Miami, USA
                  </a>
                </p>
              </li>
              <li>
                <p className="links_list-label">Contacto:</p>
                <p className="links_list-value">
                  <a href="mailto:support@email.com">soporte@gmail.com</a>
                </p>
              </li>
              <li>
                <p className="links_list-label">Teléfono:</p>
                <p className="links_list-value">
                  <a href="#">(478)-592-9899</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-header header_sticky">
        <p className="h-logo">
          <NavLink to="/Tienda/Tienda">
            <img src={logo} alt="MultiShop" />
          </NavLink>
        </p>
        <div className="h-shop">
          <form method="get" action="#" className="h-search" id="h-search">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i className="ion-search"></i>
            </button>
          </form>

          <ul className="h-shop-links">
            <li className="h-search-btn" id="h-search-btn">
              <i className="ion-search"></i>
            </li>
            <li className="h-shop-icon h-wishlist">
              <a title="Wishlist" href="wishlist.html">
                <i className="ion-heart"></i>
                <span>5</span>
              </a>
            </li>
            <li className="h-shop-icon h-compare">
              <a title="Compare List" href="compare.html">
                <i className="ion-arrow-swap"></i>
                <span>2</span>
              </a>
            </li>
            <li className="h-shop-icon h-profile">
              <a href="auth.html" title="My Account">
                <i className="ion-android-person">
                  {/* <span>{usu_nom}</span> */}
                </i>
              </a>
              <ul className="h-profile-links">
                <li>
                  <NavLink to="/Cliente/cliente">Registro</NavLink>
                </li>
                <li>
                  <NavLink to="/Login/Login">Login</NavLink>
                </li>
                <li>
                  <a href="cart.html">Carrito</a>
                </li>
                <li>
                  <a href="compare.html">Compare</a>
                </li>
                <li>
                  <a href="wishlist.html">Deseos</a>
                </li>
              </ul>
            </li>

            <li className="h-cart">
              <NavLink to="/Carrito/Carrito" className="cart-contents">
                <p className="h-cart-icon">
                  <i className="ion-android-cart"></i>
                  <span>{carrito.productos.length}</span>
                </p>
              </NavLink>
              <p className="h-cart-total"></p>

              <div className="widget_shopping_cart">
                <div className="widget_shopping_cart_content">
                  <ul className="cart_list">
                    {carrito.productos.map((objproducto) => {
                      return <TiendaVistaProducto objproducto={objproducto} />;
                    })}
                  </ul>
                  <p className="total">
                    <b>Subtotal:</b> $.{carrito.total}
                  </p>
                  <p className="buttons">
                    <NavLink to="/Carrito/Carrito" className="button">
                      View cart
                    </NavLink>

                    {/* <NavLink href="/Carrito/TipoPago" className="button">
                      Checkout
                    </NavLink> */}
                  </p>
                </div>
              </div>
            </li>

            <li className="h-menu-btn" id="h-menu-btn">
              <i className="ion-navicon"></i> Menu
            </li>
          </ul>
        </div>
        <div className="mainmenu">
          <nav id="h-menu" className="h-menu">
            <ul>
              <li className="menu-item-has-children active">
                <a href="index.html">Home</a>
                <ul className="sub-menu">
                  <li className="active">
                    <a href="index.html">Home 1</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <NavLink
                  // className="dropdown-item"
                  to="#"
                  onMouseMove={() => {
                    handleCategoriaProducto();
                  }}
                >
                  Categorias
                </NavLink>
                {/* <a href="catalog-gallery.html">Categorias</a> */}
                <ul className="sub-menu">
                  {categorias ?
                    categorias.map((objCategoria) => {
                      return (
                        <li key={objCategoria.id}>
                          <NavLink
                            // className="dropdown-item"
                            to="#"
                            onClick={() => {
                              handleCategoria(objCategoria.id);
                            }}
                          >
                            {objCategoria.nombre}
                          </NavLink>
                        </li>)
                    }) : null}

                  <li>
                    <NavLink
                      // className="dropdown-item"
                      to="#"
                      onClick={() => {
                        handleGetCategoriaProducto()
                      }}
                    >
                      TODO
                    </NavLink>
                  </li>)

                  {/* <li>
                    <a href="catalog-list.html">Catalog - List</a>
                  </li>
                  <li>
                    <a href="catalog-gallery-full.html">Catalog - No Sidebar</a>
                  </li>
                  <li>
                    <NavLink to="/Producto/Producto">Product Page</NavLink>
                  </li> */}
                </ul>
              </li>
              <li>
                <a href="elements.html">Elements</a>
              </li>

              <li className="menu-item-has-children">
                <a href="blog.html">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog Posts</a>
                  </li>
                  <li>
                    <a href="post.html">Standard Post</a>
                  </li>
                  <li>
                    <a href="post-slider.html">Slider Post</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children active">
                <a href="#">
                  <i className="ion-android-person"> {usu_username}</i>
                </a>

                <ul className="sub-menu">
                  {/* <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="404.html">Error 404</a>
                  </li> */}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TiendaHeader;
