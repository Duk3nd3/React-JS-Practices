import { combineReducers } from 'redux';
import contadorReducer from './contadorReducer';
import { crudReducer } from './crudReducer';
import { shoppingReducer } from './ShoppingReducer';

const reducer = combineReducers({
	contador: contadorReducer,
	cart: shoppingReducer,
	crud: crudReducer,
});

export default reducer;
