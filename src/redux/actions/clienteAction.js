import axios from "axios";
import { URL_BACKEND } from '../../environments/environments'
import {
  FIN_CARGANDO_CLIENTE,
  INICIO_CARGANDO_CLIENTE,
  SET_REGISTER_CLIENTE,
} from "../types/types";

const inicioCargandoCliente = () => {
  return {
    type: INICIO_CARGANDO_CLIENTE,
  };
};
const finCargandoCliente = () => {
  return {
    type: FIN_CARGANDO_CLIENTE,
  };
};

export const registroClienteAction = (nombre,numro_documento,direccion,telefono,email,username,clave, tipo_documento_id,tipo_usuario_id) => {
  return async (dispatch) => {
    dispatch(inicioCargandoCliente());

    const endpoint = `${URL_BACKEND}/usuario`;
    const response = await axios.post(
      endpoint,
      JSON.stringify({
        nombre: nombre,
        numro_documento: numro_documento,
        direccion: direccion,
        telefono: telefono,
        email: email,
        username: username,
        clave: clave,
        estado: true,
        rol_id: 1,
        tipo_documento_id: tipo_documento_id,
        tipo_usuario_id: tipo_usuario_id
      }),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    console.log(response);
    console.log(response.data);
    // if (response.status === 200) {
      // let { token } = response.data;
      // localStorage.setItem('token', token);
      // let payload = token.split('.')[1];
      // let payloadDecoded = atob(payload);
      // let payloadJSON = JSON.parse(payloadDecoded);
      // console.log(payloadJSON)

      dispatch({
        type: SET_REGISTER_CLIENTE,
        payload: {
          registrado: true,
          // usu_nom: payloadJSON.nombre,
          // usu_id: payloadJSON.id,
          // usu_tipo: payloadJSON.rol_id,
          // token: token
        },
      });
    // }
    dispatch(finCargandoCliente());
  };
};
