import React from "react";
import { Switch, Route } from "react-router-dom";
import CarritoCarrito from "./pages/CarritoCarrito";
import CarritoTipoPago from "./pages/CarritoTipoPago";

const CarritoRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/Carrito/TipoPago" component={CarritoTipoPago} />
        <Route path="/Carrito/Carrito" component={CarritoCarrito} />
        
      </Switch>
    </>
  );
};

export default CarritoRouter;
