import React from 'react';

const CartItem = ({ data, delFromCart }) => {
	let { id, name, price, quantity, desc } = data;

	return (
		<div style={{ borderBottom: 'thin solid gray' }}>
			<h4>{name}</h4>
			<h3>{desc}</h3>
			<h5>
				${price}.00 x {quantity} = ${price * quantity}.00
			</h5>
			<button onClick={() => delFromCart(id)}>Eliminar</button>
			<br />
			<button onClick={() => delFromCart(id, true)}>Eliminar todo</button>
			<br />
			<br />
		</div>
	);
};

export default CartItem;
