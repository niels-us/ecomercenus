import { FIN_CARGANDO_TIPOUSUARIO, INICIO_CARGANDO_TIPOUSUARIO, SET_TIPOUSUARIO } from "../types/types";


let initialState = {
    tipousuarios: [],
    cargandoTipoUsuarios: false,
  };


  export const tipousuarioReducer = (state = initialState, action) => {
    switch (action.type) {
     
      case INICIO_CARGANDO_TIPOUSUARIO:
        return {
          ...state,
          cargandoTipoUsuarios: true,
        };
      case FIN_CARGANDO_TIPOUSUARIO:
        return {
          ...state,
          cargandoTipoUsuarios: false,
        };
      case SET_TIPOUSUARIO:
        return {
          ...state,
          tipousuarios: action.payload,
        };
      default:
        return state;
    }
  };