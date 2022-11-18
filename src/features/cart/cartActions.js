import { ADD_TO_CART, DELETE_FROM_CART } from './cartConstants';

export const addToCart = item => async dispatch => {
    let cart;
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
    } else {
        cart = [];
    }

	let exitItem = cart.filter(cartItem => cartItem._id === item._id);

	if (exitItem.length === 0) {
		let addItem = {
			...item,
			count: 1,
		};

		cart.push(addItem);

		localStorage.setItem('cart', JSON.stringify(cart));

		dispatch({
			type: ADD_TO_CART,
			payload: cart,
		});
	}
};

export const deleteFromCart = item => async dispatch => {
	let cart;
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
    } else {
        cart = [];
    }

	let deleteItem = cart.filter(cartItem => cartItem._id !== item._id);

	localStorage.setItem('cart', JSON.stringify(deleteItem));

	dispatch({
		type: DELETE_FROM_CART,
		payload: deleteItem,
	});
};