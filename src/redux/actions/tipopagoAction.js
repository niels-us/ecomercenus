import { SET_PAGO } from "../types/types";

export const getTipoPago= (datosTipoPago) => {
    return {
        
        type: SET_PAGO,
        payload: datosTipoPago
        
    };
    
};