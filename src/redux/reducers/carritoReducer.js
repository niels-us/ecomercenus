import {
  AGREGAR_CARRITO,
  ELIMINAR_CARRITO,
  ELIMINAR_TODO_CARRITO,
  RESTAR_CARRITO,
  SUMAR_CARRITO,
} from "../types/types";

const initialState = {
  productos: [],
  total: 0,
  descuentos: 0,
};

export const carritoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_CARRITO:
      let copiaProductos = [...state.productos];
      let posicion = copiaProductos.findIndex(
        (objproducto) => objproducto.id === action.payload.objproducto.id
      );

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

    case ELIMINAR_CARRITO:
      let copiaProduct = [...state.productos];
      let id = action.payload.objproducto.id;

      const nuevalista = copiaProduct.filter(
        (objproducto) => objproducto.id !== id
      );

      console.log(nuevalista);

      let montoTotal1 = nuevalista.reduce((sumatoria, objproducto) => {
        return objproducto.precio_venta * objproducto.cantidad + sumatoria;
      }, 0);

      return {
        ...state,
        productos: nuevalista,
        total: montoTotal1,
        descuentos: 0,
      };

    case RESTAR_CARRITO:
      let disminuiralcarrito = [...state.productos];
      let posdisminuirproductos = disminuiralcarrito.findIndex(
        (objproducto) => objproducto.id === action.payload.objproducto.id
      );

      disminuiralcarrito[posdisminuirproductos].cantidad -= 1;

      let montoTotal2 = disminuiralcarrito.reduce((sumatoria, objproducto) => {
        return objproducto.precio_venta * objproducto.cantidad + sumatoria;
      }, 0);

      return {
        ...state,
        productos: disminuiralcarrito,
        total: montoTotal2,
        descuentos: 0,
      };
    case SUMAR_CARRITO:
      let aumentarcarrito = [...state.productos];
      let posaumentarproductos = aumentarcarrito.findIndex(
        (objproducto) => objproducto.id === action.payload.objproducto.id
      );
      aumentarcarrito[posaumentarproductos].cantidad += 1;

      let montoTotal3 = aumentarcarrito.reduce((sumatoria, objproducto) => {
        return objproducto.precio_venta * objproducto.cantidad + sumatoria;
      }, 0);

      return {
        ...state,
        productos: aumentarcarrito,
        total: montoTotal3,
        descuentos: 0,
      };

    case ELIMINAR_TODO_CARRITO:
      return {
        ...state,
        productos: [],
        total: 0,
        transporte: 0,
      };

    default:
      return state;
  }
};
