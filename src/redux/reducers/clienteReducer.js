import { FIN_CARGANDO_CLIENTE, INICIO_CARGANDO_CLIENTE, SET_REGISTER_CLIENTE } from "../types/types";


const initialState = {
	registrado: false,
	cargando: false,
	
};

export const clienteReducer=(state=initialState, action)=>{
    switch (action.type) {
		case INICIO_CARGANDO_CLIENTE:
			return {
				...state,
				cargando: true
			};
		case FIN_CARGANDO_CLIENTE:
			return {
				...state,
				cargando: false
			};
		case SET_REGISTER_CLIENTE:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
}