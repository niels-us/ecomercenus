import React from "react";
import { Switch, Route } from "react-router-dom";
import FavoritoFavorito from "./pages/FavoritoFavorito";

const FavoritoRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/favorito/favorito" component={FavoritoFavorito} />        
      </Switch>
    </>
  );
};

export default FavoritoRouter;