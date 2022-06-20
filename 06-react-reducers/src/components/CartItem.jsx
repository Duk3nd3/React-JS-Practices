import React from 'react';

const CartItem = ({ data, delFromCart }) => {
	let { id, name, price } = data;

	return (
		<div style={{ borderBottom: 'thin solid gray' }}>
			<h4>{name}</h4>
			<h5>${price}.00</h5>
			<button onClick={delFromCart}>Eliminar</button>
		</div>
	);
};

export default CartItem;
