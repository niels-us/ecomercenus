import { SET_PAGO } from "../types/types";

const initialState = {
    tipopagos: [
        
    ],
  
};

export const tipopagoReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PAGO:
            return {
                ...state,
                tipopagos: action.payload
            };
            default:
          
            return state;
    }
};