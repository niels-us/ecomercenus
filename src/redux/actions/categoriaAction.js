import { URL_BACKEND } from "../../environments/environments";
import { FIN_CARGANDO_CATEGORIAS, INICIO_CARGANDO_CATEGORIAS, SET_CATEGORIAS } from "../types/types";
import axios from 'axios';

export const setCargandoCategorias=()=>{
    return{
        type:INICIO_CARGANDO_CATEGORIAS
    };
};

export const setFinCargandoCategorias=()=>{
    return{
        type:FIN_CARGANDO_CATEGORIAS
    };
};

export const getCategorias=()=>{
    return async (dispatch)=>{
        dispatch(setCargandoCategorias());

        const endpoint=`${URL_BACKEND}/categoria`;
        
        const response=await axios.get(endpoint);
        console.log(response.data)
        dispatch({
            type:SET_CATEGORIAS,
            payload:{
                categorias:response.data.content
            }
        })

        dispatch(setFinCargandoCategorias());
    }
}