import React, { useState } from "react";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { registroClienteAction } from "../../../redux/actions/clienteAction";
import ClienteTipousuario from "../components/ClienteTipousuario";
import ClienteTipodocumento from "../components/ClienteTipodocumento";
import { NavLink } from "react-router-dom";

const ClienteCliente = (props) => {
  const dispatch = useDispatch();
  const { registrado, cargando } = useSelector((state) => state.cliente);
  const { tipousuarios } = useSelector((state) => state.tipousuario);
  const { tipodocumentos } = useSelector((state) => state.tipodocumento);

  const [formulario, setFormulario] = useState({
    // username: formulario.username,
    // clave:formulario.clave,
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registroClienteAction(
        formulario.nombre,
        formulario.numro_documento,
        formulario.direccion,
        formulario.telefono,
        formulario.email,
        formulario.username,
        formulario.clave,
        formulario.tipo_documento_id,
        formulario.tipo_usuario_id
      )
    );
  };

  const handleCliente = () => {
    Swal.fire({
      title: "Desea iniciar sesión?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "SI",
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        props.history.push("/Login/Login"); 
      }else{
        props.history.push("/Tienda/Tienda"); 
      }
    });
  };

  return (
    <>
      <div id="page" className="site">
        <TiendaHeader />
        <div id="content" class="site-content">
          <div id="primary" class="content-area width-normal">
            <main id="main" class="site-main">
              <div class="cont maincont">
                <h1 class="maincont-ttl">Registro</h1>
                <ul class="b-crumbs">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li> Registro</li>
                </ul>
                <article class="page-cont">
                  <div class="page-styling">
                    <div class="auth-wrap">
                      <div class="auth-col">
                        <h2>Registro Cliente</h2>
                        <form className="formulario" onSubmit={handleSubmit}>
                          <ul>
                            <p>
                              <label for="nombre">
                                Nombre <span class="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="nombre"
                                value={formulario.nombre}
                                onChange={handleChange}
                              />
                            </p>
                            <p>
                              <label for="tipo_usuario_id">
                                Tipo Persona <span class="required">*</span>
                              </label>
                              <select
                                className="form-select"
                                value={formulario.tipo_usuario_id}
                                onChange={handleChange}
                                name="tipo_usuario_id"
                              >
                                <option selected>Seleccionar..</option>
                                {tipousuarios.map((objtipousuario) => {
                                  return (
                                    <ClienteTipousuario
                                      objtipousuario={objtipousuario}
                                    />
                                  );
                                })}
                              </select>
                            </p>
                            <p>
                              <label for="tipo_documento_id">
                                Tipo Documento <span class="required">*</span>
                              </label>
                              <select
                                className="form-select"
                                value={formulario.tipo_documento_id}
                                onChange={handleChange}
                                name="tipo_documento_id"
                              >
                                <option selected>Seleccionar..</option>
                                {tipodocumentos.map((objtipodocumento) => {
                                  return (
                                    <ClienteTipodocumento
                                      objtipodocumento={objtipodocumento}
                                    />
                                  );
                                })}
                              </select>
                            </p>
                            <p>
                              <label for="numro_documento">
                                N° Documento <span class="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="numro_documento"
                                value={formulario.numro_documento}
                                onChange={handleChange}
                              />
                            </p>
                            <p>
                              <label for="direccion">
                                Dirección <span class="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="direccion"
                                value={formulario.direccion}
                                onChange={handleChange}
                              />
                            </p>
                            <p>
                              <label for="telefono">
                                Telefono <span class="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="telefono"
                                value={formulario.telefono}
                                onChange={handleChange}
                              />
                            </p>
                            <p>
                              <label for="email">
                                Email <span class="required">*</span>
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formulario.email}
                                onChange={handleChange}
                              />
                            </p>
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
                              <label for="clave">
                                Contraseña <span class="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="clave"
                                value={formulario.clave}
                                onChange={handleChange}
                              />
                            </p>
                          </ul>

                          <p class="auth-submit">
                            <input
                              type="submit"
                              value="Guardar"
                              onClick={handleCliente}
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

export default ClienteCliente;
