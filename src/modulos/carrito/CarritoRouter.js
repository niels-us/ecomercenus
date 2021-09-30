import React from "react";
import { Switch, Route } from "react-router-dom";
import CarritoCarrito from "./pages/CarritoCarrito";

const CarritoRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/Carrito/Carrito" component={CarritoCarrito} />
        
      </Switch>
    </>
  );
};

export default CarritoRouter;
