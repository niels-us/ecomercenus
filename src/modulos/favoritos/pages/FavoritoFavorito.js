import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import FavoritoProductos from "../componentes/FavoritoProductos";

const FavoritoFavorito = () => {

    const favorito = useSelector((state) => state.favorito);

    return (
        <div id="page" className="site">
            <TiendaHeader />

            <div id="content" class="site-content"><div id="primary" class="content-area width-normal">
                <main id="main" class="site-main">
                    <div class="cont maincont">
                        <h1 class="maincont-ttl">Wishlist</h1>
                        <ul class="b-crumbs">
                            <li>
                                <NavLink to="/tienda/tienda">Home</NavLink>
                            </li>
                            <li> Wishlist</li>
                        </ul>

                        <div class="page-styling">
                            <div class="row woocommerce prod-items prod-items-3">
                                {
                                    favorito.productos.map((objproducto) => {
                                        return <FavoritoProductos objproducto={objproducto} />
                                    })
                                }
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

export default FavoritoFavorito;
