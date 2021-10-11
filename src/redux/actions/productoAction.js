import axios from "axios";
import { URL_BACKEND } from "../../environments/environments";
import { FIN_CARGANDO_PRODUCTOS, INICIO_CARGANDO_PRODUCTOS, SET_PRODUCTOS, SET_SELECCIONAR_PRODUCTO } from "../types/types"




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

export const getProductos=(id)=>{
    return async (dispatch)=>{        

        dispatch(setCargandoProductos());
        
        const endpoint = `${URL_BACKEND}/categoria/${id}`;
        const response= await axios.get(endpoint);
        dispatch({
            type:SET_PRODUCTOS,
            payload: response.data.content,            
        })

        dispatch(setFinCargandoProductos());
    }
}

export const getCategoriaProductos=()=>{
    return async (dispatch)=>{

        dispatch(setFinCargandoProductos());

        const endpoint=`${URL_BACKEND}/producto`;
        const response= await axios.get(endpoint);
        dispatch({
            type:SET_PRODUCTOS,
            payload: response.data.content,            
        })

        dispatch(setFinCargandoProductos());
    }
}


// export const getProductos=()=>{
//     return async (dispatch)=>{

//         dispatch(setFinCargandoProductos());

//         const endpoint=`${URL_BACKEND}/producto`;
//         const response= await axios.get(endpoint);
//         console.log(response.data.content)
//         console.log(response.data)
//         dispatch({
//             type:SET_PRODUCTOS,
//             payload: response.data.content,
            
//         })

//         dispatch(setFinCargandoProductos());
//     }
// }

// export const seleccionarProductoAction = (id) => {
//     return {
//       type: SET_SELECCIONAR_PRODUCTO,
//       payload: id,
//     };
//   };