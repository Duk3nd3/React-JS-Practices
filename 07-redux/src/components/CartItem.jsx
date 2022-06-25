import React from 'react';

const CartItem = ({ data, deleteFromCart, deleteAllFromCart }) => {
	let { id, name, price, quantity, desc } = data;

	return (
		<div className='my-cart box-cart'>
			<h4>{name}</h4>
			<h3>{desc}</h3>
			<h5>
				${price}.00 x {quantity} = ${price * quantity}.00
			</h5>
			<button onClick={() => deleteFromCart(id)}>Eliminar</button>
			<br />
			<button onClick={() => deleteAllFromCart(id, true)}>Eliminar todo</button>
			<br />
			<br />
		</div>
	);
};

export default CartItem;
