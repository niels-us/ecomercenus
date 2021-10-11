import React from "react";

const Productover = ({objproducto}) => {
  return (
    <>
      <article class="cf-sm-6 cf-md-6 cf-lg-3 col-xs-6 col-sm-6 col-md-6 col-lg-3 sectgl-item sectgl-item">
        <div class="sectgl prod-i">
          <div class="prod-i-top">
            <a class="prod-i-img" href="product.html">
              <img src={`https://res.cloudinary.com/soluciones-informaticas-nus/` + objproducto.imagen} alt="" />
            </a>
            <div class="prod-i-actions">
              <div class="prod-i-actions-in">
                <div class="prod-li-favorites">
                  <a href="wishlist.html" class="hover-label add_to_wishlist">
                    <i class="icon ion-heart"></i>
                    <span>Add to Wishlist</span>
                  </a>
                </div>
                <p class="prod-quickview">
                  <a href="#" class="hover-label quick-view">
                    <i class="icon ion-plus"></i>
                    <span>Quick View</span>
                  </a>
                </p>
                <p class="prod-i-cart">
                  <a href="#" class="hover-label prod-addbtn">
                    <i class="icon ion-android-cart"></i>
                    <span>Add to Cart</span>
                  </a>
                </p>
                {/* <p class="prod-li-compare">
                  <a
                    href="compare.html"
                    class="hover-label prod-li-compare-btn"
                  >
                    <span>Compare</span>
                    <i class="icon ion-arrow-swap"></i>
                  </a>
                </p> */}
              </div>
            </div>
          </div>
          <div class="prod-i-bot">
            <div class="prod-i-info">
              <p class="prod-i-price">$120.00</p>
              <p class="prod-i-categ">
                <a href="catalog-gallery.html">Lighting</a>
              </p>
            </div>
            <h3 class="prod-i-ttl">
              <a href="product.html">Searchlight Portable</a>
            </h3>
          </div>
        </div>
      </article>{" "}
    </>
  );
};

export default Productover;
