import axios from "axios";
import { URL_BACKEND } from "../../environments/environments";
import { FIN_CARGANDO_TIPOUSUARIO, INICIO_CARGANDO_TIPOUSUARIO, SET_TIPOUSUARIO } from "../types/types";

export const setCargandoTipoUsuarios=()=>{
    return{
        type: INICIO_CARGANDO_TIPOUSUARIO
    }
};
export const setFinCargandoTipoUsuarios=()=>{
    return{
        type: FIN_CARGANDO_TIPOUSUARIO
    }
};

export const getTipoUsuarios=()=>{
    return async (dispatch)=>{

        dispatch(setCargandoTipoUsuarios());

        const endpoint=`${URL_BACKEND}/tipousuario`;
        const response= await axios.get(endpoint);
        console.log(response.data.content)
        console.log(response.data)
        dispatch({
            type:SET_TIPOUSUARIO,
            payload: response.data.content,
            
        })

        dispatch(setFinCargandoTipoUsuarios());
    }
}

