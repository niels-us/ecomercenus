import axios from "axios";
import Swal from "sweetalert2";
import { URL_BACKEND } from "../../environments/environments";
import { FIN_CARGANDO_PRODUCTOS, INICIO_CARGANDO_PRODUCTOS, SET_PRODUCTOS, SET_SELECCIONAR_PRODUCTO } from "../types/types"




export const setCargandoProductos = () => {
    return {
        type: INICIO_CARGANDO_PRODUCTOS
    }
};

export const setFinCargandoProductos = () => {
    return {
        type: FIN_CARGANDO_PRODUCTOS
    }
};

export const getProductos = (id) => {
    return async (dispatch) => {

        dispatch(setCargandoProductos());

        const endpoint = `${URL_BACKEND}/categoria/${id}`;
        const response = await axios.get(endpoint);
        dispatch({
            type: SET_PRODUCTOS,
            payload: response.data.content,
        })

        dispatch(setFinCargandoProductos());
    }
}

export const getCategoriaProductos = () => {
    return async (dispatch) => {

        dispatch(setFinCargandoProductos());

        const endpoint = `${URL_BACKEND}/producto`;
        const response = await axios.get(endpoint);
        dispatch({
            type: SET_PRODUCTOS,
            payload: response.data.content,
        })

        dispatch(setFinCargandoProductos());
    }
}


export const filtroProductos = (textoBuscado) => {
    return async (dispatch) => {

        const endpoint = `${URL_BACKEND}/producto`;
        const response = await axios.get(endpoint);

        let resultadoBusqueda = response.data.content.filter((elemento) => {
            if (elemento.nombre.toString().toLowerCase().includes(textoBuscado.toLowerCase())) {
                return elemento;
            }
        });

        if (resultadoBusqueda.length > 0) {

            dispatch(setFinCargandoProductos());
            dispatch({
                type: SET_PRODUCTOS,
                payload: resultadoBusqueda,
            })

        } else {
            Swal.fire('¡No se encontraron coincidencias!')
        }

        dispatch(setFinCargandoProductos());
    }
}
