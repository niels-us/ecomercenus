import { FIN_CARGANDO_PRODUCTOS, INICIO_CARGANDO_PRODUCTOS, SET_PRODUCTOS } from "../types/types";

let initialState = {
    productos:[],
    cargandoProductos: false,
  };

export const productoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case INICIO_CARGANDO_PRODUCTOS:
           return{
               ...state,
               cargandoProductos:true,
           };
        case FIN_CARGANDO_PRODUCTOS:
            return{
                ...state,
                cargandoProductos:false,
            };
        case SET_PRODUCTOS:
                return{
                    ...state,
                    productos:action.payload,
                };
        default:
            return state;
    }
}