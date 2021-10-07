import {
  FIN_CARGANDO_PRODUCTOS,
  INICIO_CARGANDO_PRODUCTOS,
  SET_PRODUCTOS,
  SET_SELECCIONAR_PRODUCTO,
} from "../types/types";

let initialState = {
  productos: [],
  cargandoProductos: false,
  idProductoSeleccionado: -1,
};

export const productoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECCIONAR_PRODUCTO:
      return {
        ...state,
        idProductoSeleccionado: action.payload,
      }
    case INICIO_CARGANDO_PRODUCTOS:
      return {
        ...state,
        cargandoProductos: true,
      };
    case FIN_CARGANDO_PRODUCTOS:
      return {
        ...state,
        cargandoProductos: false,
      };
    case SET_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };
    default:
      return state;
  }
};
