import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { carritoReducer } from '../reducers/carritoReducer';
import { categoriaReducer } from '../reducers/categoriaReducer';
import { clienteReducer } from '../reducers/clienteReducer';
import { loginReducer } from '../reducers/loginReducer';
import { productoReducer } from '../reducers/productoReducer';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const reducers = combineReducers({
	categoria:categoriaReducer,
	producto:productoReducer,
	carrito:carritoReducer,
	login:loginReducer,
	cliente:clienteReducer
	
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
