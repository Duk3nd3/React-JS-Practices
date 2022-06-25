import { combineReducers } from 'redux';
import contadorReducer from './contadorReducer';
import { shoppingReducer } from './ShoppingReducer';

const reducer = combineReducers({
	contador: contadorReducer,
	cart: shoppingReducer,
});

export default reducer;
