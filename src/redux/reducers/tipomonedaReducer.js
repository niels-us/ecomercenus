import { FIN_CARGANDO_TIPOMONEDA, INICIO_CARGANDO_TIPOMONEDA, SET_TIPOMONEDA } from "../types/types";

let initialState = {
  tipomonedas: [],
  cargandoTipoMonedas: false,
};

export const tipomonedaReducer = (state = initialState, action) => {
  switch (action.type) {
    case INICIO_CARGANDO_TIPOMONEDA:
      return {
        ...state,
        cargandoTipoMonedas: true,
      };
    case FIN_CARGANDO_TIPOMONEDA:
      return {
        ...state,
        cargandoTipoMonedas: false,
      };
    case SET_TIPOMONEDA:
      return {
        ...state,
        tipomonedas: action.payload,
      };
    default:
      return state;
  }
};
