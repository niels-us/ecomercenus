import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO, RESTAR_FAVORITO, SUMAR_FAVORITO } from "../types/types";

const initialState = {
  productos: [],
  total: 0,
  descuentos: 0,
};

export const favoritoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_FAVORITO:
      let copiaProductos = [...state.productos];
      let posicion = copiaProductos.findIndex(
          (objproducto) => objproducto.id === action.payload.objproducto.id);

      if (posicion >= 0) {
        copiaProductos[posicion].cantidad += 1;
      } else {
        copiaProductos.push({ ...action.payload.objproducto, cantidad: 1 });
      }


      let montoTotal = copiaProductos.reduce((sumatoria, objproducto) => {
        return objproducto.precio_venta * objproducto.cantidad + sumatoria;
      }, 0);

      return {
        ...state,
        productos: copiaProductos,
        total: montoTotal,
        descuentos: 0,
      };

    case ELIMINAR_FAVORITO:
      let copiaProduct = [...state.productos];
			let id = action.payload.objproducto.id

			const nuevalista = copiaProduct.filter(objproducto => objproducto.id !== id)

			// console.log(nuevalista)

			let montoTotal1 = nuevalista.reduce((sumatoria, objproducto) => {
				return objproducto.precio_venta * objproducto.cantidad + sumatoria;
			}, 0);

      return {
				...state,
				productos: nuevalista,
				total: montoTotal1,
				descuentos: 0
			};

    case RESTAR_FAVORITO:
        let disminuiralFavorito = [...state.productos];
        let posdisminuirproductos = disminuiralFavorito.findIndex(
          (objproducto) => objproducto.id === action.payload.objproducto.id
        );
  
        disminuiralFavorito[posdisminuirproductos].cantidad -= 1;
  
        let montoTotal2 = disminuiralFavorito.reduce((sumatoria, objproducto) => {
          return objproducto.precio_venta * objproducto.cantidad + sumatoria;
        }, 0);
  
    
        return {
          ...state,
          productos: disminuiralFavorito,
          total: montoTotal2,
          descuentos:0
        };
     case SUMAR_FAVORITO:
          let aumentarFavorito = [...state.productos];
          let posaumentarproductos = aumentarFavorito.findIndex(
            (objproducto) => objproducto.id === action.payload.objproducto.id
          );
          aumentarFavorito[posaumentarproductos].cantidad += 1;
    
          let montoTotal3 = aumentarFavorito.reduce((sumatoria, objproducto) => {
            return objproducto.precio_venta * objproducto.cantidad + sumatoria;
          }, 0);
    
          return {
            ...state,
            productos: aumentarFavorito,
            total: montoTotal3,
            descuentos:0
    
          };
    
    default:
      return state;
  }
};
