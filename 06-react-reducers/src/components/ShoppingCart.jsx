import React, { useReducer } from 'react';
import {
	shoppingReducer,
	shoppingInitialState,
} from '../reducers/ShoppingReducer';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

	const { products, cart } = state;

	const addToCart = (id) => {
		console.log(id);
	};

	const delFromCart = () => {};

	const clearCart = () => {};

	return (
		<div>
			<h2>Carrito de Compras</h2>
			<h3>Productos</h3>
			<article className='box grid-responsive'>
				{products.map((product) => (
					<ProductItem key={product.id} data={product} addToCart={addToCart} />
				))}
			</article>
			<h3>Carrito</h3>
			<article className='box'></article>
		</div>
	);
};

export default ShoppingCart;
