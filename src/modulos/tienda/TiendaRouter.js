import React from "react";
import { Switch, Route } from "react-router-dom";
import TiendaTienda from "./pages/TiendaTienda";
import { useDispatch, useSelector } from "react-redux";
// import { getCategorias } from "../../redux/actions/categoriaAction";
import { getProductos } from "../../redux/actions/productoAction";
import { getCategoriaProductos } from "../../redux/actions/productoAction";

const TiendaRouter = () => {
  const { categorias } = useSelector((state) => state.categoria);

  const dispatch = useDispatch();
  if (categorias.length == 0) {
    dispatch(getCategoriaProductos())
  } 
 

  return (
    <>
      <Switch>
        <Route path="/tienda/tienda" component={TiendaTienda} />
      </Switch>
    </>
  );
};

export default TiendaRouter;
