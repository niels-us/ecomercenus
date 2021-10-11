import React from "react";
import { Switch, Route } from "react-router-dom";
import ClienteCliente from "./pages/ClienteCliente";

const ClienteRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/Cliente/Cliente" component={ClienteCliente} />
        
      </Switch>
    </>
  );
};

export default ClienteRouter;
