import {
	ADD_TO_CART,
	DELETE_TO_CART,
	DELETE_ALL_TO_CART,
	CLEAR_CART,
} from '../types';

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });

export const deleteFromCart = (id, all = false) =>
	all
		? { type: DELETE_ALL_TO_CART, payload: id }
		: { type: DELETE_TO_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });
