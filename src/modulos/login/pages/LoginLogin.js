import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import { useDispatch, useSelector } from "react-redux";
import { iniciarSesionAction } from "../../../redux/actions/loginAction";
import Swal from "sweetalert2";

const LoginLogin = (props) => {
  const dispatch = useDispatch();
  const { autenticado, usu_nombre } = useSelector((state) => state.login);

  if (autenticado) {
    props.history.push("/tienda/tienda");
    Swal.fire({
      icon: "success",
      title: "Éxito!",
      text: `Bienvenido ${usu_nombre} `,
    });
  }


  const [formulario, setFormulario] = useState({
    username: "vvaras",
    clave: "123",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(iniciarSesionAction(formulario.username, formulario.clave));
  };

  const handleLogin = () => {
 
  };

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
                    <NavLink to="/Tienda/Tienda">Inicio</NavLink>
                  </li>
                  <li> Login</li>
                </ul>
                <article class="page-cont">
                  <div class="page-styling">
                    <div class="auth-wrap">
                      <div class="auth-col">
                        <h2>Login</h2>
                        <form
                          className="formulario"
                          onSubmit={handleSubmit}
                          class="login"
                        >
                          <p>
                            <label for="usenname">
                              Usuario <span class="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="username"
                              value={formulario.username}
                              onChange={handleChange}
                            />
                          </p>
                          <p>
                            <label for="password">
                              Password <span class="required">*</span>
                            </label>
                            <input
                              type="password"
                              name="clave"
                              value={formulario.clave}
                              onChange={handleChange}
                            />
                          </p>

                          <p class="auth-submit">
                            <input
                              type="submit"
                              value="Login"
                              onClick={handleLogin}
                            />
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
