import {
  FIN_CARGANDO_LOGIN,
  INICIO_CARGANDO_LOGIN,
  SET_CERRAR_LOGIN,
  SET_SUCCESS_LOGIN,
} from "../types/types";
import { URL_BACKEND } from "../../environments/environments";
import axios from "axios";

const inicioCargandoLogin = () => {
  return {
    type: INICIO_CARGANDO_LOGIN,
  };
};
const finCargandoLogin = () => {
  return {
    type: FIN_CARGANDO_LOGIN,
  };
};

export const iniciarSesionAction = (username, clave) => {
  return async (dispatch) => {
    dispatch(inicioCargandoLogin());

    const endpoint = `${URL_BACKEND}/login`;
    const response = await axios.post(
      endpoint,
      JSON.stringify({ username: username, clave: clave }),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      let { token } = response.data;
      localStorage.setItem("token", token);
      let payload = token.split(".")[1];
      let payloadDecoded = atob(payload);
      let payloadJSON = JSON.parse(payloadDecoded);
      console.log(payloadJSON.nombre);
      console.log(payloadJSON.content[0].nombre);
      dispatch({
        type: SET_SUCCESS_LOGIN,
        payload: {
          autenticado: true,
          usu_username: payloadJSON.content[0].username,
          usu_nombre: payloadJSON.content[0].nombre,
          usu_direc:payloadJSON.content[0].direccion,
          usu_id:payloadJSON.content[0].id,
          // usu_tipo: payloadJSON.content[0].rol_id,
          token: token,
        },
      });
    }

    dispatch(finCargandoLogin());
  };
};

export const cerrarSesionAction = () => {
  return async (dispatch) => {
    dispatch(inicioCargandoLogin());
    dispatch({
      type: SET_CERRAR_LOGIN,
      payload: {
        autenticado: false,
        token: null,
        usu_nom: null,
        cargando: false,
        usu_tipo: null,
        usu_id: null,
      },
    });
    localStorage.removeItem("token");
    dispatch(finCargandoLogin());
  };
};
