import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO, RESTAR_FAVORITO, SUMAR_FAVORITO } from "../types/types"


export const agregarProductoAlfavorito=(objproducto)=>{
	console.log(objproducto);
    return{
        type:AGREGAR_FAVORITO,
        payload:{
            objproducto:objproducto
        }
    }
};

export const eliminarProductoAlFavorito = (objproducto) => {
	return {
		type:ELIMINAR_FAVORITO,
		payload: {
			objproducto: objproducto
		}
	};
};

export const sumarProductoAlFavorito = (objproducto) => {
	return {
		type: SUMAR_FAVORITO,
		payload: {
			objproducto: objproducto
		}
	};
};

export const restarProductoAlFavorito = (objproducto) => {
	return {
		type: RESTAR_FAVORITO,
		payload: {
			objproducto: objproducto
		}
	};
};