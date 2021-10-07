import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductoProducto from "./pages/ProductoProducto";
const ProductoRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/Producto/Producto" component={ProductoProducto} />
      </Switch>
    </>
  );
};

export default ProductoRouter;
