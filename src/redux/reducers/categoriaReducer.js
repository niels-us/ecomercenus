import {
  INICIO_CARGANDO_CATEGORIAS,
  FIN_CARGANDO_CATEGORIAS,
  SET_CATEGORIAS,
} from "../types/types";

let initialState = {
  categorias:[],
  cargandoCategorias: false,
};


export const categoriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case INICIO_CARGANDO_CATEGORIAS:
      return {
        ...state,
        cargandoCategorias: true
      };
    case FIN_CARGANDO_CATEGORIAS:
      return {
        ...state,
        cargandoCategorias: false
      };
    case SET_CATEGORIAS:
      console.log(action)
      return {
        ...state,
        categorias: action.payload.categorias
        
      };

    default:
      return state;
  }
};
