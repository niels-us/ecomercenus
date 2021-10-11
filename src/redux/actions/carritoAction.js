import { AGREGAR_CARRITO, ELIMINAR_CARRITO, ELIMINAR_TODO_CARRITO, RESTAR_CARRITO, SUMAR_CARRITO } from "../types/types"



export const agregarProductoAlCarrito=(objproducto)=>{
    return{
        type:AGREGAR_CARRITO,
        payload:{
            objproducto:objproducto
        }
    }
};

export const eliminarProductoAlCarrito = (objproducto) => {
	return {
		type:ELIMINAR_CARRITO,
		payload: {
			objproducto: objproducto
		}
	};
};

export const sumarProductoAlCarrito = (objproducto) => {
	return {
		type: SUMAR_CARRITO,
		payload: {
			objproducto: objproducto
		}
	};
};

export const restarProductoAlCarrito = (objproducto) => {
	return {
		type: RESTAR_CARRITO,
		payload: {
			objproducto: objproducto
		}
	};
};

export const eliminarTodolosproductos = (objProducto) => {
	return {
		type: ELIMINAR_TODO_CARRITO,
		payload: objProducto
	};
};