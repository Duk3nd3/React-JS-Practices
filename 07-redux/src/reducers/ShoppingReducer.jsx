import {
	ADD_TO_CART,
	CLEAR_CART,
	REMOVE_ALL_FROM_CART,
	REMOVE_ONE_FROM_CART,
} from '../types';

export const initialState = {
	products: [
		{
			id: 1,
			name: 'Producto 1',
			price: 100,
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, consequatur facilis! Dignissimos mollitia explicabo dicta similique amet quibusdam error alias veritatis perspiciatis dolorem? Rem, nisi esse! Obcaecati magnam distinctio laborum!',
		},
		{
			id: 2,
			name: 'Producto 2',
			price: 200,
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, consequatur facilis! Dignissimos mollitia explicabo dicta similique amet quibusdam error alias veritatis perspiciatis dolorem? Rem, nisi esse! Obcaecati magnam distinctio laborum!',
		},
		{
			id: 3,
			name: 'Producto 3',
			price: 300,
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, consequatur facilis! Dignissimos mollitia explicabo dicta similique amet quibusdam error alias veritatis perspiciatis dolorem? Rem, nisi esse! Obcaecati magnam distinctio laborum!',
		},
		{
			id: 4,
			name: 'Producto 4',
			price: 400,
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, consequatur facilis! Dignissimos mollitia explicabo dicta similique amet quibusdam error alias veritatis perspiciatis dolorem? Rem, nisi esse! Obcaecati magnam distinctio laborum!',
		},
		{
			id: 5,
			name: 'Producto 5',
			price: 500,
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, consequatur facilis! Dignissimos mollitia explicabo dicta similique amet quibusdam error alias veritatis perspiciatis dolorem? Rem, nisi esse! Obcaecati magnam distinctio laborum!',
		},
		{
			id: 6,
			name: 'Producto 6',
			price: 600,
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, consequatur facilis! Dignissimos mollitia explicabo dicta similique amet quibusdam error alias veritatis perspiciatis dolorem? Rem, nisi esse! Obcaecati magnam distinctio laborum!',
		},
	],
	cart: [],
};

export function shoppingReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART: {
			let newItem = state.products.find(
				(product) => product.id === action.payload
			);

			let itemInCart = state.cart.find((item) => item.id === newItem.id);

			return itemInCart
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === newItem.id
								? { ...item, quantity: item.quantity + 1 }
								: item
						),
				  }
				: {
						...state,
						cart: [...state.cart, { ...newItem, quantity: 1 }],
				  };
		}
		case REMOVE_ONE_FROM_CART: {
			let itemToDelete = state.cart.find((item) => item.id === action.payload);

			return itemToDelete.quantity > 1
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === action.payload
								? { ...item, quantity: item.quantity - 1 }
								: item
						),
				  }
				: {
						...state,
						cart: state.cart.filter((item) => item.id !== action.payload),
				  };
		}
		case REMOVE_ALL_FROM_CART: {
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		}
		case CLEAR_CART:
			return initialState;
		default:
			return state;
	}
}