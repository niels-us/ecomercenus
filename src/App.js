import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import TiendaRouter from "./modulos/tienda/TiendaRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import CarritoRouter from "./modulos/carrito/CarritoRouter";
import ClienteRouter from "./modulos/cliente/ClienteRouter";
import LoginRouter from "./modulos/login/LoginRouter";
import ProductoRouter from "./modulos/productos/ProductoRouter";
import FavoritoRouter from "./modulos/favoritos/FavoritoRouter";
const App = () => {
  
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/tienda" component={TiendaRouter} />
            <Route path="/carrito" component={CarritoRouter} />
            <Route path="/Cliente" component={ClienteRouter} />
            <Route path="/Login" component={LoginRouter} />
            <Route path="/Producto" component={ProductoRouter} />
            <Route path="/favorito" component={FavoritoRouter} />
            <Redirect to="/tienda/tienda" />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
