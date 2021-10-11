import { FIN_CARGANDO_TIPODOCUMENTO, INICIO_CARGANDO_TIPODOCUMENTO, SET_TIPODOCUMENTO } from "../types/types";


let initialState = {
    tipodocumentos: [],
    cargandoTipoDocuemntos: false,
  };


  export const tipodocumentoReducer = (state = initialState, action) => {
    switch (action.type) {
     
      case INICIO_CARGANDO_TIPODOCUMENTO:
        return {
          ...state,
          cargandoTipoDocumentos: true,
        };
      case FIN_CARGANDO_TIPODOCUMENTO:
        return {
          ...state,
          cargandoTipoDocumentos: false,
        };
      case SET_TIPODOCUMENTO:
        return {
          ...state,
          tipodocumentos: action.payload,
        };
      default:
        return state;
    }
  };