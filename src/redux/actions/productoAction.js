import axios from "axios";
import { URL_BACKEND } from "../../environments/environments";
import { FIN_CARGANDO_PRODUCTOS, INICIO_CARGANDO_PRODUCTOS, SET_PRODUCTOS } from "../types/types"




export const setCargandoProductos=()=>{
    return{
        type: INICIO_CARGANDO_PRODUCTOS
    }
};

export const setFinCargandoProductos=()=>{
    return{
        type: FIN_CARGANDO_PRODUCTOS
    }
};

export const getProductos=()=>{
    return async (dispatch)=>{

        dispatch(setFinCargandoProductos());

        const endpoint=`${URL_BACKEND}/producto`;
        const response= await axios.get(endpoint);
        console.log(response.data)
        dispatch({
            type:SET_PRODUCTOS,
            payload: response.data,
            
        })

        dispatch(setFinCargandoProductos());
    }
}