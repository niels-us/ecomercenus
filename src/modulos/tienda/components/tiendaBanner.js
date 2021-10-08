import React from "react";


const TiendaBanner = () => {


    return (

        <div
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
        </div>


    );
};

export default TiendaBanner;