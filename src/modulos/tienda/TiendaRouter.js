import React from "react";
import { Switch, Route } from "react-router-dom";
import TiendaTienda from "./pages/TiendaTienda";
import { useDispatch } from "react-redux";
// import { getCategorias } from "../../redux/actions/categoriaAction";
import { getProductos } from "../../redux/actions/productoAction";

const TiendaRouter = () => {

  const dispatch = useDispatch();
  // dispatch(getCategorias())
  dispatch(getProductos())
  
 

  return (
    <>
      <Switch>
        <Route path="/tienda/tienda" component={TiendaTienda} />
      </Switch>
    </>
  );
};

export default TiendaRouter;
