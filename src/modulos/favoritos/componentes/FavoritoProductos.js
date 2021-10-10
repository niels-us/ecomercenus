import React, { useState } from "react";
import Swal from "sweetalert2";
import { NavLink, useHistory  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import TiendaModalProducto from "./TiendaModalProducto";
import { agregarProductoAlCarrito } from "../../../redux/actions/carritoAction";
import { eliminarProductoAlFavorito, restarProductoAlFavorito, sumarProductoAlFavorito } from "../../../redux/actions/favoritoAction";

const FavoritoProductos = ({ objproducto }) => {

    let history = useHistory();

    const [mostrar, setMostrar] = useState(false);

    const dispatch = useDispatch();
    const eliminarProducto = () => {
        dispatch(eliminarProductoAlFavorito(objproducto));
    };

    const agregarProducto = () => {
        dispatch(agregarProductoAlCarrito(objproducto));
        Swal.fire({
            title: "Se agregó al Carrito, Deseas ir al Carrito?",
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

    return (
        <>
            <article class="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item  sectgl-item">
                <div class="sectgl prod-i">
                    <div class="prod-i-top">
                        <a class="prod-i-img" href="product.html">
                            <img src={`https://res.cloudinary.com/soluciones-informaticas-nus/` + objproducto.imagen} alt="" />
                        </a>
                        <div class="prod-i-actions">
                            <div class="prod-i-actions-in">
                                <p class="prod-quickview">
                                    <a href="#" class="hover-label"><i class="icon ion-close-round" onClick={eliminarProducto} ></i> <span>Remove from Wishlist</span></a>
                                </p>
                                <p class="prod-quickview">
                                    <NavLink
                                        to="#"
                                        className="hover-label"
                                        onClick={() => {
                                            setMostrar(true);
                                        }}
                                    >
                                        <i class="icon ion-plus"></i>
                                        <span>Quick View</span>
                                    </NavLink>
                                    {/* <a href="#" class="hover-label quick-view"><i class="icon ion-plus"></i><span>Quick View</span></a> */}
                                </p>
                                <p class="prod-i-cart">
                                    <NavLink to="#" className="hover-label prod-addbtn">
                                        <i
                                            className="icon ion-android-cart"
                                            onClick={agregarProducto}
                                        ></i>
                                        <span>Add to Cart</span>
                                    </NavLink>
                                    {/* <a href="#" class="hover-label prod-addbtn"><i class="icon ion-android-cart"></i><span>Add to Cart</span></a> */}
                                </p>
                                {/* <p class="prod-li-compare">
                                    <a href="compare.html" class="hover-label prod-li-compare-btn"><span>Compare</span><i class="icon ion-arrow-swap"></i></a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div class="prod-i-bot">
                        <div class="prod-i-info">
                            <p class="prod-i-price">$ {objproducto.precio_venta}</p>
                            <p class="prod-i-categ"><a href="catalog-gallery.html">Lighting</a></p>
                        </div>
                        <h3 class="prod-i-ttl"><a href="product.html">{objproducto.nombre}</a></h3>
                    </div>

                </div>

                <TiendaModalProducto
                    mostrar={mostrar}
                    setMostrar={setMostrar}
                    objproducto={objproducto}
                />
            </article>
        </>
    );
};

export default FavoritoProductos;
