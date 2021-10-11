import {
  FIN_CARGANDO_TIPOCOMPROBANTE,
  INICIO_CARGANDO_TIPOCOMPROBANTE,
  SET_TIPOCOMPROBANTE,
} from "../types/types";

let initialState = {
  tipocomprobantes: [],
  cargandoTipoComprobantes: false,
};

export const tipocomprobantesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INICIO_CARGANDO_TIPOCOMPROBANTE:
      return {
        ...state,
        cargandoTipoComprobantes: true,
      };
    case FIN_CARGANDO_TIPOCOMPROBANTE:
      return {
        ...state,
        cargandoTipoComprobantes: false,
      };
    case SET_TIPOCOMPROBANTE:
      return {
        ...state,
        tipocomprobantes: action.payload,
      };
    default:
      return state;
  }
};
