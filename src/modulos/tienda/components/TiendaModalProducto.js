import React from "react";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { agregarProductoAlCarrito } from "../../../redux/actions/carritoAction";
import { agregarProductoAlfavorito } from "../../../redux/actions/favoritoAction";
import {
  restarProductoAlCarrito,
  sumarProductoAlCarrito,
} from "../../../redux/actions/carritoAction";

const TiendaModalProducto = ({ mostrar, setMostrar, objproducto }) => {
  
  let history = useHistory();

  const carrito = useSelector((state) => state.carrito);

  let objcarrito;
  carrito.productos.map((obj) => {
    objcarrito = obj;
  });

  const dispatch = useDispatch();
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
  const restarProducto = () => {
    if (objcarrito) {
      dispatch(restarProductoAlCarrito(objcarrito));
    }
  };
  const sumarProducto = () => {
    if (objcarrito) {
      dispatch(sumarProductoAlCarrito(objcarrito));
    }
  };

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

  return (
    <>
      <Modal size="xl" show={mostrar} onHide={() => setMostrar(false)}>
        <Modal.Header closeButton>
          {/* <Modal.Title>
            <h5 class="card-title">{objproducto.nombre}.</h5>
          </Modal.Title> */}
        </Modal.Header>

        <Modal.Body>
          <div class="cont maincont w-100">
            <article>
              <div class="prod w-100">
                <div class="prod-slider-wrap prod-slider-shown">
                  <div class="flexsli prod-slider" id="prod-slider">
                    <ul class="slides">
                      <li>
                        <a
                          data-fancybox-group="prod"
                          class="fancy-img"
                          href={
                            `https://res.cloudinary.com/soluciones-informaticas-nus/` +
                            objproducto.imagen
                          }
                        >
                          <img
                            src={`https://res.cloudinary.com/soluciones-informaticas-nus/` + objproducto.imagen}
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="prod-cont">
                  <div class="prod-rating-wrap">
                    <p data-rating="4" class="prod-rating">
                      <i class="rating-ico" title="1"></i>
                      <i class="rating-ico" title="2"></i>
                      <i class="rating-ico" title="3"></i>
                      <i class="rating-ico" title="4"></i>
                      <i class="rating-ico" title="5"></i>
                    </p>
                    <p class="prod-rating-count">7</p>
                  </div>
                  <p class="prod-categs">
                    <a href="#">Lighting</a>, <a href="#">Tools</a>
                  </p>
                  <h2>{objproducto.nombre}</h2>
                  <p class="prod-price">$ {objproducto.precio_venta}</p>
                  <p class="stock in-stock">{objproducto.stock} UND</p>
                  <p class="prod-excerpt">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget...
                  </p>
                  <div class="prod-add">
                    <button
                      type="submit"
                      onClick={agregarProducto}
                      class="button"
                    >
                      <i class="icon ion-android-cart"></i> Add to cart
                    </button>
                    <p class="qnt-wrap prod-li-qnt">
                      <a href="#" class="qnt-plus prod-li-plus">
                        <i
                          class="icon ion-arrow-up-b"
                          onClick={sumarProducto}
                        ></i>
                      </a>
                      <input
                        type="text"
                        value={objcarrito ? objcarrito.cantidad : 0}
                      />
                      <a href="#" class="qnt-minus prod-li-minus">
                        <i
                          class="icon ion-arrow-down-b"
                          onClick={restarProducto}
                        ></i>
                      </a>
                    </p>
                    <div class="prod-li-favorites">
                      <NavLink to="#" className="hover-label prod-addbtn">
                        {/* <NavLink to="#" className="hover-label add_to_wishlist"> */}
                        <i
                          className="icon ion-heart"
                          onClick={agregarFavorito}
                        ></i>
                        <span>Add to Wishlist</span>
                      </NavLink>
                      {/* <a
                        href="wishlist.html"
                        class="hover-label add_to_wishlist"
                      >
                        <i class="icon ion-heart"></i>
                        <span>Add to Wishlist</span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
};

export default TiendaModalProducto;
