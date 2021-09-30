import React from "react";
import { NavLink } from "react-router-dom";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";

const LoginLogin = () => {
  return (
    <>
      <div id="page" className="site">
        <TiendaHeader />
        
        <div id="content" class="site-content">
          <div id="primary" class="content-area width-normal">
            <main id="main" class="site-main">
              <div class="cont maincont">
                <h1 class="maincont-ttl">Login</h1>
                <ul class="b-crumbs">
                  <li>
                    <NavLink
                      to="/Tienda/Tienda" >Inicio
                    </NavLink>
                  </li>
                  <li> Login</li>
                </ul>
                <article class="page-cont">
                  <div class="page-styling">
                    <div class="auth-wrap">
                      <div class="auth-col">
                        <h2>Registro</h2>
                        <form method="post" class="login">
                          <p>
                            <label for="usenname">
                              Usuario <span class="required">*</span>
                            </label>
                            <input type="text" id="username" />
                          </p>
                          <p>
                            <label for="password">
                              Password <span class="required">*</span>
                            </label>
                            <input type="password" id="password" />
                          </p>

                          <p class="auth-submit">
                            <input type="submit" value="Login" />
                            <input
                              type="checkbox"
                              id="rememberme"
                              value="forever"
                            />
                            <label for="rememberme">Remember me</label>
                          </p>
                          <p class="auth-lost_password">
                            <a href="#">Lost your password?</a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </main>
          </div>
        </div>

        <TiendaFooter />
      </div>
    </>
  );
};

export default LoginLogin;
