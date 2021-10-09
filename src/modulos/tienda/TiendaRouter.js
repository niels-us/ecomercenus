import React from "react";
import { Switch, Route } from "react-router-dom";
import TiendaTienda from "./pages/TiendaTienda";
import { useDispatch, useSelector } from "react-redux";
import { getCategorias } from "../../redux/actions/categoriaAction";
import { getCategoriaProductos, getProductos } from "../../redux/actions/productoAction";
import { getTipoUsuarios } from "../../redux/actions/tipousuarioAction";
import { getTipoDocumentos } from "../../redux/actions/tipodocumentoAction";

const TiendaRouter = () => {

  const { categorias } = useSelector((state) => state.categoria);

  const dispatch = useDispatch();
  if (categorias.length == 0) {
    dispatch(getCategoriaProductos())
  } 

  dispatch(getTipoDocumentos())
  dispatch(getTipoUsuarios())
  // dispatch(getProductos())
  

  return (
    <>
      <Switch>
        <Route path="/tienda/tienda" component={TiendaTienda} />
      </Switch>
    </>
  );
};

export default TiendaRouter;