import axios from "axios";
import { URL_BACKEND } from "../../environments/environments";
import { FIN_CARGANDO_TIPODOCUMENTO, INICIO_CARGANDO_TIPODOCUMENTO, SET_TIPODOCUMENTO } from "../types/types";

export const setCargandoTipoDocumentos=()=>{
    return{
        type: INICIO_CARGANDO_TIPODOCUMENTO
    }
};
export const setFinCargandoTipoDocumentos=()=>{
    return{
        type: FIN_CARGANDO_TIPODOCUMENTO
    }
};

export const getTipoDocumentos=()=>{
    return async (dispatch)=>{

        dispatch(setCargandoTipoDocumentos());

        const endpoint=`${URL_BACKEND}/tipodocumento`;
        const response= await axios.get(endpoint);
        console.log(response.data.content)
        console.log(response.data)
        dispatch({
            type:SET_TIPODOCUMENTO,
            payload: response.data.content,
            
        })

        dispatch(setFinCargandoTipoDocumentos());
    }
}
