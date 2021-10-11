import axios from "axios";
import { URL_BACKEND } from "../../environments/environments";
import { FIN_CARGANDO_TIPOCOMPROBANTE, INICIO_CARGANDO_TIPOCOMPROBANTE, SET_TIPOCOMPROBANTE } from "../types/types";



export const setCargandoTipoComprobantes=()=>{
    return{
        type: INICIO_CARGANDO_TIPOCOMPROBANTE
    }
};
export const setFinCargandoTipoComprobantes=()=>{
    return{
        type: FIN_CARGANDO_TIPOCOMPROBANTE
    }
};

export const getTipoComprobantes=()=>{
    return async (dispatch)=>{

        dispatch(setCargandoTipoComprobantes());

        const endpoint=`${URL_BACKEND}/tipocomprobante`;
        const response= await axios.get(endpoint);
     
        dispatch({
            type:SET_TIPOCOMPROBANTE,
            payload: response.data.content,
            
        })

        dispatch(setFinCargandoTipoComprobantes());
    }
}
