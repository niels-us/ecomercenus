import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginLogin from "./pages/LoginLogin";
const LoginRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/Login/Login" component={LoginLogin} />
      </Switch>
    </>
  );
};

export default LoginRouter;
